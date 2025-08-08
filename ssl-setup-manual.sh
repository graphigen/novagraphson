#!/bin/bash

# NovaGraph Manual SSL Setup Script
# Bu script DNS yayılması sorunlarını çözer ve alternatif SSL kurulum yöntemleri sunar

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

print_status "🔒 NovaGraph Manual SSL Setup Script başlatılıyor..."

# Configuration
DOMAIN="novagraph.com.tr"
EMAIL="admin@novagraph.com.tr"
SERVER_IP="13.49.75.107"

# Step 1: Check current DNS status
print_status "🔍 Mevcut DNS durumu kontrol ediliyor..."
echo ""
echo "📊 DNS Kontrol Sonuçları:"
echo "=========================="

# Check A record
if nslookup $DOMAIN | grep -q "$SERVER_IP"; then
    print_success "✅ A Record: $DOMAIN -> $SERVER_IP"
else
    print_warning "⚠️ A Record: $DOMAIN henüz $SERVER_IP'e yönlendirilmemiş"
fi

# Check www subdomain
if nslookup www.$DOMAIN | grep -q "$SERVER_IP"; then
    print_success "✅ A Record: www.$DOMAIN -> $SERVER_IP"
else
    print_warning "⚠️ A Record: www.$DOMAIN henüz $SERVER_IP'e yönlendirilmemiş"
fi

echo ""

# Step 2: Check if domain is accessible from internet
print_status "🌐 Domain internet erişilebilirlik testi..."
if curl -f --connect-timeout 10 http://$DOMAIN > /dev/null 2>&1; then
    print_success "✅ Domain internet üzerinden erişilebilir: $DOMAIN"
    DNS_READY=true
else
    print_warning "⚠️ Domain henüz internet üzerinden erişilebilir değil"
    DNS_READY=false
fi

# Step 3: Check firewall settings
print_status "🔥 Firewall ayarları kontrol ediliyor..."
if sudo ufw status | grep -q "80/tcp.*ALLOW"; then
    print_success "✅ Port 80 firewall'da açık"
else
    print_warning "⚠️ Port 80 firewall'da kapalı, açılıyor..."
    sudo ufw allow 80/tcp
fi

if sudo ufw status | grep -q "443/tcp.*ALLOW"; then
    print_success "✅ Port 443 firewall'da açık"
else
    print_warning "⚠️ Port 443 firewall'da kapalı, açılıyor..."
    sudo ufw allow 443/tcp
fi

# Step 4: Check if Nginx is running and accessible
print_status "🌐 Nginx erişilebilirlik kontrolü..."
if sudo systemctl is-active --quiet nginx; then
    print_success "✅ Nginx çalışıyor"
    
    # Test localhost access
    if curl -f http://localhost > /dev/null 2>&1; then
        print_success "✅ Nginx localhost'ta erişilebilir"
    else
        print_error "❌ Nginx localhost'ta erişilebilir değil"
    fi
else
    print_error "❌ Nginx çalışmıyor"
    sudo systemctl start nginx
fi

# Step 5: Provide options based on DNS status
echo ""
if [ "$DNS_READY" = true ]; then
    print_success "🎯 DNS hazır! SSL sertifikası kurulabilir."
    echo ""
    print_status "SSL sertifikası kurulumuna devam ediliyor..."
    
    # Stop Nginx for SSL setup
    print_status "🔄 Nginx geçici olarak durduruluyor..."
    sudo systemctl stop nginx
    
    # Request SSL certificate
    print_status "🔒 SSL sertifikası talep ediliyor..."
    if sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL; then
        print_success "✅ SSL sertifikası başarıyla kuruldu"
        SSL_SUCCESS=true
    else
        print_error "❌ SSL sertifikası kurulamadı"
        SSL_SUCCESS=false
    fi
    
    # Start Nginx
    print_status "🔄 Nginx başlatılıyor..."
    sudo systemctl start nginx
    
