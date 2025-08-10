# Environment Setup ve Port Yönetimi

## 🚀 **Development Ortamı**

### **Başlatma:**
```bash
npm run dev          # Port 3000'de development
npm run dev:staging  # Port 3001'de staging
npm run dev:prod     # Port 3002'de production simülasyonu
```

### **Port Mapping:**
- **Development**: Port 3000 (localhost:3000)
- **Staging**: Port 3001 (localhost:3001)  
- **Production**: Port 80/443 (novagraph.com.tr)

## 🔧 **Environment Variables**

### **Development (.env.local):**
```bash
NODE_ENV=development
PORT=3000
NEXT_PUBLIC_ENV=development
```

### **Staging:**
```bash
NODE_ENV=staging
PORT=3001
NEXT_PUBLIC_ENV=staging
```

### **Production:**
```bash
NODE_ENV=production
PORT=80
NEXT_PUBLIC_ENV=production
```

## 🛡️ **Güvenlik Seviyeleri**

### **Development:**
- Temel security headers
- Hot reload aktif
- Debug modları açık
- Minimal rate limiting

### **Staging:**
- Tam güvenlik önlemleri
- Production'a benzer konfigürasyon
- Test verileri
- Performance testing

### **Production:**
- Maksimum güvenlik
- Optimized build
- Production database
- Monitoring aktif

## 📁 **Dosya Yapısı**

```
lib/
├── environment.ts    # Environment detection
├── validation.ts     # Form validation
└── ...

middleware.ts         # Environment-aware security
package.json          # Script definitions
```

## 🚨 **Port Çakışması Çözümü**

1. **Development sunucusunu durdur:**
   ```bash
   lsof -ti:3002 | xargs kill -9
   ```

2. **Doğru port'ta başlat:**
   ```bash
   npm run dev        # Port 3000
   npm run dev:staging # Port 3001
   ```

3. **Environment kontrol et:**
   ```bash
   echo $NODE_ENV
   ```

## ✅ **Test Etme**

### **Development:**
```bash
curl http://localhost:3000
```

### **Staging:**
```bash
curl http://localhost:3001
```

### **Production:**
```bash
curl https://novagraph.com.tr
```

## 🔍 **Sorun Giderme**

### **Port zaten kullanımda:**
```bash
# Port'u kullanan process'i bul ve durdur
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
lsof -ti:3002 | xargs kill -9
```

### **Environment karışıklığı:**
```bash
# Environment'ı temizle
unset NODE_ENV
unset PORT

# Yeniden başlat
npm run dev
```

### **Build sorunları:**
```bash
# Clean build
rm -rf .next node_modules
npm install
npm run build
```
