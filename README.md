# NovaGraph Website

<!-- Vercel deployment fix: Updated pnpm-lock.yaml to resolve build issues -->

## 🚀 Quick Start

NovaGraph'ın resmi web sitesi - Dijital güvenlik ve web tasarım çözümleri.

## 🚀 Zeabur + AWS EC2 Deployment

Bu proje Zeabur platformunda AWS EC2 instance'ı ile entegre edilmiş şekilde deploy edilmek üzere yapılandırılmıştır.

### Gereksinimler

- Node.js 18+
- npm veya yarn
- AWS EC2 Instance (IP: 13.49.75.107)

### Yerel Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Production sunucusunu başlat
npm start
```

### Zeabur + AWS EC2 Deployment Adımları

1. **Zeabur Dashboard'a Git**
   - [Zeabur Dashboard](https://zeabur.com/dashboard) adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Yeni Proje Oluştur**
   - "New Project" butonuna tıklayın
   - GitHub repository'nizi seçin

3. **Deployment Ayarları**
   - **Framework**: Next.js
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 18.x

4. **Environment Variables**
   - `NODE_ENV`: `production`
   - `NEXT_TELEMETRY_DISABLED`: `1`
   - `NEXT_PUBLIC_APP_URL`: `https://novagraph.com.tr`
   - `AWS_EC2_IP`: `13.49.75.107`

## 🌐 Custom Domain Kurulumu (AWS EC2 + Cloudflare)

### 1. AWS EC2 Instance Yapılandırması

#### **Security Group Ayarları**
AWS EC2 instance'ınızın security group'unda şu portları açın:

```
HTTP (80)     - 0.0.0.0/0
HTTPS (443)   - 0.0.0.0/0
SSH (22)      - 0.0.0.0/0 (veya sadece IP'niz)
```

#### **EC2 Instance'da Nginx Kurulumu**
```bash
# EC2 instance'ına SSH ile bağlanın
ssh -i your-key.pem ubuntu@13.49.75.107

# Nginx kurun
sudo apt update
sudo apt install nginx

# Nginx'i başlatın
sudo systemctl start nginx
sudo systemctl enable nginx

# Firewall ayarları
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

#### **Nginx Konfigürasyonu**
```bash
# Nginx konfigürasyon dosyası oluşturun
sudo nano /etc/nginx/sites-available/novagraph.com.tr

