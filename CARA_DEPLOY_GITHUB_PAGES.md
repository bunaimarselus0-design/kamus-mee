# 🚀 Cara Deploy ke GitHub Pages

## Langkah 1: Push ke GitHub

Jika belum punya repository di GitHub:

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit"

# Tambahkan remote GitHub (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

## Langkah 2: Aktifkan GitHub Pages

1. Buka repository Anda di GitHub
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah, klik **Pages** (menu kiri)
4. Di bagian **Source**, pilih:
   - Source: **GitHub Actions**
5. Klik **Save**

## Langkah 3: Update Base URL di vite.config.ts

Buka file `vite.config.ts` dan ganti nama repository:

```typescript
export default defineConfig({
  // Ganti 'kamus-bahasa-mee_ekari' dengan nama repository GitHub Anda
  base: '/nama-repository-anda/',
  // ...
});
```

**Contoh:**
- Jika URL GitHub: `https://github.com/johndoe/kamus-mee`
- Maka `base: '/kamus-mee/'`

## Langkah 4: Push Perubahan

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

## Langkah 5: Tunggu Deployment

1. Buka tab **Actions** di repository GitHub
2. Lihat workflow "Deploy to GitHub Pages" sedang berjalan
3. Tunggu sampai selesai (✅ hijau)
4. Halaman akan tersedia di: `https://USERNAME.github.io/REPO_NAME/`

## ⏱️ Berapa Lama?

- **Build & Deploy:** 2-5 menit
- **Propagasi DNS:** Bisa sampai 10 menit

## 🔍 Troubleshooting

### Workflow gagal?
- Cek tab **Actions** untuk error log
- Pastikan `package.json` dan dependencies benar
- Pastikan `npm run build` berhasil di lokal

### Halaman 404?
- Pastikan `base` di `vite.config.ts` sesuai nama repository
- Pastikan GitHub Pages source sudah diset ke **GitHub Actions**
- Tunggu 5-10 menit untuk propagasi

### Halaman blank/putih?
- Cek console browser (F12) untuk error
- Pastikan `base` URL benar
- Cek apakah file di folder `dist/` ter-generate dengan benar

### CSS/JS tidak load?
- Ini biasanya karena `base` URL salah
- Pastikan ada trailing slash: `/repo-name/` bukan `/repo-name`

## 📝 Update Aplikasi

Setiap kali ada perubahan:

```bash
git add .
git commit -m "Update aplikasi"
git push
```

GitHub Actions akan otomatis build dan deploy ulang!

## 🎯 Checklist

- [ ] Repository sudah di GitHub
- [ ] File `.github/workflows/deploy.yml` sudah ada
- [ ] `base` di `vite.config.ts` sudah sesuai nama repository
- [ ] GitHub Pages source sudah diset ke **GitHub Actions**
- [ ] Push ke GitHub sudah berhasil
- [ ] Workflow di tab Actions berjalan sukses
- [ ] Halaman bisa diakses di `https://USERNAME.github.io/REPO_NAME/`

## 🌐 URL Akhir

Setelah berhasil, aplikasi Anda akan tersedia di:

```
https://USERNAME.github.io/REPO_NAME/
```

Ganti `USERNAME` dengan username GitHub Anda dan `REPO_NAME` dengan nama repository.

---

**Selamat! Aplikasi Kamus Mee Anda sekarang online! 🎉**
