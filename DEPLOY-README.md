# 🚀 NovaGraph Website Deploy Talimatları

## 📋 Ön Gereksinimler

### 1. Domain DNS Ayarları
Domain sağlayıcınızda şu A record'ları ekleyin:
- **A Record**: `novagraph.com.tr` → `13.49.75.107`
- **CNAME**: `www.novagraph.com.tr` → `novagraph.com.tr`

### 2. SSH Key Ekleme
```bash
# Yerel bilgisayarınızda SSH key oluşturun (zaten yapıldı)
# Public key'i sunucuya ekleyin:
ssh-copy-id -i ~/.ssh/novagraph_key.pub ubuntu@13.49.75.107
```

## 🎯 Deploy Süreci

### Adım 1: Sunucu Kurulumu
```bash
# Sunucuya bağlanın
ssh ubuntu@13.49.75.107

# Kurulum script'ini çalıştırın
./server-setup.sh
```

### Adım 2: Proje Deploy
```bash
# Yerel bilgisayarınızda
./deploy-project.sh
```

### Adım 3: SSL Sertifikası (DNS yayıldıktan sonra)
```bash
# DNS yayılması için 5-10 dakika bekleyin
./ssl-setup.sh
```

## 📁 Dosya Yapısı

```
novagraphson/
├── deploy.sh              # Ana deploy script
├── deploy-project.sh      # Proje deploy script
├── server-setup.sh        # Sunucu kurulum script
├── ssl-setup.sh          # SSL sertifikası script
├── ecosystem.config.js    # PM2 konfigürasyonu
├── nginx.conf            # Nginx konfigürasyonu
└── DEPLOY-README.md      # Bu dosya
```

## 🔧 Manuel Kurulum (Script çalışmazsa)

### 1. Sunucuya Bağlanma
```bash
ssh ubuntu@13.49.75.107
# Şifre: 11001100
```

### 2. Sistem Güncellemesi
```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Node.js Kurulumu
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g npm@latest
```

### 4. PM2 Kurulumu
```bash
sudo npm install -g pm2
```

### 5. Nginx Kurulumu
```bash
sudo apt install -y nginx
```

### 6. Proje Klasörü
```bash
cd /home/ubuntu
mkdir novagraph-website
cd novagraph-website
```

### 7. Dosyaları Kopyalama
Yerel bilgisayarınızdan:
```bash
scp -r /Users/cagatayyumlu/Desktop/novagraphson/* ubuntu@13.49.75.107:/home/ubuntu/novagraph-website/
```

### 8. Projeyi Çalıştırma
```bash
npm install
npm run build
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### 9. Nginx Konfigürasyonu
```bash
sudo cp nginx.conf /etc/nginx/sites-available/novagraph.com.tr
sudo ln -sf /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

## 📊 Kontrol Komutları

### PM2 Durumu
```bash
pm2 status
pm2 logs novagraph-website
```

### Nginx Durumu
```bash
sudo systemctl status nginx
sudo tail -f /var/log/nginx/novagraph.access.log
```

### SSL Durumu
```bash
sudo certbot certificates
```

### Health Check
```bash
curl http://localhost/health
curl https://novagraph.com.tr/health
```

## 🚨 Sorun Giderme

### Port 3000 Kullanımda
```bash
# Hangi process port 3000'i kullanıyor
sudo lsof -i :3000

# Process'i sonlandır
sudo kill -9 <PID>
```

### Nginx Hatası
```bash
# Syntax kontrolü
sudo nginx -t

# Logları kontrol et
sudo tail -f /var/log/nginx/error.log
```

### PM2 Hatası
```bash
# PM2'yi yeniden başlat
pm2 delete all
pm2 start ecosystem.config.js
pm2 save
```

### SSL Hatası
```bash
# Sertifikayı yenile
sudo certbot renew

# Nginx'i yeniden başlat
sudo systemctl reload nginx
```

## 🔒 Güvenlik

### Firewall
```bash
sudo ufw status
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
```

### SSL Sertifikası
- Let's Encrypt otomatik yenileme aktif
- 90 günlük sertifika süresi
- HTTP → HTTPS yönlendirmesi

## 📈 Monitoring

### PM2 Monitoring
```bash
pm2 monit
```

### Nginx Monitoring
```bash
# Access log
sudo tail -f /var/log/nginx/novagraph.access.log

# Error log
sudo tail -f /var/log/nginx/novagraph.error.log
```

### Sistem Monitoring
```bash
# CPU ve RAM kullanımı
htop

# Disk kullanımı
df -h

# Network bağlantıları
netstat -tulpn
```

## 🎉 Başarılı Deploy Sonrası

- ✅ Site: https://novagraph.com.tr
- ✅ PM2 process manager aktif
- ✅ Nginx reverse proxy çalışıyor
- ✅ SSL sertifikası kurulu
- ✅ Otomatik yenileme aktif
- ✅ Firewall güvenliği
- ✅ Log dosyaları aktif

## 📞 Destek

Herhangi bir sorun yaşarsanız:
1. Log dosyalarını kontrol edin
2. Script'leri tekrar çalıştırın
3. Manuel adımları takip edin
4. Gerekirse sunucuyu yeniden başlatın