# Aşağıdaki içeriği ekleyin:
server {
    listen 80;
    server_name novagraph.com.tr www.novagraph.com.tr;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Konfigürasyonu aktif edin
sudo ln -s /etc/nginx/sites-available/novagraph.com.tr /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 2. Cloudflare DNS Ayarları

#### **A Kayıtları**
```
novagraph.com.tr     A    13.49.75.107     Proxy: Devre Dışı (Gri Bulut)
www.novagraph.com.tr  A    13.49.75.107     Proxy: Devre Dışı (Gri Bulut)
```

#### **CNAME Kayıtları (Alternatif)**
```
www.novagraph.com.tr  CNAME  novagraph.com.tr     Proxy: Devre Dışı (Gri Bulut)
```

### 3. SSL Sertifikası (Let's Encrypt)

#### **Certbot Kurulumu**
```bash
# Certbot kurun
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası alın
sudo certbot --nginx -d novagraph.com.tr -d www.novagraph.com.tr

# Otomatik yenileme için cron job ekleyin
sudo crontab -e
# Aşağıdaki satırı ekleyin:
0 12 * * * /usr/bin/certbot renew --quiet
```

### 4. Zeabur'da Custom Domain Ekleme

1. **Zeabur Dashboard'da Projenizi Açın**
   - Projenizin detay sayfasına gidin
   - **"Domains"** sekmesini genişletin

2. **Custom Domain Seçeneği**
   - **"Custom Domain"** seçeneğini seçin
   - Domain adını girin: `novagraph.com.tr`
   - **"Create Domain"** butonuna tıklayın

3. **DNS Bilgilerini Alın**
   - Zeabur size DNS bilgilerini verecek
   - Bu bilgileri AWS EC2 instance'ınızda kullanın

### 5. AWS EC2'de Application Deployment

#### **Node.js ve PM2 Kurulumu**
```bash
# Node.js kurun
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 kurun
sudo npm install -g pm2

# Proje klasörü oluşturun
mkdir -p /var/www/novagraph
cd /var/www/novagraph

# Git repository'nizi clone edin
git clone https://github.com/your-username/novagraphson.git .

# Bağımlılıkları yükleyin
npm install

# Production build
npm run build

# PM2 ile uygulamayı başlatın
pm2 start npm --name "novagraph" -- start
pm2 startup
pm2 save
```

#### **PM2 Ecosystem Dosyası**
```bash
# ecosystem.config.js dosyası oluşturun
nano ecosystem.config.js

# Aşağıdaki içeriği ekleyin:
module.exports = {
  apps: [{
    name: 'novagraph',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/novagraph',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      NEXT_PUBLIC_APP_URL: 'https://novagraph.com.tr'
    }
  }]
}

# PM2 ile başlatın
pm2 start ecosystem.config.js
pm2 save
```

### 6. Cloudflare Proxy Ayarları

#### **Önerilen: Proxy Devre Dışı**
1. **DNS Kayıtlarında**:
   - Tüm A kayıtlarında **"Proxy Status"** → **"DNS only"** (Gri bulut) seçin
   - Bu, Cloudflare proxy'sini devre dışı bırakır ve doğrudan AWS EC2'ye yönlendirir

#### **Alternatif: Proxy Aktif**
1. **DNS Kayıtlarında**:
   - A kayıtlarında **"Proxy Status"** → **"Proxied"** (Turuncu bulut) seçin
2. **SSL/TLS Ayarları**:
   - **"SSL/TLS"** sekmesine gidin
   - **"Encryption mode"** → **"Full"** seçin

### 7. SSL/TLS Ayarları

#### **Proxy Devre Dışı İse**
1. **SSL/TLS** sekmesine gidin
2. **"Encryption mode"** → **"Full"** seçin
3. **"Edge Certificates"** bölümünde:
   - **"Always Use HTTPS"** → **Açık**
   - **"Minimum TLS Version"** → **1.2**

#### **Proxy Aktif İse**
1. **SSL/TLS** sekmesine gidin
2. **"Encryption mode"** → **"Full"** seçin
3. **"Edge Certificates"** bölümünde:
   - **"Always Use HTTPS"** → **Açık**
   - **"Minimum TLS Version"** → **1.2**

### 8. Page Rules Ekleme

#### **www → non-www Redirect**
1. **"Page Rules"** sekmesine gidin
2. **"Create Page Rule"** butonuna tıklayın
3. Aşağıdaki kuralı ekleyin:

```
URL: www.novagraph.com.tr/*
Settings:
- Forwarding URL: 301 - Permanent Redirect
- Destination URL: https://novagraph.com.tr/$1
```

#### **HTTP → HTTPS Redirect**
```
URL: http://novagraph.com.tr/*
Settings:
- Always Use HTTPS: On
```

## 🔧 Teknik Detaylar

### Build Optimizasyonları
- ✅ Image optimization
- ✅ Static asset caching
- ✅ Bundle size optimization
- ✅ SEO optimization
- ✅ Performance optimization

### Güvenlik Özellikleri
- ✅ HTTPS enforcement
- ✅ Security headers
- ✅ CORS configuration
- ✅ Hotlink protection
- ✅ Bot protection

### SEO Optimizasyonları
- ✅ Meta tags
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Sitemap
- ✅ Robots.txt

## 🚨 Önemli Notlar

### **1. AWS EC2 Instance**
- IP Adresi: `13.49.75.107`
- Security Group'da gerekli portları açın
- Nginx reverse proxy kullanın
- PM2 ile process management yapın

### **2. SSL Sertifikası**
- Let's Encrypt ile ücretsiz SSL sertifikası
- Otomatik yenileme için cron job
- Nginx ile entegre

### **3. Performance**
- Nginx caching
- PM2 cluster mode
- Cloudflare CDN (opsiyonel)

### **4. Monitoring**
- PM2 monitoring
- Nginx access logs
- Cloudflare analytics

## 📞 İletişim

- **Website**: https://novagraph.com.tr
- **Email**: info@novagraph.com.tr
- **Phone**: +90 545 664 2302

## 📄 Lisans

Bu proje NovaGraph'a aittir. Tüm hakları saklıdır.
