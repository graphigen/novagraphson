# 🚀 NovaGraph Website Auto-Install Guide

## 📋 Genel Bakış

Bu rehber, Amazon EC2 Ubuntu sunucunuzda NovaGraph website'ını otomatik olarak kurmanızı ve deploy etmenizi sağlar. `install.sh` script'i tüm gerekli eklentileri tespit eder, kurar, yapılandırır ve sitenizi canlı yayına alır.

## 🎯 Ne Yapılacak?

### **Otomatik Kurulum:**
1. ✅ Sistem güncellemesi
2. ✅ Node.js 20.x kurulumu
3. ✅ Nginx web server kurulumu
4. ✅ PM2 process manager kurulumu
5. ✅ UFW firewall yapılandırması
6. ✅ SSL sertifikası (Let's Encrypt)
7. ✅ Proje klonlama ve build
8. ✅ Otomatik deployment

### **Sonuç:**
- 🌐 Siteniz `https://novagraph.com.tr` adresinde yayında
- 🔒 SSL sertifikası otomatik yenilenir
- 🚀 PM2 ile process yönetimi
- 🛡️ Güvenlik başlıkları ve firewall
- 📊 Monitoring ve log sistemi

## 🖥️ Sunucu Gereksinimleri

### **Minimum Gereksinimler:**
- **OS**: Ubuntu 20.04 LTS veya üzeri
- **RAM**: 2 GB (t3.small önerilen)
- **CPU**: 2 vCPU
- **Disk**: 20 GB boş alan
- **Network**: Public IP adresi

### **Önerilen Gereksinimler:**
- **OS**: Ubuntu 22.04 LTS
- **RAM**: 4 GB (t3.medium)
- **CPU**: 2 vCPU
- **Disk**: 40 GB SSD
- **Network**: Elastic IP

## 🔑 Ön Gereksinimler

### **1. DNS Ayarları:**
Domain'inizin A record'unu sunucu IP'sine yönlendirin:
```
Type: A
Name: @
Value: [SUNUCU_IP_ADRESI]
TTL: 300
```

### **2. Sunucu Erişimi:**
SSH ile sunucuya bağlanın:
```bash
ssh ubuntu@[SUNUCU_IP_ADRESI]
```

### **3. Git Repository:**
Proje GitHub'da mevcut olmalı: `https://github.com/graphigen/novagraphson.git`

## 🚀 Kurulum Adımları

### **1. Script'i Sunucuya Kopyalayın:**
```bash
# Local bilgisayarınızdan
scp install.sh ubuntu@[SUNUCU_IP]:~/
```

### **2. Sunucuda Script'i Çalıştırılabilir Yapın:**
```bash
# Sunucuda
chmod +x install.sh
```

### **3. Kurulumu Başlatın:**
```bash
./install.sh
```

### **4. Onay Verin:**
Script size kuruluma devam etmek isteyip istemediğinizi soracak:
```
Kuruluma devam etmek istiyor musunuz? (yes/no): yes
```

## ⏱️ Kurulum Süreci

### **Tahmini Süre: 15-25 dakika**

| Adım | Süre | Açıklama |
|------|------|----------|
| 1/8 | 5-10 dk | Sistem güncellemesi |
| 2/8 | 3-5 dk | Paket kurulumları |
| 3/8 | 2-3 dk | Nginx yapılandırması |
| 4/8 | 1-2 dk | Firewall ayarları |
| 5/8 | 3-5 dk | Proje klonlama |
| 6/8 | 2-4 dk | Build işlemi |
| 7/8 | 1-2 dk | PM2 yapılandırması |
| 8/8 | 2-3 dk | SSL sertifikası |

## 🔍 Kurulum Kontrolü

### **Otomatik Kontroller:**
- ✅ Nginx syntax kontrolü
- ✅ PM2 process durumu
- ✅ Port dinleme durumu
- ✅ SSL sertifika durumu
- ✅ Health check endpoint

### **Manuel Kontroller:**
```bash
# PM2 durumu
pm2 status

# Nginx durumu
sudo systemctl status nginx

# SSL sertifikası
sudo certbot certificates

# Firewall durumu
sudo ufw status
```

## 🌐 Site Erişimi

### **Kurulum Sonrası:**
- **HTTP**: `http://novagraph.com.tr` (otomatik HTTPS'e yönlendirilir)
- **HTTPS**: `https://novagraph.com.tr`
- **Health Check**: `https://novagraph.com.tr/health`

### **DNS Propagation:**
- **Yerel**: Hemen erişilebilir
- **Global**: 5-30 dakika sürebilir

## 🛠️ Yönetim Komutları

### **PM2 Process Yönetimi:**
```bash
# Durum kontrolü
pm2 status

# Log görüntüleme
pm2 logs

# Yeniden başlatma
pm2 restart novagraph-website

# Durdurma
pm2 stop novagraph-website

# Başlatma
pm2 start novagraph-website
```

### **Nginx Yönetimi:**
```bash
# Durum kontrolü
sudo systemctl status nginx

# Yeniden başlatma
sudo systemctl restart nginx

# Konfigürasyon testi
sudo nginx -t

# Log görüntüleme
sudo tail -f /var/log/nginx/novagraph.access.log
```

### **SSL Sertifika Yönetimi:**
```bash
# Sertifika durumu
sudo certbot certificates

# Manuel yenileme
sudo certbot renew

# Sertifika bilgileri
sudo certbot certificates --cert-name novagraph.com.tr
```

## 📊 Monitoring ve Logs

### **Log Dosyaları:**
- **PM2 Logs**: `/home/ubuntu/novagraph-website/logs/`
- **Nginx Logs**: `/var/log/nginx/novagraph.*.log`
- **System Logs**: `/var/log/syslog`

### **Monitoring Komutları:**
```bash
# Sistem kaynakları
htop
df -h
free -h

# Network bağlantıları
sudo netstat -tlnp
sudo ss -tlnp

# Process durumu
ps aux | grep node
ps aux | grep nginx
```

## 🔧 Sorun Giderme

### **Yaygın Sorunlar:**

#### **1. Port 80/443 Kapalı:**
```bash
# Firewall kontrolü
sudo ufw status

# Port açma
sudo ufw allow 80
sudo ufw allow 443
```

#### **2. Nginx Çalışmıyor:**
```bash
# Nginx durumu
sudo systemctl status nginx

# Konfigürasyon testi
sudo nginx -t

# Yeniden başlatma
sudo systemctl restart nginx
```

#### **3. PM2 Process Çalışmıyor:**
```bash
# PM2 durumu
pm2 status

# Log kontrolü
pm2 logs

# Yeniden başlatma
pm2 restart novagraph-website
```

#### **4. SSL Sertifika Hatası:**
```bash
# Sertifika durumu
sudo certbot certificates

# Manuel yenileme
sudo certbot renew --force-renewal
```

### **Debug Komutları:**
```bash
# Nginx error log
sudo tail -f /var/log/nginx/error.log

# PM2 error log
pm2 logs --err

# System log
sudo journalctl -u nginx -f
sudo journalctl -u pm2-ubuntu -f
```

## 🔄 Güncelleme ve Bakım

### **Otomatik Güncellemeler:**
- **SSL Sertifikası**: Her 90 günde bir otomatik yenilenir
- **Sistem Paketleri**: Manuel güncelleme gerekir

### **Manuel Güncellemeler:**
```bash
# Sistem güncellemesi
sudo apt update && sudo apt upgrade -y

# PM2 güncellemesi
sudo npm install -g pm2@latest

# Proje güncellemesi
cd /home/ubuntu/novagraph-website
git pull origin main
npm ci --only=production
npm run build
pm2 restart novagraph-website
```

## 📞 Destek

### **Kurulum Sorunları:**
1. Log dosyalarını kontrol edin
2. Bu rehberdeki sorun giderme adımlarını takip edin
3. Gerekirse script'i yeniden çalıştırın

### **Teknik Destek:**
- **GitHub Issues**: [Repository Issues](https://github.com/graphigen/novagraphson/issues)
- **Email**: admin@novagraph.com.tr

## ✅ Kurulum Tamamlandı!

Kurulum başarıyla tamamlandığında:
- 🌐 Siteniz `https://novagraph.com.tr` adresinde yayında
- 🔒 SSL sertifikası aktif
- 🚀 PM2 ile process yönetimi
- 🛡️ Güvenlik önlemleri aktif
- 📊 Monitoring ve log sistemi çalışıyor

**🎉 Tebrikler! NovaGraph website'ınız canlı yayında!**
