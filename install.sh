#!/bin/bash

# NovaGraph Website Auto-Install Script
# Amazon EC2 Ubuntu Server için otomatik kurulum ve deployment
# Bu script tüm gerekli eklentileri kurar, yapılandırır ve sitenizi canlı yayına alır

set -e

# Renkli çıktı için
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Log fonksiyonu
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Başlık
echo -e "${BLUE}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    NovaGraph Website Installer              ║"
echo "║                Amazon EC2 Ubuntu Server                     ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Sistem bilgilerini kontrol et
log "Sistem bilgileri kontrol ediliyor..."
echo "OS: $(lsb_release -d | cut -f2)"
echo "Kernel: $(uname -r)"
echo "Architecture: $(uname -m)"
echo "Memory: $(free -h | awk 'NR==2{printf "%.1f GB", $2/1024}')"
echo "Disk: $(df -h / | awk 'NR==2{print $4}') available"

# Root kontrolü
if [ "$EUID" -eq 0 ]; then
    error "Bu script root olarak çalıştırılamaz. Ubuntu kullanıcısı olarak çalıştırın."
fi

# Sunucu bilgilerini al
log "Sunucu bilgileri alınıyor..."
SERVER_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
DOMAIN="novagraph.com.tr"
PROJECT_DIR="/home/ubuntu/novagraph-website"
NGINX_SITE="/etc/nginx/sites-available/novagraph"
NGINX_ENABLED="/etc/nginx/sites-enabled/novagraph"

echo "Server IP: $SERVER_IP"
echo "Domain: $DOMAIN"
echo "Project Directory: $PROJECT_DIR"

# Onay alma
echo ""
read -p "Kuruluma devam etmek istiyor musunuz? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    log "Kurulum iptal edildi."
    exit 0
fi

# 1. SİSTEM GÜNCELLEMESİ
log "1/8 - Sistem güncelleniyor..."
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
sudo apt autoclean

# 2. GEREKLİ PAKETLERİN KURULUMU
log "2/8 - Gerekli paketler kuruluyor..."

# Temel paketler
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Node.js 20.x kurulumu
log "Node.js 20.x kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Node.js versiyonunu kontrol et
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
log "Node.js $NODE_VERSION kuruldu"
log "NPM $NPM_VERSION kuruldu"

# PM2 kurulumu
log "PM2 kuruluyor..."
sudo npm install -g pm2

# Nginx kurulumu
log "Nginx kuruluyor..."
sudo apt install -y nginx

# UFW firewall kurulumu
log "UFW firewall kuruluyor..."
sudo apt install -y ufw

# Certbot kurulumu (SSL için)
log "Certbot kuruluyor..."
sudo apt install -y certbot python3-certbot-nginx

# 3. NGINX YAPILANDIRMASI
log "3/8 - Nginx yapılandırılıyor..."

# Varsayılan site'ı kaldır
sudo rm -f /etc/nginx/sites-enabled/default

# NovaGraph site konfigürasyonu
sudo tee $NGINX_SITE > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/json
        application/javascript
        application/xml+rss
        application/atom+xml
        image/svg+xml;

    # Client max body size
    client_max_body_size 50M;

    # Proxy to Next.js app
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

        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static/ {
        alias $PROJECT_DIR/.next/static/;
        expires 365d;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Public assets caching
    location /images/ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }

    # Error pages
    error_page 404 /404;
    error_page 500 502 503 504 /50x;

    # Logs
    access_log /var/log/nginx/novagraph.access.log;
    error_log /var/log/nginx/novagraph.error.log;
}
EOF

# Site'ı etkinleştir
sudo ln -sf $NGINX_SITE $NGINX_ENABLED

# Nginx syntax kontrolü
sudo nginx -t

# Nginx'i başlat ve otomatik başlatmayı etkinleştir
sudo systemctl start nginx
sudo systemctl enable nginx

# 4. FIREWALL YAPILANDIRMASI
log "4/8 - Firewall yapılandırılıyor..."
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable

# 5. PROJE KLONLAMA VE KURULUM
log "5/8 - Proje klonlanıyor ve kuruluyor..."

# Proje dizinini oluştur
sudo mkdir -p $PROJECT_DIR
sudo chown ubuntu:ubuntu $PROJECT_DIR

# Projeyi klonla
cd $PROJECT_DIR
git clone https://github.com/graphigen/novagraphson.git .
git checkout main

# Dependencies yükle
log "Dependencies yükleniyor..."
npm ci --only=production

# 6. PROJE BUILD VE YAPILANDIRMA
log "6/8 - Proje build ediliyor..."

# Environment dosyası oluştur
cat > .env.production <<EOF
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://$DOMAIN
PORT=3000
EOF

# Projeyi build et
log "Production build yapılıyor..."
npm run build

