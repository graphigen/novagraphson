# 📧 Gmail SMTP Kurulum Rehberi

## 🚀 **Gmail App Password Oluşturma**

### **1. Gmail'de 2FA'yı Etkinleştirin**
- Gmail hesabınıza gidin
- Google Hesabı > Güvenlik > 2 Adımlı Doğrulama
- 2 Adımlı Doğrulamayı etkinleştirin

### **2. App Password Oluşturun**
- Google Hesabı > Güvenlik > 2 Adımlı Doğrulama > Uygulama Şifreleri
- "Uygulama Seç" > "Diğer (Özel ad)"
- Uygulama adı: `NovaGraph Website`
- "Oluştur" butonuna tıklayın
- **16 haneli şifreyi kopyalayın** (örn: `abcd efgh ijkl mnop`)

### **3. Environment Variables Güncelleyin**
`.env` dosyasında şu değerleri güncelleyin:

```bash
# Gmail SMTP Configuration
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=cagatayyumlu@gmail.com
MAIL_PASS=abcd efgh ijkl mnop
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### **4. Test Edin**
```bash
npm run dev
```

Form gönderimi yaparak mail'lerin gelip gelmediğini kontrol edin.

## ✅ **Avantajlar**

- **Yüksek Teslim Oranı**: Gmail'in güçlü altyapısı
- **SPAM Koruması**: Otomatik SPAM filtreleme
- **Güvenlik**: 2FA ile korumalı
- **Ücretsiz**: Gmail hesabı ile

## 🔧 **Alternatif Çözümler**

### **SendGrid (Ücretli)**
- Profesyonel mail servisi
- API tabanlı
- Detaylı analytics

### **Mailgun (Ücretli)**
- Kurumsal mail servisi
- Yüksek teslim oranı
- Webhook desteği

## 📞 **Destek**

Herhangi bir sorun yaşarsanız:
- WhatsApp: +90 545 664 2302
- Email: cagatayyumlu@gmail.com
