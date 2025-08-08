# Cloudflare DNS ve SSL Ayarları

## 🔧 Cloudflare'de Yapılması Gereken Ayarlar

### 1. DNS Ayarları (✅ Zaten Yapılmış)
```
A    novagraph.com.tr    13.49.75.107    DNS only    Auto
A    www                 13.49.75.107    DNS only    Auto
```

### 2. SSL/TLS Ayarları (🔧 Yapılması Gerekiyor)

#### SSL/TLS Encryption Mode
1. Cloudflare Dashboard'a gidin
2. `novagraph.com.tr` domain'ini seçin
3. **SSL/TLS** sekmesine gidin
4. **Encryption mode** ayarını değiştirin:
   - **Flexible** → **Full** veya **Full (strict)** olarak değiştirin

#### Edge Certificates
1. **SSL/TLS** → **Edge Certificates** sekmesine gidin
2. **Always Use HTTPS** → **On** yapın
3. **Minimum TLS Version** → **1.2** seçin
4. **Opportunistic Encryption** → **On** yapın
5. **TLS 1.3** → **On** yapın

### 3. Page Rules (Opsiyonel)
```
URL: http://novagraph.com.tr/*
Settings: Always Use HTTPS
```

### 4. Security Ayarları
1. **Security** sekmesine gidin
2. **Security Level** → **Medium** veya **High** seçin
3. **Challenge Passage** → **30 minutes** seçin

### 5. Caching Ayarları
1. **Caching** sekmesine gidin
2. **Caching Level** → **Standard** seçin
3. **Browser Cache TTL** → **4 hours** seçin

## 🎯 Önerilen SSL/TLS Modu

### Full (Önerilen)
- Cloudflare ile sunucu arasında şifreli bağlantı
- Sunucuda SSL sertifikası gerekli
- En güvenli seçenek

### Full (strict)
- Cloudflare ile sunucu arasında şifreli bağlantı
- Sunucuda geçerli SSL sertifikası gerekli
- En güvenli seçenek (sertifika kontrolü ile)

## 🔧 Cloudflare'de Yapılacak Adımlar

### Adım 1: SSL/TLS Encryption Mode Değiştirme
1. Cloudflare Dashboard → `novagraph.com.tr`
2. **SSL/TLS** → **Overview**
3. **Encryption mode** → **Full** seçin
4. **Save** butonuna tıklayın

### Adım 2: Always Use HTTPS
1. **SSL/TLS** → **Edge Certificates**
2. **Always Use HTTPS** → **On** yapın
3. **Save** butonuna tıklayın

### Adım 3: Security Level
1. **Security** → **Settings**
2. **Security Level** → **Medium** seçin
3. **Save** butonuna tıklayın

## 🌐 Test Etme

### DNS Testi
```bash
# DNS kontrolü
nslookup novagraph.com.tr
nslookup www.novagraph.com.tr

# HTTP testi
curl -I http://novagraph.com.tr
curl -I http://www.novagraph.com.tr
```

### SSL Testi
```bash
# HTTPS testi
curl -I https://novagraph.com.tr
curl -I https://www.novagraph.com.tr
```

## 🔄 Alternatif Çözümler

### 1. Cloudflare Proxy Kullanımı
DNS ayarlarında **Proxy status**'ü **Proxied** yapın:
```
A    novagraph.com.tr    13.49.75.107    Proxied    Auto
A    www                 13.49.75.107    Proxied    Auto
```

### 2. Development Mode
Geçici olarak **Development Mode**'u açın:
1. **Caching** → **Configuration**
2. **Development Mode** → **On** yapın

### 3. Purge Cache
Cache'i temizleyin:
1. **Caching** → **Configuration**
2. **Purge Everything** → **Purge Everything**

## 🎯 Sonraki Adımlar

1. **Cloudflare ayarlarını yapın** (yukarıdaki adımları takip edin)
2. **5-10 dakika bekleyin** (DNS yayılması için)
3. **SSL script'ini tekrar çalıştırın**:
   ```bash
   ./ssl-setup-manual.sh
   ```

## 📞 Hızlı Test

Cloudflare ayarlarını yaptıktan sonra:

```bash
# DNS testi
nslookup novagraph.com.tr

# HTTP testi
curl -I http://novagraph.com.tr

# HTTPS testi (Cloudflare SSL ile)
curl -I https://novagraph.com.tr
```

## 🎉 Beklenen Sonuç

Cloudflare ayarlarını yaptıktan sonra:
- ✅ Domain internet üzerinden erişilebilir olacak
- ✅ HTTPS otomatik olarak çalışacak
- ✅ SSL sertifikası kurulabilecek
- ✅ Site tamamen hazır olacak
