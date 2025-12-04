# 📱 Kamus Bahasa Mee (Indonesia - Mee)

Aplikasi kamus digital untuk belajar Bahasa Mee dengan fitur translator AI dan buku digital.

---

## ✨ Fitur

- 📖 **Kamus Lengkap** - Database kata Indonesia - Mee
- 🤖 **AI Translator** - Terjemahan otomatis dengan Google Gemini
- 📚 **Buku Digital** - Baca buku dalam Bahasa Mee
- 👨‍💼 **Admin Dashboard** - Kelola database kamus
- 📱 **Offline Ready** - Kamus bisa digunakan tanpa internet

---

## 📥 Download & Install

### Download APK:
**File:** `Kamus-Mee-v1.0.apk` (3.1 MB)

### Cara Install:
1. Download file APK
2. Buka **Settings** → **Security**
3. Aktifkan **"Install from Unknown Sources"**
4. Buka **File Manager**, tap file APK
5. Tap **"Install"**
6. Jika ada warning Play Protect → tap **"More details"** → **"Install anyway"**
7. Selesai! Aplikasi siap digunakan

**Catatan:** Aplikasi ini AMAN. Peringatan Play Protect muncul karena bukan dari Play Store.

---

## 🔑 Login Admin

**Password:** `admin123`

Klik ikon 🔒 di pojok kanan atas untuk masuk ke Admin Dashboard.

---

## 🚀 Cara Bagikan APK

### Via WhatsApp:
1. Buka WhatsApp
2. Kirim file `Kamus-Mee-v1.0.apk`
3. Sertakan panduan install di atas

### Via Google Drive:
1. Upload APK ke Google Drive
2. Share link ke user
3. User download dan install

---

## 🛠️ Development

### Prerequisites:
- Node.js 18+
- Java JDK 17+
- Android SDK

### Setup:
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build APK
npm run build
npx cap sync android
cd android && gradlew assembleRelease
```

### Build APK Otomatis:
```bash
# Windows
build-and-copy-apk.bat
```

APK akan tersedia di: `Kamus-Mee-v1.0.apk`

---

## 📁 Struktur Project

```
kamus-bahasa-mee_ekari/
├── components/          # React components
│   ├── AdminDashboard.tsx
│   ├── AdminLogin.tsx
│   ├── DigitalBook.tsx
│   └── ...
├── utils/              # Utility functions
│   └── gemini.ts       # AI translator
├── android/            # Android native project
├── public/             # Static assets
├── App.tsx             # Main app component
├── data.ts             # Dictionary data
└── Kamus-Mee-v1.0.apk # APK siap distribusi
```

---

## 🔒 Keamanan

### File yang JANGAN dibagikan:
- ❌ `android/kamus-mee.keystore`
- ❌ `android/key.properties`
- ❌ `.env.local`

### File yang AMAN dibagikan:
- ✅ `Kamus-Mee-v1.0.apk`
- ✅ Source code (jika open source)

---

## 📖 Dokumentasi Lengkap

- **CARA_INSTALL_APK.md** - Panduan install untuk user
- **DISTRIBUSI_APK_FINAL.md** - Panduan distribusi lengkap
- **SELESAI_SIAP_BAGIKAN.md** - Quick start guide

---

## 🆘 Troubleshooting

### "App not installed"
→ Uninstall versi lama, install ulang

### "Parse error"
→ Pastikan Android 5.1 atau lebih baru

### "Installation blocked"
→ Aktifkan "Install from Unknown Sources"

### Play Protect memblokir
→ Tap "More details" → "Install anyway"

---

## 📞 Support

Jika ada pertanyaan atau masalah, hubungi developer.

---

## 📄 License

Copyright © 2025 Kamus Mee

---

**Dibuat dengan ❤️ untuk melestarikan Bahasa Mee**
