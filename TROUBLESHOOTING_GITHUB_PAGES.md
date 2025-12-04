# 🔧 Troubleshooting GitHub Pages

## Masalah: Halaman Blank/Putih atau Link Tidak Berfungsi

### ✅ Solusi 1: Clear Cache Browser

**Cara paling mudah:**
1. Tekan **Ctrl + Shift + R** (Windows) atau **Cmd + Shift + R** (Mac)
2. Atau buka **Incognito/Private Mode** dan coba lagi

**Cara lengkap:**
1. Tekan **F12** untuk buka Developer Tools
2. Klik kanan tombol **Refresh** di browser
3. Pilih **"Empty Cache and Hard Reload"**

---

### ✅ Solusi 2: Cek Console untuk Error

1. Tekan **F12** untuk buka Developer Tools
2. Klik tab **Console**
3. Lihat apakah ada error merah

**Error umum dan solusinya:**

#### Error: "Failed to load resource: 404"
→ File tidak ditemukan. Pastikan:
- `base` di `vite.config.ts` sudah benar: `base: '/kamus-mee/'`
- Workflow GitHub Actions sudah selesai (✅ hijau)

#### Error: "Uncaught SyntaxError"
→ File JavaScript corrupt. Solusi:
- Push ulang ke GitHub
- Tunggu workflow selesai
- Clear cache dan refresh

---

### ✅ Solusi 3: Pastikan Workflow Berhasil

1. Buka https://github.com/mranselustunai894-design/kamus-mee/actions
2. Cek workflow terakhir:
   - ✅ **Hijau** = Berhasil
   - ❌ **Merah** = Gagal (klik untuk lihat error)
   - 🟡 **Kuning** = Sedang berjalan (tunggu selesai)

**Jika workflow gagal:**
- Klik workflow yang gagal
- Lihat error log
- Biasanya masalah di `npm install` atau `npm run build`

---

### ✅ Solusi 4: Cek GitHub Pages Settings

1. Buka https://github.com/mranselustunai894-design/kamus-mee/settings/pages
2. Pastikan:
   - **Source:** GitHub Actions ✅
   - **Branch:** main ✅
   - Ada link hijau: "Your site is live at..."

**Jika tidak ada link hijau:**
- Tunggu 2-5 menit setelah workflow selesai
- Refresh halaman settings

---

### ✅ Solusi 5: Test Build di Lokal

Sebelum push ke GitHub, test dulu di komputer:

```bash
cd kamus-bahasa-mee_ekari

# Install dependencies
npm install

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

Buka http://localhost:4173/kamus-mee/ di browser.

**Jika berhasil di lokal tapi gagal di GitHub:**
- Pastikan semua file sudah ter-commit
- Pastikan `.github/workflows/deploy.yml` ada
- Pastikan `base` di `vite.config.ts` benar

---

### ✅ Solusi 6: Re-deploy Manual

Jika semua cara di atas gagal:

1. **Buat perubahan kecil** (edit README.md)
2. **Commit dan push:**
   ```bash
   git add .
   git commit -m "Trigger re-deploy"
   git push
   ```
3. **Tunggu workflow selesai**
4. **Clear cache dan refresh**

---

## 🎯 Checklist Debugging

Cek satu per satu:

- [ ] Workflow GitHub Actions selesai dengan ✅ hijau
- [ ] GitHub Pages source = **GitHub Actions**
- [ ] `base` di `vite.config.ts` = `'/kamus-mee/'`
- [ ] File `.github/workflows/deploy.yml` ada
- [ ] Clear cache browser (Ctrl + Shift + R)
- [ ] Coba buka di Incognito/Private mode
- [ ] Cek Console (F12) untuk error
- [ ] Tunggu 5-10 menit untuk propagasi
- [ ] Test build di lokal dengan `npm run build && npm run preview`

---

## 🆘 Masih Belum Bisa?

### Cek URL yang Benar:

✅ **URL yang BENAR:**
```
https://mranselustunai894-design.github.io/kamus-mee/
```

❌ **URL yang SALAH:**
```
https://mranselustunai894-design.github.io/
https://github.com/mranselustunai894-design/kamus-mee/
```

### Screenshot Error:

Jika masih error, ambil screenshot:
1. Halaman yang error
2. Console (F12 → Console tab)
3. Network tab (F12 → Network tab)

---

## 📱 Test di Device Lain

Coba buka di:
- Browser lain (Chrome, Firefox, Edge)
- Handphone
- Komputer teman

Jika berfungsi di device lain = masalah cache di browser Anda.

---

**Dibuat untuk membantu troubleshooting deployment GitHub Pages**
