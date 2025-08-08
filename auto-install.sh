#!/bin/bash

# NovaGraph Auto Installation Script - Tam Otomatik Kurulum
# Bu script projeyi GitHub'dan indirir ve tüm kurulum işlemlerini otomatik olarak yapar

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "Bu script root olarak çalıştırılmamalıdır. Ubuntu kullanıcısı olarak çalıştırın."
   exit 1
fi

print_status "🚀 NovaGraph Auto Installation Script başlatılıyor..."

# Configuration
PROJECT_NAME="novagraph"
PROJECT_DIR="/var/www/$PROJECT_NAME"
GITHUB_REPO="https://github.com/graphigen/novagraphson.git"
DOMAIN="novagraph.com.tr"
SERVER_IP="13.49.75.107"

# Step 1: System Update
print_status "📦 Sistem güncelleniyor..."
sudo apt update && sudo apt upgrade -y

# Step 2: Install Required Packages
print_status "📦 Gerekli paketler kuruluyor..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx unzip

# Step 3: Install Node.js 18.x
print_status "📦 Node.js 18.x kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
print_success "Node.js $NODE_VERSION ve npm $NPM_VERSION kuruldu"

# Step 4: Install PM2
print_status "📦 PM2 kuruluyor..."
sudo npm install -g pm2

# Step 5: Create Project Directory
print_status "📁 Proje klasörü oluşturuluyor..."
sudo mkdir -p $PROJECT_DIR
sudo chown $USER:$USER $PROJECT_DIR
cd $PROJECT_DIR

# Step 6: Clone Repository
print_status "📥 Git repository clone ediliyor..."
if [ -d ".git" ]; then
    print_status "Repository zaten mevcut, güncelleniyor..."
    git pull origin main
else
    git clone $GITHUB_REPO .
fi

# Step 7: Install Dependencies
print_status "📦 Bağımlılıklar yükleniyor..."
npm install

# Step 8: Create .env file
print_status "🔧 .env dosyası oluşturuluyor..."
cat > .env << EOF
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_APP_URL=https://$DOMAIN
AWS_EC2_IP=$SERVER_IP
EOF
print_success ".env dosyası oluşturuldu"

# Step 9: Build Application
print_status "🔨 Production build oluşturuluyor..."
npm run build

# Step 10: Create PM2 Ecosystem Config
print_status "🔧 PM2 ecosystem konfigürasyonu oluşturuluyor..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: '$PROJECT_NAME',
    script: 'npm',
    args: 'start',
    cwd: '$PROJECT_DIR',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_URL: 'https://$DOMAIN',
      AWS_EC2_IP: '$SERVER_IP'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_URL: 'https://$DOMAIN',
      AWS_EC2_IP: '$SERVER_IP'
    },
    error_file: '/var/log/pm2/$PROJECT_NAME-error.log',
    out_file: '/var/log/pm2/$PROJECT_NAME-out.log',
    log_file: '/var/log/pm2/$PROJECT_NAME-combined.log',
    time: true,
    max_memory_restart: '1G',
    min_uptime: '10s',
    max_restarts: 10,
    autorestart: true,
    watch: false,
    ignore_watch: ['node_modules', 'logs', '.git', '.next']
  }]
}
EOF

# Step 11: Create PM2 Log Directory
print_status "📁 PM2 log klasörü oluşturuluyor..."
sudo mkdir -p /var/log/pm2
sudo chown $USER:$USER /var/log/pm2

# Step 12: Start Application with PM2
print_status "🚀 Uygulama PM2 ile başlatılıyor..."
pm2 start ecosystem.config.js
pm2 save

# Step 13: Configure PM2 Startup
print_status "🔧 PM2 startup konfigürasyonu..."
pm2 startup systemd -u $USER --hp /home/$USER

# Step 14: Create Nginx Configuration
print_status "🌐 Nginx konfigürasyonu oluşturuluyor..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    # Proxy settings
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
        proxy_connect_timeout 86400;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    location /_next/image/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # API routes
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        add_header Cache-Control "no-cache, no-store";
    }
    
    # Health check
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
    
    # Security: Block access to sensitive files
    location ~ /\. {
        deny all;
    }
    
    location ~* \.(env|git|htaccess|htpasswd|ini|log|sql|bak|backup)$ {
        deny all;
    }
}
EOF

# Step 15: Enable Nginx Site
print_status "🌐 Nginx site aktifleştiriliyor..."
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Step 16: Test Nginx Configuration
print_status "🔍 Nginx konfigürasyonu test ediliyor..."
if sudo nginx -t; then
    print_success "Nginx konfigürasyonu geçerli"
