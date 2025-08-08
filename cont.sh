#!/bin/bash

# NovaGraph Continuation Script - Kalan Kurulum İşlemleri
# Bu script build işleminden sonra çalıştırılmalıdır

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

print_status "🚀 NovaGraph Continuation Script başlatılıyor..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    print_error "Bu script /var/www/novagraph dizininde çalıştırılmalıdır."
    exit 1
fi

# Check if build was successful
if [ ! -d ".next" ]; then
    print_error "Build işlemi tamamlanmamış. Önce 'npm run build' komutunu çalıştırın."
    exit 1
fi

print_success "✅ Build işlemi başarılı, devam ediliyor..."

# Create PM2 log directory
print_status "📁 PM2 log klasörü oluşturuluyor..."
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Copy ecosystem config if it doesn't exist
if [ ! -f "ecosystem.config.js" ]; then
    print_status "⚙️ PM2 konfigürasyonu oluşturuluyor..."
    cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'novagraph',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/novagraph',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_URL: 'https://novagraph.com.tr',
      AWS_EC2_IP: '13.49.75.107'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_URL: 'https://novagraph.com.tr',
      AWS_EC2_IP: '13.49.75.107'
    },
    error_file: '/var/log/pm2/novagraph-error.log',
    out_file: '/var/log/pm2/novagraph-out.log',
    log_file: '/var/log/pm2/novagraph-combined.log',
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
    print_success "PM2 konfigürasyonu oluşturuldu"
fi

# Start application with PM2
print_status "🚀 Uygulama PM2 ile başlatılıyor..."
pm2 delete novagraph 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 startup
pm2 save

# Configure Nginx
print_status "🌐 Nginx konfigürasyonu..."
if [ ! -f "nginx.conf" ]; then
    print_status "📄 Nginx konfigürasyon dosyası oluşturuluyor..."
    cat > nginx.conf << 'EOF'
server {
    listen 80;
    server_name novagraph.com.tr www.novagraph.com.tr;
    
    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript;
    
    # Proxy settings
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
        proxy_connect_timeout 86400;
    }
    
    # Static files caching
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    location /_next/image/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    
    # API routes
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
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
    print_success "Nginx konfigürasyon dosyası oluşturuldu"
fi

# Copy Nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/novagraph.com.tr
sudo ln -sf /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "🔍 Nginx konfigürasyonu test ediliyor..."
sudo nginx -t

# Reload Nginx
print_status "🔄 Nginx yeniden başlatılıyor..."
sudo systemctl reload nginx

# Configure firewall
print_status "🔥 Firewall ayarları..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

# SSL Certificate setup
print_status "🔒 SSL sertifikası kuruluyor..."
read -p "SSL sertifikası kurmak istiyor musunuz? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr --non-interactive --agree-tos --email admin@novagraph.com.tr
    
    # Add automatic renewal cron job
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    print_success "SSL sertifikası kuruldu ve otomatik yenileme ayarlandı"
else
    print_warning "SSL sertifikası kurulmadı. Daha sonra manuel olarak kurabilirsiniz."
fi

# Create health check script
print_status "🏥 Health check script oluşturuluyor..."
cat > /var/www/novagraph/health-check.sh << 'EOF'
#!/bin/bash
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo "OK"
else
    echo "FAIL"
fi
EOF
chmod +x /var/www/novagraph/health-check.sh

# Create update script
print_status "🔄 Update script oluşturuluyor..."
cat > /var/www/novagraph/update.sh << 'EOF'
#!/bin/bash
cd /var/www/novagraph
git pull origin main
npm install
npm run build
pm2 restart novagraph
echo "Update completed!"
EOF
chmod +x /var/www/novagraph/update.sh

# Set proper permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R $USER:$USER /var/www/novagraph
sudo chmod -R 755 /var/www/novagraph

# Final status check
print_status "🔍 Final durum kontrolü..."
sleep 5

# Check if application is running
if pm2 list | grep -q "novagraph.*online"; then
    print_success "✅ Uygulama başarıyla çalışıyor!"
else
    print_error "❌ Uygulama başlatılamadı!"
    pm2 logs novagraph --lines 10
    exit 1
fi

# Check if Nginx is running
if sudo systemctl is-active --quiet nginx; then
    print_success "✅ Nginx başarıyla çalışıyor!"
else
    print_error "❌ Nginx başlatılamadı!"
    exit 1
fi

# Display final information
echo ""
print_success "🎉 NovaGraph başarıyla kuruldu ve çalışıyor!"
echo ""
echo "📊 Uygulama Bilgileri:"
echo "   🌐 Site URL: https://novagraph.com.tr"
echo "   🖥️  Sunucu IP: 13.49.75.107"
echo "   📁 Proje Dizini: /var/www/novagraph"
echo ""
echo "🔧 Yönetim Komutları:"
echo "   📊 PM2 Durumu: pm2 status"
echo "   🔄 Uygulama Yenileme: pm2 restart novagraph"
echo "   📝 PM2 Logları: pm2 logs novagraph"
echo "   🆕 Güncelleme: ./update.sh"
echo "   🏥 Health Check: curl http://localhost/health"
echo ""
echo "📝 Nginx Logları:"
echo "   📄 Access Log: sudo tail -f /var/log/nginx/access.log"
echo "   📄 Error Log: sudo tail -f /var/log/nginx/error.log"
echo ""
print_success "✅ Kurulum tamamlandı! Site https://novagraph.com.tr adresinde erişilebilir."