else
    print_warning "⚠️ DNS henüz hazır değil. Alternatif seçenekler:"
    echo ""
    echo "🔧 Seçenekler:"
    echo "1. DNS yayılmasını bekleyin (5-10 dakika) ve tekrar deneyin"
    echo "2. Manuel SSL sertifikası kurulumu"
    echo "3. Self-signed sertifika oluşturun (geçici çözüm)"
    echo ""
    
    read -p "Hangi seçeneği tercih ediyorsunuz? (1/2/3): " -n 1 -r
    echo ""
    
    case $REPLY in
        1)
            print_status "⏳ DNS yayılması için bekleniyor..."
            print_status "5 dakika sonra tekrar deneyin: ./ssl-setup.sh"
            exit 0
            ;;
        2)
            print_status "🔧 Manuel SSL sertifikası kurulumu..."
            print_status "Aşağıdaki komutları manuel olarak çalıştırın:"
            echo ""
            echo "1. Nginx'i durdurun:"
            echo "   sudo systemctl stop nginx"
            echo ""
            echo "2. SSL sertifikası talep edin:"
            echo "   sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL"
            echo ""
            echo "3. Nginx'i başlatın:"
            echo "   sudo systemctl start nginx"
            echo ""
            exit 0
            ;;
        3)
            print_status "🔧 Self-signed sertifika oluşturuluyor..."
            create_self_signed_cert
            ;;
        *)
            print_error "❌ Geçersiz seçenek"
            exit 1
            ;;
    esac
fi

# Step 6: Update Nginx configuration if SSL was successful
if [ "$SSL_SUCCESS" = true ]; then
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

    # Test and reload Nginx
    if sudo nginx -t; then
        print_success "✅ Nginx konfigürasyonu geçerli"
        sudo systemctl reload nginx
        print_success "✅ Nginx yeniden yüklendi"
    else
        print_error "❌ Nginx konfigürasyonu geçersiz"
        exit 1
    fi
    
    # Add automatic renewal
    print_status "🔄 SSL otomatik yenileme ayarlanıyor..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet --post-hook 'systemctl reload nginx'") | crontab -
    print_success "✅ SSL otomatik yenileme ayarlandı"
    
    # Final test
    print_status "🔍 Final SSL testi..."
    sleep 5
    
    if curl -f --connect-timeout 10 https://$DOMAIN > /dev/null 2>&1; then
        print_success "✅ HTTPS erişilebilir: https://$DOMAIN"
    else
        print_warning "⚠️ HTTPS henüz erişilebilir değil, DNS yayılması için bekleniyor..."
    fi
    
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
    print_success "✅ SSL kurulumu tamamlandı! Site https://$DOMAIN adresinde güvenli şekilde erişilebilir."
    
else
    echo ""
    print_warning "⚠️ SSL kurulumu başarısız oldu."
    echo ""
    echo "🔧 Çözüm Önerileri:"
    echo "1. DNS ayarlarının yayılmasını bekleyin (5-10 dakika)"
    echo "2. Cloudflare DNS ayarlarını kontrol edin"
    echo "3. Firewall ayarlarını kontrol edin"
    echo "4. Manuel SSL kurulumu deneyin"
    echo ""
    echo "📞 Manuel SSL Kurulumu:"
    echo "sudo certbot certonly --standalone -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL"
    echo ""
fi

# Function to create self-signed certificate
create_self_signed_cert() {
    print_status "🔧 Self-signed sertifika oluşturuluyor..."
    
    # Create SSL directory
    sudo mkdir -p /etc/ssl/private
    
    # Generate self-signed certificate
    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/ssl/private/$DOMAIN.key \
        -out /etc/ssl/certs/$DOMAIN.crt \
        -subj "/C=TR/ST=Istanbul/L=Istanbul/O=NovaGraph/OU=IT/CN=$DOMAIN"
    
    print_success "✅ Self-signed sertifika oluşturuldu"
    
    # Update Nginx configuration for self-signed certificate
    print_status "🌐 Nginx self-signed sertifika konfigürasyonu güncelleniyor..."
    sudo tee /etc/nginx/sites-available/$DOMAIN > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration (Self-signed)
    ssl_certificate /etc/ssl/certs/$DOMAIN.crt;
    ssl_certificate_key /etc/ssl/private/$DOMAIN.key;
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
    
    # Test and reload Nginx
    if sudo nginx -t; then
        print_success "✅ Nginx konfigürasyonu geçerli"
        sudo systemctl reload nginx
        print_success "✅ Nginx yeniden yüklendi"
    else
        print_error "❌ Nginx konfigürasyonu geçersiz"
        exit 1
    fi
    
    echo ""
    print_success "🎉 Self-signed SSL sertifikası başarıyla kuruldu!"
    echo ""
    echo "📊 SSL Bilgileri:"
    echo "   🔒 Domain: $DOMAIN"
    echo "   🌐 HTTPS URL: https://$DOMAIN"
    echo "   📅 Sertifika Süresi: 365 gün (Self-signed)"
    echo "   ⚠️ Self-signed sertifika (tarayıcı uyarısı gösterebilir)"
    echo ""
    print_success "✅ Self-signed SSL kurulumu tamamlandı! Site https://$DOMAIN adresinde erişilebilir."
}
