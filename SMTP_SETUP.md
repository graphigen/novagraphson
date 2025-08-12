# 📧 NovaGraph SMTP Kurulum Rehberi

Bu rehber, NovaGraph web sitesindeki tüm iletişim formları ve pazarlama strateji başvuru sayfasının SMTP ayarlarını yapılandırmak için hazırlanmıştır.

## 🎯 Mevcut Durum

**✅ Kurulu Olan:**
- Nodemailer package kurulu
- SMTP API route mevcut (`/api/send-email`)
- Test mail API route mevcut (`/api/test-email`)
- Mail konfigürasyonu environment.ts'de tanımlı

**📧 Mail Alıcısı:**
- **Tüm formlar:** `cagatayyumlu@gmail.com` adresine gönderilecek

## 🔧 SMTP Konfigürasyonu

### 1. Environment Variables (.env dosyası)

Proje ana dizininde `.env.local` dosyası oluşturun:

```bash
# SMTP Konfigürasyonu
MAIL_USER=info@novagraph.com.tr
MAIL_PASS=your-smtp-password-here
MAIL_HOST=mail.novagraph.com.tr
MAIL_PORT=587
MAIL_SECURE=false
```

### 2. Alternatif SMTP Sağlayıcıları

#### Gmail SMTP (Önerilen)
```bash
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
MAIL_SECURE=false
```

#### Outlook/Hotmail SMTP
```bash
MAIL_HOST=smtp-mail.outlook.com
MAIL_PORT=587
MAIL_USER=your-email@outlook.com
MAIL_PASS=your-password
MAIL_SECURE=false
```

#### Yandex SMTP
```bash
MAIL_HOST=smtp.yandex.com
MAIL_PORT=465
MAIL_USER=your-email@yandex.com
MAIL_PASS=your-password
MAIL_SECURE=true
```

## 🧪 SMTP Test Etme

### 1. Test Mail Gönderme

```bash
curl -X POST http://localhost:3000/api/test-email
```

### 2. Test Sonucu

Başarılı test sonucu:
```json
{
  "success": true,
  "message": "Test mail başarıyla gönderildi",
  "config": {
    "host": "mail.novagraph.com.tr",
    "port": 587,
    "secure": false,
    "user": "info@novagraph.com.tr",
    "recipient": "cagatayyumlu@gmail.com"
  }
}
```

## 📋 Form Türleri ve Mail Konfigürasyonu

### 1. İletişim Formu (Popup)
- **Route:** `/api/send-email`
- **Form Type:** `popup`
- **Subject:** "Yeni Popup İletişim Formu - NovaGraph"
- **Alıcı:** `cagatayyumlu@gmail.com`

### 2. İletişim Sayfası Formu
- **Route:** `/api/send-email`
- **Form Type:** `contact`
- **Subject:** "Yeni İletişim Formu - NovaGraph"
- **Alıcı:** `cagatayyumlu@gmail.com`

### 3. Pazarlama Strateji Başvurusu
- **Route:** `/api/send-email`
- **Form Type:** `marketing`
- **Subject:** "Yeni Pazarlama Strateji Başvurusu - NovaGraph"
- **Alıcı:** `cagatayyumlu@gmail.com`

## 🚀 Production Deployment

### 1. Vercel Deployment
Vercel dashboard'da environment variables ekleyin:
- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_SECURE`

### 2. Zeabur Deployment
Zeabur dashboard'da environment variables ekleyin:
- `MAIL_USER`
- `MAIL_PASS`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_SECURE`

## 🔒 Güvenlik Notları

1. **Şifre Güvenliği:** SMTP şifresini asla kod içinde hardcode etmeyin
2. **Environment Variables:** Tüm hassas bilgileri environment variables olarak saklayın
3. **App Passwords:** Gmail kullanıyorsanız, 2FA aktif edin ve app password kullanın
4. **Rate Limiting:** SMTP sağlayıcısının rate limit'lerini kontrol edin

## 🐛 Sorun Giderme

### 1. "Authentication failed" Hatası
- SMTP kullanıcı adı ve şifresini kontrol edin
- 2FA aktifse app password kullanın
- SMTP sağlayıcısının güvenlik ayarlarını kontrol edin

### 2. "Connection timeout" Hatası
- Firewall ayarlarını kontrol edin
- SMTP port'unun açık olduğundan emin olun
- SMTP host adresini kontrol edin

### 3. "Relay access denied" Hatası
- SMTP sağlayıcısının relay izinlerini kontrol edin
- IP whitelist'e eklenmesi gerekebilir

## 📞 Destek

SMTP konfigürasyonu ile ilgili sorunlar için:
- **E-posta:** cagatayyumlu@gmail.com
- **GitHub Issues:** Proje repository'sinde issue açın

---

**Son Güncelleme:** $(date)
**Versiyon:** 1.0.0
