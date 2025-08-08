#!/bin/bash

# NovaGraph Website Deploy Script
# Kullanım: ./deploy.sh

echo "🚀 NovaGraph Website Deploy Başlıyor..."

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
    ./ $SERVER_USER@$SERVER_IP:$SERVER_PATH/

if [ $? -ne 0 ]; then
    echo "❌ Dosya kopyalama başarısız!"
    exit 1
fi

echo "✅ Dosyalar kopyalandı!"

# Sunucuda deploy komutları
echo "🔧 Sunucuda deploy işlemleri yapılıyor..."
ssh $SERVER_USER@$SERVER_IP << 'EOF'
    cd /home/ubuntu/novagraph-website
    
    # Bağımlılıkları kur
    npm install --production
    
    # PM2 ile yeniden başlat
    pm2 restart novagraph || pm2 start npm --name "novagraph" -- start
    
    echo "✅ Deploy tamamlandı!"
EOF

echo "🎉 Deploy tamamlandı!"
echo "🌐 Site: http://novagraph.com.tr"
echo "📊 PM2 Status: ssh $SERVER_USER@$SERVER_IP 'pm2 status'"
