# NovaGraph Production Deployment Guide

## 🌐 Domain: novagraph.com.tr
## 🖥️ Server IP: 13.49.75.107

## 📋 Ön Gereksinimler

### 1. Cloudflare DNS Ayarları
Aşağıdaki DNS kayıtlarının Cloudflare'de yapılandırıldığından emin olun:

```
Type: A
Name: novagraph.com.tr
Content: 13.49.75.107
Proxy status: DNS only
TTL: Auto

Type: A
Name: www
Content: 13.49.75.107
Proxy status: DNS only
TTL: Auto
```

### 2. Cloudflare SSL/TLS Ayarları
1. **SSL/TLS** → **Overview**
   - Encryption mode: **Full**
2. **SSL/TLS** → **Edge Certificates**
   - Always Use HTTPS: **On**
   - Minimum TLS Version: **1.2**
   - TLS 1.3: **On**
3. **Security** → **Settings**
   - Security Level: **Medium**

## 🚀 Production Deployment

### Adım 1: Sunucuya Bağlanın
```bash
ssh root@13.49.75.107
```

### Adım 2: Deployment Script'ini Çalıştırın
```bash
# Script'i çalıştırılabilir yapın
chmod +x deploy-production.sh

# Production deployment'ı başlatın
sudo ./deploy-production.sh
```

### Adım 3: Manuel Kontroller

#### PM2 Durumu
```bash
pm2 status
pm2 logs novagraph
```

#### Nginx Durumu
```bash
systemctl status nginx
nginx -t
```

#### SSL Sertifikası
```bash
certbot certificates
```

## 🔧 Konfigürasyon Dosyaları

### 1. Environment Variables
Production environment dosyası: `env.production`

```bash
# Production Environment Variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PUBLIC_APP_URL=https://novagraph.com.tr
NEXT_PUBLIC_DOMAIN=novagraph.com.tr
NEXT_PUBLIC_SITE_URL=https://novagraph.com.tr
PORT=3000
HOSTNAME=0.0.0.0
```

### 2. Nginx Konfigürasyonu
Dosya: `/etc/nginx/sites-available/novagraph.com.tr`

- SSL sertifikası otomatik yönetim
- HTTP → HTTPS yönlendirme
- Güvenlik header'ları
- Gzip sıkıştırma
- Static dosya cache'leme

### 3. PM2 Ecosystem
Dosya: `ecosystem.config.js`

- Cluster mode (2 instance)
- Otomatik restart
- Log yönetimi
- Memory limit: 1GB

## 🔍 Monitoring ve Logs

### PM2 Logs
```bash
# Tüm loglar
pm2 logs novagraph

# Sadece error logları
pm2 logs novagraph --err

# Sadece output logları
pm2 logs novagraph --out
```

### Nginx Logs
```bash
# Access logs
tail -f /var/log/nginx/access.log

# Error logs
tail -f /var/log/nginx/error.log
```

### System Logs
```bash
# System journal
journalctl -u nginx -f
journalctl -u pm2-root -f
```

## 🔒 Güvenlik

### 1. Firewall (UFW)
```bash
# Firewall durumu
ufw status

# Gerekli portlar
ufw allow 'Nginx Full'
ufw allow OpenSSH
```

### 2. Fail2ban
```bash
# Fail2ban durumu
systemctl status fail2ban

# Jail listesi
fail2ban-client status
```

### 3. SSL Sertifikası
```bash
# Sertifika durumu
certbot certificates

# Manuel yenileme
certbot renew --dry-run
```

## 🔄 Maintenance

### 1. Uygulama Güncelleme
```bash
# Git repository'yi güncelle
cd /var/www/novagraph
git pull origin main

# Bağımlılıkları yükle
npm ci --only=production

# Build
npm run build

# PM2'yi yeniden başlat
pm2 restart novagraph
```

### 2. Nginx Yeniden Başlatma
```bash
# Konfigürasyon testi
nginx -t

# Yeniden başlatma
systemctl reload nginx
```

### 3. SSL Sertifikası Yenileme
```bash
# Otomatik yenileme testi
certbot renew --dry-run

# Manuel yenileme
certbot renew
```

## 🏥 Health Checks

### 1. Uygulama Health Check
```bash
curl https://novagraph.com.tr/health
```

### 2. SSL Test
```bash
curl -I https://novagraph.com.tr
```

### 3. DNS Test
```bash
nslookup novagraph.com.tr
nslookup www.novagraph.com.tr
```

## 📊 Performance Monitoring

### 1. PM2 Monitoring
```bash
# PM2 dashboard
pm2 monit

# Memory kullanımı
pm2 show novagraph
```

### 2. System Resources
```bash
# CPU ve Memory
htop

# Disk kullanımı
df -h

# Network
netstat -tulpn
```

## 🚨 Troubleshooting

### 1. Uygulama Çalışmıyor
```bash
# PM2 durumu kontrol et
pm2 status

# Logları kontrol et
pm2 logs novagraph

# Manuel başlat
pm2 start ecosystem.config.js --env production
```

### 2. Nginx Çalışmıyor
```bash
# Nginx durumu
systemctl status nginx

# Konfigürasyon testi
nginx -t

# Logları kontrol et
tail -f /var/log/nginx/error.log
```

### 3. SSL Sertifikası Sorunu
```bash
# Sertifika durumu
certbot certificates

# Manuel yenileme
certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr
```

## 📞 Destek

### Acil Durumlar
- **Uygulama çalışmıyor**: `pm2 restart novagraph`
- **Nginx çalışmıyor**: `systemctl restart nginx`
- **SSL sorunu**: `certbot renew`

### Log Dosyaları
- PM2 logs: `/var/log/pm2/`
- Nginx logs: `/var/log/nginx/`
- System logs: `journalctl`

## 🎯 Production Checklist

- [ ] Cloudflare DNS ayarları yapıldı
- [ ] SSL/TLS mode Full olarak ayarlandı
- [ ] Always Use HTTPS açık
- [ ] PM2 uygulama çalışıyor
- [ ] Nginx çalışıyor
- [ ] SSL sertifikası geçerli
- [ ] Firewall aktif
- [ ] Fail2ban aktif
- [ ] Health check çalışıyor
- [ ] Monitoring aktif

## 🎉 Başarılı Deployment

Production ortamı hazır olduğunda:
- 🌐 Site: https://novagraph.com.tr
- 📊 Monitoring: `pm2 monit`
- 📝 Logs: `pm2 logs novagraph`
- 🔍 Health: https://novagraph.com.tr/health
