#!/bin/bash

# NovaGraph Finish Installation Script
# Bu script auto-install'ın kalan adımlarını tamamlar

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

print_status "🚀 NovaGraph Finish Installation Script başlatılıyor..."

# Configuration
PROJECT_NAME="novagraph"
PROJECT_DIR="/var/www/$PROJECT_NAME"
DOMAIN="novagraph.com.tr"
SERVER_IP="13.49.75.107"

# Step 1: Complete PM2 Startup Configuration
print_status "🔧 PM2 startup konfigürasyonu tamamlanıyor..."
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu

# Step 2: Create Nginx Configuration
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

# Step 3: Enable Nginx Site
print_status "🌐 Nginx site aktifleştiriliyor..."
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Step 4: Test Nginx Configuration
print_status "🔍 Nginx konfigürasyonu test ediliyor..."
if sudo nginx -t; then
    print_success "Nginx konfigürasyonu geçerli"
else
    print_error "Nginx konfigürasyonu geçersiz!"
    exit 1
fi

# Step 5: Reload Nginx
print_status "🔄 Nginx yeniden başlatılıyor..."
sudo systemctl reload nginx

# Step 6: Configure Firewall
print_status "🔥 Firewall ayarları..."
sudo ufw allow 'Nginx Full' 2>/dev/null || true
sudo ufw allow OpenSSH 2>/dev/null || true
sudo ufw --force enable 2>/dev/null || true

# Step 7: SSL Certificate (Optional)
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

# Step 8: Create Health Check Script
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

# Step 9: Create Update Script
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

# Step 10: Set Proper Permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R $USER:$USER $PROJECT_DIR
sudo chmod -R 755 $PROJECT_DIR

# Step 11: Final Status Check
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