# PM2 ecosystem dosyası oluştur
cat > ecosystem.config.js <<EOF
module.exports = {
  apps: [
    {
      name: 'novagraph-website',
      script: 'npm',
      args: 'start',
      cwd: '$PROJECT_DIR',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '$PROJECT_DIR/logs/err.log',
      out_file: '$PROJECT_DIR/logs/out.log',
      log_file: '$PROJECT_DIR/logs/combined.log',
      time: true
    }
  ]
};
EOF

# Log dizini oluştur
mkdir -p logs

# 7. PM2 STARTUP VE UYGULAMA BAŞLATMA
log "7/8 - PM2 startup yapılandırılıyor..."

# PM2 startup script'ini oluştur
pm2 startup ubuntu

# Uygulamayı başlat
pm2 start ecosystem.config.js --env production

# PM2'yi kaydet
pm2 save

# PM2 startup'ı etkinleştir
pm2 startup

# 8. SSL SERTİFİKASI KURULUMU
log "8/8 - SSL sertifikası kuruluyor..."

# DNS propagation için bekle
log "DNS propagation için 30 saniye bekleniyor..."
sleep 30

# SSL sertifikası al
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN

# SSL yenileme için cron job ekle
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# 9. KURULUM KONTROLÜ
log "Kurulum kontrol ediliyor..."

# Servis durumlarını kontrol et
echo ""
echo "=== SERVİS DURUMLARI ==="
echo "Nginx: $(sudo systemctl is-active nginx)"
echo "PM2: $(pm2 status | grep -c 'online') process(es) online"
echo "Firewall: $(sudo ufw status | head -1)"

# Port durumlarını kontrol et
echo ""
echo "=== PORT DURUMLARI ==="
echo "Port 80 (HTTP): $(sudo netstat -tlnp | grep :80 | wc -l) listener(s)"
echo "Port 443 (HTTPS): $(sudo netstat -tlnp | grep :443 | wc -l) listener(s)"
echo "Port 3000 (Next.js): $(sudo netstat -tlnp | grep :3000 | wc -l) listener(s)"

# SSL sertifika durumunu kontrol et
echo ""
echo "=== SSL SERTİFİKA DURUMU ==="
sudo certbot certificates

# 10. SON KONTROL VE TEST
log "Son kontrol ve test yapılıyor..."

# Nginx syntax kontrolü
if sudo nginx -t; then
    log "Nginx konfigürasyonu geçerli"
else
    error "Nginx konfigürasyonunda hata var!"
fi

# PM2 process kontrolü
if pm2 list | grep -q "online"; then
    log "PM2 process'leri çalışıyor"
else
    error "PM2 process'leri çalışmıyor!"
fi

# Health check
if curl -f http://localhost/health > /dev/null 2>&1; then
    log "Health check başarılı"
else
    warning "Health check başarısız - uygulama henüz hazır olmayabilir"
fi

# 11. KURULUM TAMAMLANDI
echo ""
echo -e "${GREEN}"
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║                    KURULUM TAMAMLANDI!                      ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

log "🎉 NovaGraph Website başarıyla kuruldu ve deploy edildi!"
echo ""
echo "📋 Kurulum Detayları:"
echo "   🌐 Domain: https://$DOMAIN"
echo "   🖥️  Server IP: $SERVER_IP"
echo "   📁 Project Directory: $PROJECT_DIR"
echo "   🔧 Node.js Version: $NODE_VERSION"
echo "   📦 NPM Version: $NPM_VERSION"
echo ""
echo "🚀 Siteniz şu adreste yayında:"
echo "   https://$DOMAIN"
echo ""
echo "📊 Yönetim Komutları:"
echo "   PM2 Status: pm2 status"
echo "   PM2 Logs: pm2 logs"
echo "   PM2 Restart: pm2 restart novagraph-website"
echo "   Nginx Status: sudo systemctl status nginx"
echo "   Nginx Restart: sudo systemctl restart nginx"
echo ""
echo "🔒 SSL sertifikası otomatik olarak yenilenecek"
echo "📝 Log dosyaları: $PROJECT_DIR/logs/"
echo ""
echo "✅ Kurulum tamamlandı! Siteniz canlı yayında."

# Son kontrol - sitenin erişilebilir olup olmadığını test et
log "Site erişilebilirlik testi yapılıyor..."
sleep 10

if curl -f -I "https://$DOMAIN" > /dev/null 2>&1; then
    log "✅ Site başarıyla erişilebilir: https://$DOMAIN"
else
    warning "⚠️  Site henüz erişilebilir değil. DNS propagation için birkaç dakika bekleyin."
fi

echo ""
log "🎯 Kurulum tamamlandı! Siteniz https://$DOMAIN adresinde yayında."
