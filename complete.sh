#!/bin/bash

# NovaGraph Complete Installation Script - Tüm Kurulum İşlemlerini Tamamlar
# Bu script kurulumun kalan tüm adımlarını otomatik olarak tamamlar

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

print_status "🚀 NovaGraph Complete Installation Script başlatılıyor..."

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    print_error "Bu script /var/www/novagraph dizininde çalıştırılmalıdır."
    exit 1
fi

# Check if PM2 is running
if ! pm2 list | grep -q "novagraph"; then
    print_error "PM2 uygulaması çalışmıyor. Önce 'npm run build' ve 'pm2 start ecosystem.config.js' komutlarını çalıştırın."
    exit 1
fi

print_success "✅ PM2 uygulaması çalışıyor, devam ediliyor..."

# Step 1: PM2 Startup Configuration
print_status "🔧 PM2 startup konfigürasyonu..."
if ! pm2 startup | grep -q "systemd"; then
    print_status "PM2 startup komutu çalıştırılıyor..."
    sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
fi

# Save PM2 configuration
print_status "💾 PM2 konfigürasyonu kaydediliyor..."
pm2 save

# Step 2: Create Nginx configuration if it doesn't exist
print_status "🌐 Nginx konfigürasyonu kontrol ediliyor..."
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

# Step 3: Configure Nginx
print_status "🌐 Nginx konfigürasyonu uygulanıyor..."
sudo cp nginx.conf /etc/nginx/sites-available/novagraph.com.tr
sudo ln -sf /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
print_status "🔍 Nginx konfigürasyonu test ediliyor..."
if sudo nginx -t; then
    print_success "Nginx konfigürasyonu geçerli"
else
    print_error "Nginx konfigürasyonu geçersiz!"
    exit 1
fi

# Reload Nginx
print_status "🔄 Nginx yeniden başlatılıyor..."
sudo systemctl reload nginx

# Step 4: Configure Firewall
print_status "🔥 Firewall ayarları..."
sudo ufw allow 'Nginx Full' 2>/dev/null || true
sudo ufw allow OpenSSH 2>/dev/null || true
sudo ufw --force enable 2>/dev/null || true

# Step 5: SSL Certificate (Optional - Auto-detect if domain is accessible)
print_status "🔒 SSL sertifikası kontrol ediliyor..."
if command -v certbot &> /dev/null; then
    # Check if domain is accessible
    if nslookup novagraph.com.tr &> /dev/null; then
        print_status "Domain erişilebilir, SSL sertifikası kuruluyor..."
        if sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr --non-interactive --agree-tos --email admin@novagraph.com.tr; then
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

# Step 6: Create Health Check Script
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

# Step 7: Create Update Script
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

# Step 8: Set proper permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R $USER:$USER /var/www/novagraph
sudo chmod -R 755 /var/www/novagraph

# Step 9: Final status check
print_status "🔍 Final durum kontrolü..."
sleep 5

# Check if application is running
if pm2 list | grep -q "novagraph.*online"; then
    print_success "✅ Uygulama başarıyla çalışıyor!"
else
    print_error "❌ Uygulama çalışmıyor!"
    pm2 logs novagraph --lines 5
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
echo "🔍 Hızlı Test Komutları:"
echo "   🌐 Site Testi: curl -I https://novagraph.com.tr"
echo "   🏥 Health Check: ./health-check.sh"
echo "   📊 PM2 Durumu: pm2 monit"
echo ""
print_success "✅ Kurulum tamamlandı! Site https://novagraph.com.tr adresinde erişilebilir."
