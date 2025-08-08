#!/bin/bash

# NovaGraph AWS EC2 Deployment Script
# Bu script AWS EC2 instance'ında çalıştırılmalıdır

set -e

echo "🚀 NovaGraph AWS EC2 Deployment başlatılıyor..."

# Gerekli paketleri kur
echo "📦 Gerekli paketler kuruluyor..."
sudo apt update
sudo apt install -y curl git nginx certbot python3-certbot-nginx

# Node.js kur
echo "📦 Node.js kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 kur
echo "📦 PM2 kuruluyor..."
sudo npm install -g pm2

# Proje klasörü oluştur
echo "📁 Proje klasörü oluşturuluyor..."
sudo mkdir -p /var/www/novagraph
sudo chown -R $USER:$USER /var/www/novagraph
cd /var/www/novagraph

# Git repository'yi clone et
echo "📥 Git repository clone ediliyor..."
git clone https://github.com/your-username/novagraphson.git .

# Bağımlılıkları yükle
echo "📦 Bağımlılıklar yükleniyor..."
npm install

# Production build
echo "🔨 Production build oluşturuluyor..."
npm run build

# PM2 ecosystem dosyasını kopyala
echo "⚙️ PM2 konfigürasyonu..."
cp ecosystem.config.js /var/www/novagraph/

# PM2 log klasörü oluştur
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# PM2 ile uygulamayı başlat
echo "🚀 Uygulama PM2 ile başlatılıyor..."
pm2 start ecosystem.config.js
pm2 startup
pm2 save

# Nginx konfigürasyonu
echo "🌐 Nginx konfigürasyonu..."
sudo cp nginx.conf /etc/nginx/sites-available/novagraph.com.tr
sudo ln -sf /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Nginx syntax kontrolü
sudo nginx -t

# Nginx'i yeniden başlat
sudo systemctl reload nginx

# Firewall ayarları
echo "🔥 Firewall ayarları..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

# SSL sertifikası (opsiyonel)
echo "🔒 SSL sertifikası kuruluyor..."
read -p "SSL sertifikası kurmak istiyor musunuz? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr --non-interactive --agree-tos --email your-email@example.com
    
    # Otomatik yenileme için cron job
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
fi

echo "✅ Deployment tamamlandı!"
echo "🌐 Site adresi: https://novagraph.com.tr"
echo "📊 PM2 durumu: pm2 status"
echo "📝 Nginx logları: sudo tail -f /var/log/nginx/access.log"
echo "🔍 Health check: curl http://localhost/health"
