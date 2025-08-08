#!/bin/bash

# NovaGraph Website Server Setup Script
# Bu script AWS EC2 Ubuntu sunucusunda çalıştırılmalıdır

set -e

echo "🚀 NovaGraph Website Server Setup Başlıyor..."
echo "📍 Sunucu: $(hostname) - $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo "⏰ Tarih: $(date)"

# Root kontrolü
if [ "$EUID" -eq 0 ]; then
    echo "❌ Bu script root olarak çalıştırılmamalıdır!"
    exit 1
fi

# Sistem güncellemesi
echo "📦 Sistem güncellemesi yapılıyor..."
sudo apt update
sudo apt upgrade -y

# Gerekli paketlerin kurulumu
echo "📦 Gerekli paketler kuruluyor..."
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Node.js 18.x kurulumu
echo "📦 Node.js 18.x kuruluyor..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js zaten kurulu: $(node --version)"
fi

# NPM güncellemesi
echo "📦 NPM güncelleniyor..."
sudo npm install -g npm@latest

# PM2 kurulumu
echo "📦 PM2 kuruluyor..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
else
    echo "✅ PM2 zaten kurulu: $(pm2 --version)"
fi

# Nginx kurulumu
echo "📦 Nginx kuruluyor..."
if ! command -v nginx &> /dev/null; then
    sudo apt install -y nginx
else
    echo "✅ Nginx zaten kurulu: $(nginx -v)"
fi

# UFW firewall kurulumu ve konfigürasyonu
echo "🔥 Firewall konfigürasyonu..."
sudo apt install -y ufw
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# Proje klasörü oluşturma
echo "📁 Proje klasörü oluşturuluyor..."
PROJECT_DIR="/home/ubuntu/novagraph-website"
sudo mkdir -p $PROJECT_DIR
sudo chown -R ubuntu:ubuntu $PROJECT_DIR

# Log klasörleri oluşturma
echo "📁 Log klasörleri oluşturuluyor..."
mkdir -p $PROJECT_DIR/logs
mkdir -p /var/log/novagraph

# Nginx konfigürasyonu
echo "⚙️ Nginx konfigürasyonu..."
sudo cp nginx.conf /etc/nginx/sites-available/novagraph.com.tr
sudo ln -sf /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Nginx syntax kontrolü
sudo nginx -t

# Nginx servisini yeniden başlat
sudo systemctl restart nginx
sudo systemctl enable nginx

# PM2 startup script'i oluşturma
echo "⚙️ PM2 startup konfigürasyonu..."
pm2 startup ubuntu

# Sistem servisleri durumu
echo "📊 Servis durumları kontrol ediliyor..."
echo "Nginx: $(sudo systemctl is-active nginx)"
echo "UFW: $(sudo ufw status | head -1)"

# Bağlantı testi
echo "🌐 Bağlantı testi..."
if curl -s http://localhost/health > /dev/null; then
    echo "✅ Health check başarılı"
else
    echo "⚠️ Health check başarısız (henüz uygulama çalışmıyor)"
fi

echo ""
echo "🎉 Server Setup Tamamlandı!"
echo "📋 Sonraki adımlar:"
echo "1. Proje dosyalarını $PROJECT_DIR klasörüne kopyalayın"
echo "2. npm install komutunu çalıştırın"
echo "3. npm run build komutunu çalıştırın"
echo "4. pm2 start ecosystem.config.js komutunu çalıştırın"
echo ""
echo "📊 Mevcut durum:"
echo "Node.js: $(node --version)"
echo "NPM: $(npm --version)"
echo "PM2: $(pm2 --version)"
echo "Nginx: $(nginx -v 2>&1)"
echo "Firewall: $(sudo ufw status | head -1)"
echo ""
echo "🌐 Site: http://novagraph.com.tr"
echo "📝 Loglar: $PROJECT_DIR/logs/"
