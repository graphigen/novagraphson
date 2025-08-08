#!/bin/bash

# NovaGraph Production Deployment Script
# Domain: novagraph.com.tr
# Server IP: 13.49.75.107
# User: ubuntu

set -e

echo "🚀 NovaGraph Production Deployment başlatılıyor..."
echo "🌐 Domain: novagraph.com.tr"
echo "🖥️  Server IP: 13.49.75.107"
echo "👤 User: ubuntu"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}📋 $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if running as ubuntu user
if [ "$USER" != "ubuntu" ]; then
    print_error "Bu script ubuntu kullanıcısı ile çalıştırılmalıdır."
    exit 1
fi

# Update system packages
print_status "📦 Sistem paketleri güncelleniyor..."
sudo apt update && sudo apt upgrade -y

# Install required packages
print_status "📦 Gerekli paketler kuruluyor..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx ufw fail2ban htop

# Install Node.js 18.x
print_status "📦 Node.js 18.x kuruluyor..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    print_success "Node.js kuruldu"
else
    print_warning "Node.js zaten kurulu: $(node --version)"
fi

# Install PM2 globally
print_status "📦 PM2 kuruluyor..."
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
    print_success "PM2 kuruldu"
else
    print_warning "PM2 zaten kurulu: $(pm2 --version)"
fi

# Create project directory
print_status "📁 Proje klasörü oluşturuluyor..."
sudo mkdir -p /var/www/novagraph
sudo chown -R ubuntu:ubuntu /var/www/novagraph
cd /var/www/novagraph

# Clone or update repository
if [ -d ".git" ]; then
    print_status "📥 Git repository güncelleniyor..."
    git pull origin main
else
    print_status "📥 Git repository clone ediliyor..."
    git clone https://github.com/graphigen/novagraphson.git .
fi

# Install dependencies
print_status "📦 Bağımlılıklar yükleniyor..."
npm ci --only=production

# Create production environment file
print_status "🔧 Production environment dosyası oluşturuluyor..."
cat > .env << EOF
# Production Environment Variables for novagraph.com.tr
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_APP_URL=https://novagraph.com.tr
NEXT_PUBLIC_DOMAIN=novagraph.com.tr
NEXT_PUBLIC_SITE_URL=https://novagraph.com.tr
PORT=3000
HOSTNAME=0.0.0.0
EOF

# Build the application
print_status "🔨 Production build oluşturuluyor..."
npm run build

# Create PM2 log directory
print_status "📁 PM2 log klasörü oluşturuluyor..."
sudo mkdir -p /var/log/pm2
sudo chown -R ubuntu:ubuntu /var/log/pm2

# Stop existing PM2 process if running
print_status "🔄 Mevcut PM2 süreçleri durduruluyor..."
pm2 delete novagraph 2>/dev/null || true

# Start application with PM2
print_status "🚀 Uygulama PM2 ile başlatılıyor..."
pm2 start ecosystem.config.js --env production
pm2 startup
pm2 save

# Configure Nginx
print_status "🌐 Nginx konfigürasyonu..."
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

# Install SSL certificate
print_status "🔒 SSL sertifikası kuruluyor..."
if [ -f "/etc/letsencrypt/live/novagraph.com.tr/fullchain.pem" ]; then
    print_warning "SSL sertifikası zaten mevcut. Yenileniyor..."
    sudo certbot renew --quiet
else
    print_status "Yeni SSL sertifikası alınıyor..."
    sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr --non-interactive --agree-tos --email admin@novagraph.com.tr
fi

# Setup automatic SSL renewal
print_status "🔄 Otomatik SSL yenileme ayarlanıyor..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -

# Configure fail2ban
print_status "🛡️ Fail2ban konfigürasyonu..."
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Create health check endpoint
print_status "🏥 Health check endpoint oluşturuluyor..."
mkdir -p /var/www/novagraph/public
echo "healthy" > /var/www/novagraph/public/health

# Set proper permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R ubuntu:ubuntu /var/www/novagraph
sudo chmod -R 755 /var/www/novagraph

# Final status check
print_status "🔍 Final durum kontrolü..."
pm2 status
sudo systemctl status nginx --no-pager -l

print_success "🎉 Production deployment tamamlandı!"
echo ""
echo "🌐 Site adresi: https://novagraph.com.tr"
echo "📊 PM2 durumu: pm2 status"
echo "📝 Nginx logları: sudo tail -f /var/log/nginx/access.log"
echo "🔍 Health check: curl https://novagraph.com.tr/health"
echo ""
print_warning "⚠️  Lütfen Cloudflare DNS ayarlarını kontrol edin:"
echo "   - A record: novagraph.com.tr → 13.49.75.107"
echo "   - A record: www → 13.49.75.107"
echo "   - SSL/TLS mode: Full"
echo "   - Always Use HTTPS: On"
echo ""
print_success "🚀 NovaGraph production ortamı hazır!"

# Show final status
echo ""
echo "📊 === DEPLOYMENT ÖZETİ ==="
echo "✅ Node.js: $(node --version)"
echo "✅ NPM: $(npm --version)"
echo "✅ PM2: $(pm2 --version)"
echo "✅ Nginx: $(nginx -v 2>&1)"
echo "✅ SSL: $(sudo certbot certificates | grep -c 'novagraph.com.tr' || echo '0') sertifika"
echo "✅ Firewall: $(sudo ufw status | grep -c 'Status: active' || echo '0') aktif"
echo "✅ Fail2ban: $(sudo systemctl is-active fail2ban)"
echo ""
echo "🔗 Site: https://novagraph.com.tr"
echo "🔗 Health: https://novagraph.com.tr/health"
echo "🔗 PM2: pm2 monit"
echo ""
