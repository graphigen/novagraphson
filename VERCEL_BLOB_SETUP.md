# Vercel Blob Setup Guide

## 🚀 **Kurulum Adımları**

### **1. Environment Variables**

`.env.local` dosyasına aşağıdaki değişkeni ekleyin:

```bash
# Vercel Blob için gerekli
BLOB_READ_WRITE_TOKEN="your_actual_token_here"
```

**Token'ı almak için:**
1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. Projenizi seçin
3. **Storage** → **Blob** → **Environment Variables**
4. `BLOB_READ_WRITE_TOKEN` değişkenini kopyalayın

### **2. Gerekli Paketler**

```bash
npm install @vercel/blob
```

### **3. Kullanım**

#### **Avatar Upload Sayfası:**
- URL: `/avatar/upload`
- Desteklenen formatlar: JPEG, PNG, WebP
- Maksimum dosya boyutu: 4.5MB

#### **API Endpoint:**
- `POST /api/avatar/upload?filename=example.jpg`
- Dosya yükleme ve Vercel Blob'a kaydetme

## 🔧 **Özellikler**

- ✅ Dosya formatı validasyonu
- ✅ Dosya boyutu kontrolü (4.5MB limit)
- ✅ Hata yönetimi
- ✅ Güvenli dosya yükleme
- ✅ Responsive tasarım
- ✅ Türkçe arayüz

## 📁 **Dosya Yapısı**

```
app/
├── avatar/
│   └── upload/
│       └── page.tsx          # Upload sayfası
└── api/
    └── avatar/
        └── upload/
            └── route.ts       # Upload API
```

## 🚨 **Önemli Notlar**

1. **Token Güvenliği**: `BLOB_READ_WRITE_TOKEN`'ı asla public repository'de paylaşmayın
2. **Dosya Boyutu**: Server upload'lar için 4.5MB limit
3. **Format**: Sadece resim dosyaları desteklenir
4. **Access**: Tüm dosyalar public olarak yüklenir

## 🧪 **Test Etme**

1. Development server'ı başlatın: `npm run dev`
2. `/avatar/upload` sayfasına gidin
3. Bir resim dosyası seçin ve yükleyin
4. Başarılı yükleme sonrası blob URL'ini kontrol edin

## 🔍 **Sorun Giderme**

### **Token Hatası:**
```
Error: Missing BLOB_READ_WRITE_TOKEN environment variable
```
**Çözüm:** `.env.local` dosyasına token'ı ekleyin

### **Dosya Boyutu Hatası:**
```
Error: File size must be less than 4.5MB
```
**Çözüm:** Daha küçük dosya kullanın veya client upload'a geçin

### **Format Hatası:**
```
Error: Only JPEG, PNG and WebP files are supported
```
**Çözüm:** Desteklenen formatlardan birini kullanın
