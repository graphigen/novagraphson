#!/bin/bash

# NovaGraph Website Server Cleanup Script
# Bu script sunucuyu tamamen temizler ve sıfırlar

set -e

echo "🧹 NovaGraph Website Server Cleanup Başlıyor..."
echo "⚠️  DİKKAT: Bu script sunucudaki tüm verileri silecek!"
echo "📍 Sunucu: $(hostname) - $(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
echo "⏰ Tarih: $(date)"

# Onay alma
read -p "Sunucuyu tamamen temizlemek istediğinizden emin misiniz? (yes/no): " CONFIRM

if [ "$CONFIRM" != "yes" ]; then
    echo "❌ Temizleme iptal edildi."
    exit 0
fi

echo "🚨 Sunucu temizleniyor... Bu işlem geri alınamaz!"

# 1. PM2 Process'leri durdurma ve silme
echo "🔄 PM2 process'leri durduruluyor..."
pm2 delete all 2>/dev/null || true
pm2 kill 2>/dev/null || true
pm2 unstartup 2>/dev/null || true

# 2. Node.js process'leri durdurma
echo "🔄 Node.js process'leri durduruluyor..."
sudo pkill -f "node" 2>/dev/null || true
sudo pkill -f "npm" 2>/dev/null || true

# 3. Port 3000'i kullanan process'leri durdurma
echo "🔄 Port 3000'i kullanan process'ler durduruluyor..."
sudo lsof -ti:3000 | xargs -r sudo kill -9 2>/dev/null || true

# 4. Nginx durdurma ve konfigürasyonları silme
echo "🔄 Nginx durduruluyor ve konfigürasyonları siliniyor..."
sudo systemctl stop nginx 2>/dev/null || true
sudo systemctl disable nginx 2>/dev/null || true

# Nginx konfigürasyon dosyalarını silme
sudo rm -rf /etc/nginx/sites-available/novagraph*
sudo rm -rf /etc/nginx/sites-enabled/novagraph*
sudo rm -rf /etc/nginx/sites-enabled/default

# 5. Proje klasörlerini silme
echo "🗑️ Proje klasörleri siliniyor..."
sudo rm -rf /home/ubuntu/novagraph-website
sudo rm -rf /var/www/novagraph
sudo rm -rf /var/log/novagraph

# 6. Log dosyalarını temizleme
echo "🗑️ Log dosyaları temizleniyor..."
sudo rm -rf /var/log/pm2
sudo rm -rf /home/ubuntu/.pm2
sudo rm -rf /home/ubuntu/.npm

# 7. Node.js ve NPM kaldırma
echo "🗑️ Node.js ve NPM kaldırılıyor..."
sudo apt remove --purge -y nodejs npm 2>/dev/null || true
sudo apt autoremove -y
sudo apt autoclean

# Node.js repository'yi kaldırma
sudo rm -rf /etc/apt/sources.list.d/nodesource.list*

# 8. PM2 kaldırma
echo "🗑️ PM2 kaldırılıyor..."
sudo npm uninstall -g pm2 2>/dev/null || true

# 9. Nginx kaldırma
echo "🗑️ Nginx kaldırılıyor..."
sudo apt remove --purge -y nginx nginx-common nginx-full 2>/dev/null || true
sudo apt autoremove -y

# Nginx konfigürasyon dosyalarını silme
sudo rm -rf /etc/nginx
sudo rm -rf /var/log/nginx
sudo rm -rf /var/www/html

# 10. Certbot ve SSL sertifikalarını kaldırma
echo "🗑️ SSL sertifikaları ve Certbot kaldırılıyor..."
sudo apt remove --purge -y certbot python3-certbot-nginx 2>/dev/null || true
sudo rm -rf /etc/letsencrypt
sudo rm -rf /var/log/letsencrypt

# 11. Cron job'ları temizleme
echo "🗑️ Cron job'lar temizleniyor..."
(crontab -l 2>/dev/null | grep -v "certbot" | grep -v "pm2") | crontab - 2>/dev/null || true

# 12. Firewall kurallarını sıfırlama
echo "🔥 Firewall kuralları sıfırlanıyor..."
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw --force enable

# 13. Sistem temizliği
echo "🧹 Sistem temizliği yapılıyor..."
sudo apt update
sudo apt autoremove -y
sudo apt autoclean
sudo apt clean

# 14. Disk kullanımını kontrol etme
echo "💾 Disk kullanımı kontrol ediliyor..."
df -h

# 15. Aktif servisleri kontrol etme
echo "📊 Aktif servisler kontrol ediliyor..."
echo "SSH: $(sudo systemctl is-active ssh)"
echo "UFW: $(sudo ufw status | head -1)"

# 16. Temizlik sonrası durum
echo ""
echo "🎉 Sunucu Temizleme Tamamlandı!"
echo ""
echo "📋 Temizlenen Öğeler:"
echo "   ✅ PM2 process'leri"
echo "   ✅ Node.js ve NPM"
echo "   ✅ Nginx web server"
echo "   ✅ SSL sertifikaları"
echo "   ✅ Proje dosyaları"
echo "   ✅ Log dosyaları"
echo "   ✅ Konfigürasyon dosyaları"
echo "   ✅ Cron job'lar"
echo ""
echo "📊 Mevcut Durum:"
echo "   🔒 SSH: Aktif"
echo "   🔥 Firewall: Aktif (sadece SSH açık)"
echo "   💾 Disk: Temizlendi"
echo ""
echo "🚀 Sonraki Adım:"
echo "   ./server-setup.sh komutu ile temiz kurulum yapabilirsiniz"
echo ""
echo "⚠️  Önemli: Sunucu tamamen temizlendi!"
