#!/bin/bash

# NovaGraph Website SSL Setup Script
# Bu script Let's Encrypt SSL sertifikası kurar

set -e

echo "🔒 NovaGraph Website SSL Setup Başlıyor..."

# Sunucu bilgileri
SERVER_IP="13.49.75.107"
SERVER_USER="ubuntu"
DOMAIN="novagraph.com.tr"

echo "📧 SSL sertifikası için email adresi gerekli..."
read -p "Email adresinizi girin: " EMAIL

if [ -z "$EMAIL" ]; then
    echo "❌ Email adresi gerekli!"
    exit 1
fi

echo "📧 Email: $EMAIL"
echo "🌐 Domain: $DOMAIN"

# Sunucuda SSL kurulumu
echo "🔧 Sunucuda SSL kurulumu yapılıyor..."
ssh $SERVER_USER@$SERVER_IP << EOF
    # Certbot kurulumu
    echo "📦 Certbot kuruluyor..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
    
    # SSL sertifikası alma
    echo "🔒 SSL sertifikası alınıyor..."
    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email $EMAIL
    
    # Otomatik yenileme için cron job
    echo "⏰ Otomatik yenileme cron job'ı ekleniyor..."
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    
    # Nginx konfigürasyonu güncelleme
    echo "⚙️ Nginx konfigürasyonu güncelleniyor..."
    sudo sed -i 's/listen 80;/listen 80;\n    return 301 https:\/\/\$server_name\$request_uri;/' /etc/nginx/sites-available/novagraph.com.tr
    
    # Nginx yeniden başlatma
    sudo nginx -t
    sudo systemctl reload nginx
    
    echo "✅ SSL kurulumu tamamlandı!"
    
    # SSL durumu kontrolü
    echo ""
    echo "🔍 SSL Sertifika Durumu:"
    sudo certbot certificates
    
    echo ""
    echo "🌐 HTTPS Test:"
    curl -s -I https://$DOMAIN | head -1 || echo "HTTPS test başarısız"
EOF

echo ""
echo "🎉 SSL Setup Tamamlandı!"
echo "🔒 Site: https://$DOMAIN"
echo "📅 Sertifika yenileme: Otomatik (günlük)"
echo "📊 SSL Durumu: ssh $SERVER_USER@$SERVER_IP 'sudo certbot certificates'"
