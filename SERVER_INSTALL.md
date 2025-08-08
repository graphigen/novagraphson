# NovaGraph Server Installation Guide

Bu rehber Ubuntu sunucusunda NovaGraph projesini kurmak için hazırlanmıştır.

## Sunucu Bilgileri

- **Sunucu IP:** 13.49.75.107
- **Domain:** novagraph.com.tr
- **SSH Kullanıcı:** ubuntu
- **SSH Şifre:** 11001100

## Kurulum Adımları

### 1. Sunucuya SSH ile Bağlanın

```bash
ssh ubuntu@13.49.75.107
```

### 2. Install Script'ini İndirin ve Çalıştırın

```bash
# Script'i indirin
wget https://raw.githubusercontent.com/graphigen/novagraphson/main/install.sh

# Çalıştırılabilir yapın
chmod +x install.sh

# Script'i çalıştırın
./install.sh
```

### 3. SSL Sertifikası (Opsiyonel)

Script çalışırken SSL sertifikası kurmak isteyip istemediğinizi soracak. "y" diyerek SSL sertifikası kurabilirsiniz.

## Kurulum Sonrası

### Uygulama Durumu Kontrolü

```bash
# PM2 durumu
pm2 status

# Nginx durumu
sudo systemctl status nginx

# Health check
curl http://localhost/health
```

### Yönetim Komutları

```bash
# Uygulamayı yeniden başlat
pm2 restart novagraph

# PM2 loglarını görüntüle
pm2 logs novagraph

# Güncelleme yap
cd /var/www/novagraph
./update.sh

# Nginx loglarını görüntüle
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Dosya Yapısı

```
/var/www/novagraph/
├── app/                    # Next.js uygulama dosyaları
├── components/             # React bileşenleri
├── public/                 # Statik dosyalar
├── install.sh             # Kurulum scripti
├── update.sh              # Güncelleme scripti
├── health-check.sh        # Health check scripti
└── ecosystem.config.js    # PM2 konfigürasyonu
```

## Güvenlik

- Firewall aktif edilmiştir
- Sadece SSH ve Nginx portları açıktır
- SSL sertifikası kurulmuştur (opsiyonel)
- Güvenlik headerları eklenmiştir

## Sorun Giderme

### Uygulama Çalışmıyorsa

```bash
# PM2 loglarını kontrol edin
pm2 logs novagraph

# Uygulamayı yeniden başlatın
pm2 restart novagraph

# Sistem kaynaklarını kontrol edin
htop
```

### Nginx Çalışmıyorsa

```bash
# Nginx durumunu kontrol edin
sudo systemctl status nginx

# Nginx konfigürasyonunu test edin
sudo nginx -t

# Nginx'i yeniden başlatın
sudo systemctl reload nginx
```

### SSL Sertifikası Sorunları

```bash
# SSL sertifikasını yenileyin
sudo certbot renew

# SSL durumunu kontrol edin
sudo certbot certificates
```

## İletişim

Herhangi bir sorun yaşarsanız, lütfen teknik destek ekibiyle iletişime geçin.

---

**Not:** Bu script sadece Ubuntu 18.04+ sürümlerinde test edilmiştir.