else
    print_error "Nginx konfigürasyonu geçersiz!"
    exit 1
fi

# Step 17: Reload Nginx
print_status "🔄 Nginx yeniden başlatılıyor..."
sudo systemctl reload nginx

# Step 18: Configure Firewall
print_status "🔥 Firewall ayarları..."
sudo ufw allow 'Nginx Full' 2>/dev/null || true
sudo ufw allow OpenSSH 2>/dev/null || true
sudo ufw --force enable 2>/dev/null || true

# Step 19: SSL Certificate (Optional)
print_status "🔒 SSL sertifikası kontrol ediliyor..."
if command -v certbot &> /dev/null; then
    if nslookup $DOMAIN &> /dev/null; then
        print_status "Domain erişilebilir, SSL sertifikası kuruluyor..."
        if sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN; then
            print_success "SSL sertifikası başarıyla kuruldu"
            # Add automatic renewal cron job
            (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
            print_success "SSL otomatik yenileme ayarlandı"
        else
            print_warning "SSL sertifikası kurulamadı. Daha sonra manuel olarak kurabilirsiniz."
        fi
    else
        print_warning "Domain erişilebilir değil, SSL sertifikası atlanıyor."
    fi
else
    print_warning "Certbot kurulu değil, SSL sertifikası atlanıyor."
fi

# Step 20: Create Health Check Script
print_status "🏥 Health check script oluşturuluyor..."
cat > $PROJECT_DIR/health-check.sh << 'EOF'
#!/bin/bash
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo "OK"
else
    echo "FAIL"
fi
EOF
chmod +x $PROJECT_DIR/health-check.sh

# Step 21: Create Update Script
print_status "🔄 Update script oluşturuluyor..."
cat > $PROJECT_DIR/update.sh << EOF
#!/bin/bash
cd $PROJECT_DIR
git pull origin main
npm install
npm run build
pm2 restart $PROJECT_NAME
echo "Update completed!"
EOF
chmod +x $PROJECT_DIR/update.sh

# Step 22: Set Proper Permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R $USER:$USER $PROJECT_DIR
sudo chmod -R 755 $PROJECT_DIR

# Step 23: Final Status Check
print_status "🔍 Final durum kontrolü..."
sleep 5

# Check if application is running
if pm2 list | grep -q "$PROJECT_NAME.*online"; then
    print_success "✅ Uygulama başarıyla çalışıyor!"
else
    print_error "❌ Uygulama çalışmıyor!"
    pm2 logs $PROJECT_NAME --lines 5
    exit 1
fi

# Check if Nginx is running
if sudo systemctl is-active --quiet nginx; then
    print_success "✅ Nginx başarıyla çalışıyor!"
else
    print_error "❌ Nginx çalışmıyor!"
    exit 1
fi

# Check if application is accessible
print_status "🌐 Uygulama erişilebilirlik testi..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    print_success "✅ Uygulama localhost:3000'de erişilebilir"
else
    print_warning "⚠️ Uygulama localhost:3000'de erişilebilir değil"
fi

# Check if Nginx is accessible
if curl -f http://localhost > /dev/null 2>&1; then
    print_success "✅ Nginx localhost'ta erişilebilir"
else
    print_warning "⚠️ Nginx localhost'ta erişilebilir değil"
fi

# Display final information
echo ""
print_success "🎉 NovaGraph başarıyla kuruldu ve çalışıyor!"
echo ""
echo "📊 Uygulama Bilgileri:"
echo "   🌐 Site URL: https://$DOMAIN"
echo "   🖥️  Sunucu IP: $SERVER_IP"
echo "   📁 Proje Dizini: $PROJECT_DIR"
echo ""
echo "🔧 Yönetim Komutları:"
echo "   📊 PM2 Durumu: pm2 status"
echo "   🔄 Uygulama Yenileme: pm2 restart $PROJECT_NAME"
echo "   📝 PM2 Logları: pm2 logs $PROJECT_NAME"
echo "   🆕 Güncelleme: ./update.sh"
echo "   🏥 Health Check: ./health-check.sh"
echo ""
echo "📝 Nginx Logları:"
echo "   📄 Access Log: sudo tail -f /var/log/nginx/access.log"
echo "   📄 Error Log: sudo tail -f /var/log/nginx/error.log"
echo ""
echo "🔍 Hızlı Test Komutları:"
echo "   🌐 Site Testi: curl -I https://$DOMAIN"
echo "   🏥 Health Check: ./health-check.sh"
echo "   📊 PM2 Durumu: pm2 monit"
echo ""
print_success "✅ Kurulum tamamlandı! Site https://$DOMAIN adresinde erişilebilir."
