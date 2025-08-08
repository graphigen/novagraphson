#!/bin/bash

# NovaGraph SSL Setup Script
# Bu script DNS ayarları yapıldıktan sonra SSL sertifikasını kurar

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

print_status "🔒 NovaGraph SSL Setup Script başlatılıyor..."

# Configuration
DOMAIN="novagraph.com.tr"
EMAIL="admin@novagraph.com.tr"

# Step 1: Check if domain is accessible
print_status "🔍 Domain erişilebilirlik kontrolü..."
if nslookup $DOMAIN &> /dev/null; then
    print_success "Domain erişilebilir: $DOMAIN"
else
    print_error "Domain erişilebilir değil: $DOMAIN"
    print_status "DNS ayarlarının yayılması için birkaç dakika bekleyin."
    exit 1
fi

# Step 2: Check if certbot is installed
print_status "🔍 Certbot kontrolü..."
if ! command -v certbot &> /dev/null; then
    print_status "Certbot kuruluyor..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
else
    print_success "Certbot zaten kurulu"
fi

# Step 3: Test domain connectivity
print_status "🌐 Domain bağlantı testi..."
if curl -f http://$DOMAIN > /dev/null 2>&1; then
    print_success "Domain HTTP erişilebilir"
else
    print_warning "Domain HTTP erişilebilir değil, DNS yayılması için bekleniyor..."
    print_status "DNS ayarlarının yayılması 5-10 dakika sürebilir."
    read -p "Devam etmek istiyor musunuz? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_status "SSL kurulumu iptal edildi."
        exit 0
    fi
fi

# Step 4: Stop Nginx temporarily for SSL setup
print_status "🔄 Nginx geçici olarak durduruluyor..."
sudo systemctl stop nginx

# Step 5: Request SSL certificate
print_status "🔒 SSL sertifikası talep ediliyor..."
if sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL; then
    print_success "SSL sertifikası başarıyla kuruldu"
else
    print_error "SSL sertifikası kurulamadı"
    print_status "Nginx yeniden başlatılıyor..."
    sudo systemctl start nginx
    exit 1
fi

# Step 6: Update Nginx configuration for SSL
print_status "🌐 Nginx SSL konfigürasyonu güncelleniyor..."
sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
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

# Step 7: Test Nginx configuration
print_status "🔍 Nginx konfigürasyonu test ediliyor..."
if sudo nginx -t; then
    print_success "Nginx konfigürasyonu geçerli"
else
    print_error "Nginx konfigürasyonu geçersiz!"
    sudo systemctl start nginx
    exit 1
fi

# Step 8: Start Nginx
print_status "🔄 Nginx başlatılıyor..."
sudo systemctl start nginx

# Step 9: Add automatic renewal cron job
print_status "🔄 SSL otomatik yenileme ayarlanıyor..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -
print_success "SSL otomatik yenileme ayarlandı"

# Step 10: Test SSL certificate
print_status "🔍 SSL sertifikası test ediliyor..."
sleep 5

if curl -f https://$DOMAIN > /dev/null 2>&1; then
    print_success "✅ HTTPS erişilebilir: https://$DOMAIN"
else
    print_warning "⚠️ HTTPS henüz erişilebilir değil, DNS yayılması için bekleniyor..."
fi

# Step 11: Final status check
print_status "🔍 Final durum kontrolü..."

# Check if Nginx is running
if sudo systemctl is-active --quiet nginx; then
    print_success "✅ Nginx başarıyla çalışıyor!"
else
    print_error "❌ Nginx çalışmıyor!"
    exit 1
fi

# Check SSL certificate
if sudo certbot certificates | grep -q "$DOMAIN"; then
    print_success "✅ SSL sertifikası kurulu"
else
    print_error "❌ SSL sertifikası bulunamadı"
fi

# Display final information
echo ""
print_success "🎉 SSL sertifikası başarıyla kuruldu!"
echo ""
echo "📊 SSL Bilgileri:"
echo "   🔒 Domain: $DOMAIN"
echo "   🌐 HTTPS URL: https://$DOMAIN"
echo "   📅 Sertifika Süresi: 90 gün"
echo "   🔄 Otomatik Yenileme: Aktif"
echo ""
echo "🔧 SSL Yönetimi:"
echo "   📊 Sertifika Durumu: sudo certbot certificates"
echo "   🔄 Manuel Yenileme: sudo certbot renew"
echo "   📝 SSL Logları: sudo tail -f /var/log/letsencrypt/letsencrypt.log"
echo ""
echo "🔍 Test Komutları:"
echo "   🌐 HTTPS Testi: curl -I https://$DOMAIN"
echo "   🔒 SSL Testi: openssl s_client -connect $DOMAIN:443 -servername $DOMAIN"
echo "   🏥 Health Check: curl https://$DOMAIN/health"
echo ""
print_success "✅ SSL kurulumu tamamlandı! Site https://$DOMAIN adresinde güvenli şekilde erişilebilir."
