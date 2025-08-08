#!/bin/bash

# NovaGraph Auto Install Script for Ubuntu Server
# Bu script Ubuntu sunucusunda çalıştırılmalıdır

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

print_status "🚀 NovaGraph Auto Install Script başlatılıyor..."

# Update system
print_status "📦 Sistem güncelleniyor..."
sudo apt update && sudo apt upgrade -y

# Install required packages
print_status "📦 Gerekli paketler kuruluyor..."
sudo apt install -y curl git nginx certbot python3-certbot-nginx unzip

# Install Node.js 18.x
print_status "📦 Node.js 18.x kuruluyor..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify Node.js installation
NODE_VERSION=$(node --version)
NPM_VERSION=$(npm --version)
print_success "Node.js $NODE_VERSION ve npm $NPM_VERSION kuruldu"

# Install PM2 globally
print_status "📦 PM2 kuruluyor..."
sudo npm install -g pm2

# Create project directory
print_status "📁 Proje klasörü oluşturuluyor..."
sudo mkdir -p /var/www/novagraph
sudo chown -R $USER:$USER /var/www/novagraph
cd /var/www/novagraph

# Clone repository
print_status "📥 Git repository clone ediliyor..."
if [ -d ".git" ]; then
    print_warning "Repository zaten mevcut. Güncelleniyor..."
    git pull origin main
else
    git clone https://github.com/graphigen/novagraphson.git .
fi

# Install dependencies
print_status "📦 Bağımlılıklar yükleniyor..."
npm install

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    print_status "🔧 .env dosyası oluşturuluyor..."
    cat > .env << EOF
NODE_ENV=production
PORT=3000
NEXT_PUBLIC_APP_URL=https://novagraph.com.tr
AWS_EC2_IP=13.49.75.107
EOF
    print_success ".env dosyası oluşturuldu"
fi

# Build the application
print_status "🔨 Production build oluşturuluyor..."
npm run build

# Create PM2 log directory
print_status "📁 PM2 log klasörü oluşturuluyor..."
sudo mkdir -p /var/log/pm2
sudo chown -R $USER:$USER /var/log/pm2

# Copy ecosystem config
print_status "⚙️ PM2 konfigürasyonu kopyalanıyor..."
cp ecosystem.config.js /var/www/novagraph/

# Start application with PM2
print_status "🚀 Uygulama PM2 ile başlatılıyor..."
pm2 delete novagraph 2>/dev/null || true
pm2 start ecosystem.config.js
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

# SSL Certificate setup
print_status "🔒 SSL sertifikası kuruluyor..."
read -p "SSL sertifikası kurmak istiyor musunuz? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr --non-interactive --agree-tos --email admin@novagraph.com.tr
    
    # Add automatic renewal cron job
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
    print_success "SSL sertifikası kuruldu ve otomatik yenileme ayarlandı"
fi

# Create health check script
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

# Create update script
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

# Set proper permissions
print_status "🔐 Dosya izinleri ayarlanıyor..."
sudo chown -R $USER:$USER /var/www/novagraph
sudo chmod -R 755 /var/www/novagraph

# Final status check
print_status "🔍 Final durum kontrolü..."
sleep 5

# Check if application is running
if pm2 list | grep -q "novagraph.*online"; then
    print_success "✅ Uygulama başarıyla çalışıyor!"
else
    print_error "❌ Uygulama başlatılamadı!"
    pm2 logs novagraph --lines 10
    exit 1
fi

# Check if Nginx is running
if sudo systemctl is-active --quiet nginx; then
    print_success "✅ Nginx başarıyla çalışıyor!"
else
    print_error "❌ Nginx başlatılamadı!"
    exit 1
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
print_success "✅ Kurulum tamamlandı! Site https://novagraph.com.tr adresinde erişilebilir."
