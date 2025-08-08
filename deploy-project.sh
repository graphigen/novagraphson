#!/bin/bash

# NovaGraph Website Project Deploy Script
# Bu script projeyi sunucuya deploy eder

set -e

echo "🚀 NovaGraph Website Project Deploy Başlıyor..."

# Sunucu bilgileri
SERVER_IP="13.49.75.107"
SERVER_USER="ubuntu"
SERVER_PATH="/home/ubuntu/novagraph-website"

# Production build
echo "📦 Production build oluşturuluyor..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build başarısız!"
    exit 1
fi

echo "✅ Build başarılı!"

# Sunucuya dosyaları kopyala
echo "📤 Dosyalar sunucuya kopyalanıyor..."
rsync -avz --delete \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.next' \
    --exclude 'deploy.sh' \
    --exclude 'deploy-project.sh' \
    --exclude 'server-setup.sh' \
    --exclude 'ecosystem.config.js' \
    --exclude 'nginx.conf' \
    ./ $SERVER_USER@$SERVER_IP:$SERVER_PATH/

if [ $? -ne 0 ]; then
    echo "❌ Dosya kopyalama başarısız!"
    exit 1
fi

echo "✅ Dosyalar kopyalandı!"

# Konfigürasyon dosyalarını kopyala
echo "⚙️ Konfigürasyon dosyaları kopyalanıyor..."
scp ecosystem.config.js $SERVER_USER@$SERVER_IP:$SERVER_PATH/
scp nginx.conf $SERVER_USER@$SERVER_IP:$SERVER_PATH/

echo "✅ Konfigürasyon dosyaları kopyalandı!"

# Sunucuda deploy komutları
echo "🔧 Sunucuda deploy işlemleri yapılıyor..."
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    cd /home/ubuntu/novagraph-website
    
    echo "📦 Bağımlılıklar kuruluyor..."
    npm install --production
    
    echo "🔨 Production build oluşturuluyor..."
    npm run build
    
    echo "🚀 PM2 ile uygulama başlatılıyor..."
    pm2 delete novagraph-website 2>/dev/null || true
    pm2 start ecosystem.config.js
    
    echo "💾 PM2 startup konfigürasyonu..."
    pm2 save
    
    echo "🔄 Nginx yeniden başlatılıyor..."
    sudo systemctl reload nginx
    
    echo "✅ Deploy tamamlandı!"
    
    # Durum bilgileri
    echo ""
    echo "📊 PM2 Durumu:"
    pm2 status
    
    echo ""
    echo "🌐 Nginx Durumu:"
    sudo systemctl status nginx --no-pager -l
    
    echo ""
    echo "🔍 Health Check:"
    curl -s http://localhost/health || echo "Health check başarısız"
EOF

echo ""
echo "🎉 Deploy Tamamlandı!"
echo "🌐 Site: http://novagraph.com.tr"
echo "📊 PM2 Status: ssh $SERVER_USER@$SERVER_IP 'pm2 status'"
echo "📝 Loglar: ssh $SERVER_USER@$SERVER_IP 'pm2 logs novagraph-website'"
echo "🔄 Nginx Logları: ssh $SERVER_USER@$SERVER_IP 'sudo tail -f /var/log/nginx/novagraph.access.log'"
