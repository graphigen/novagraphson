#!/bin/bash

# NovaGraph Server Cleanup Script
# Bu script mevcut dosyaları temizler ve auto-install için hazırlar

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

print_status "🧹 NovaGraph Server Cleanup Script başlatılıyor..."

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "Bu script root olarak çalıştırılmamalıdır. Ubuntu kullanıcısı olarak çalıştırın."
   exit 1
fi

PROJECT_DIR="/var/www/novagraph"

# Step 1: Stop PM2 if running
print_status "🛑 PM2 uygulaması durduruluyor..."
if pm2 list | grep -q "novagraph"; then
    pm2 delete novagraph 2>/dev/null || true
    pm2 save
    print_success "PM2 uygulaması durduruldu"
else
    print_status "PM2 uygulaması zaten durmuş"
fi

# Step 2: Remove conflicting files
print_status "🗑️ Çakışan dosyalar temizleniyor..."
cd $PROJECT_DIR

# Remove untracked files that are causing conflicts
if [ -f "complete.sh" ]; then
    rm -f complete.sh
    print_success "complete.sh dosyası silindi"
fi

if [ -f "cont.sh" ]; then
    rm -f cont.sh
    print_success "cont.sh dosyası silindi"
fi

# Step 3: Clean git repository
print_status "🧹 Git repository temizleniyor..."
git reset --hard HEAD
git clean -fd
git pull origin main

print_success "✅ Git repository temizlendi"

# Step 4: Check if build is needed
print_status "🔍 Build durumu kontrol ediliyor..."
if [ ! -d ".next" ]; then
    print_status "📦 Bağımlılıklar yükleniyor..."
    npm install
    
    print_status "🔨 Production build oluşturuluyor..."
    npm run build
    print_success "✅ Build tamamlandı"
else
    print_success "✅ Build zaten mevcut"
fi

# Step 5: Start PM2 again
print_status "🚀 PM2 uygulaması yeniden başlatılıyor..."
if [ -f "ecosystem.config.js" ]; then
    pm2 start ecosystem.config.js
    pm2 save
    print_success "✅ PM2 uygulaması başlatıldı"
else
    print_warning "⚠️ ecosystem.config.js dosyası bulunamadı"
fi

print_success "🎉 Temizlik tamamlandı! Sistem auto-install için hazır."
echo ""
echo "📊 Durum Kontrolü:"
echo "   📁 Proje Dizini: $PROJECT_DIR"
echo "   🔄 Git Durumu: $(git status --porcelain | wc -l) değişiklik"
echo "   🚀 PM2 Durumu: $(pm2 list | grep novagraph | wc -l) uygulama"
echo ""
echo "🔧 Sonraki Adımlar:"
echo "   1. cd ~"
echo "   2. ./auto-install.sh"
echo ""
