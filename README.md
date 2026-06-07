# 🥦 Landing Page NutriTrack 🍓
> **"Teman Hidup Sehatmu yang Super Imut! 🐾✨"**

Website ini merupakan **landing page / portal informasi resmi** untuk aplikasi **NutriTrack** (aplikasi pelacak kalori & gizi bertenaga Gemini AI & Groq AI). Website ini dibangun menggunakan framework modern **Nuxt 4** dan dirancang untuk memenuhi semua kriteria verifikasi akun produksi **Midtrans** (payment gateway).

---

## 🌟 Fitur Halaman Utama
1. **Interactive Phone Mockup (CSS Simulator)**: Simulasi visual interaktif untuk dashboard harian (dilengkapi baterai air interaktif), fitur scan Gemini AI, dan integrasi modal pembayaran **Midtrans Snap Sandbox** (simulasi bayar virtual account sukses).
2. **Kepatuhan Registrasi Midtrans**: 
   - Deskripsi lengkap produk dan tabel perbandingan harga Premium (Rp 20.000/bulan).
   - Kontak dukungan pelanggan resmi: `nutritrack.app@gmail.com`.
   - Halaman legalitas wajib: **Kebijakan Privasi (Privacy Policy)**, **Syarat & Ketentuan (Terms & Conditions)**, dan **Kebijakan Refund & Pembatalan (Refund Policy)**.
3. **Desain Kawaii & Premium**: Didukung oleh font Outfit & Poppins, CSS variables untuk tema warna hijau segar, dan micro-animations interaktif.

---

## 🛠️ Cara Menjalankan di Lokal (Local Development)

### 1. Instalasi Dependency
Pastikan Anda berada di direktori `nutritrack-web` dan jalankan perintah berikut:
```bash
npm install
```

### 2. Jalankan Development Server
Jalankan server pengembangan di `http://localhost:3000`:
```bash
npm run dev
```

### 3. Build Uji Coba Produksi
Untuk memastikan seluruh halaman static generate berhasil dikompilasi tanpa error:
```bash
npm run generate
```

---

## 🚀 Panduan Deployment ke Cloudflare Pages

Karena website ini berupa landing page statis (SSG), hosting di **Cloudflare Pages** sangat disarankan karena gratis, memiliki SSL otomatis, dan disebarkan ke CDN global Cloudflare.

Ada dua metode utama untuk melakukan deploy:

### Metode A: Hubungkan ke GitHub (Sangat Direkomendasikan)
Metode ini otomatis mendeploy ulang setiap kali Anda melakukan `git push` ke repositori Anda.

1. **Push Proyek ke GitHub**:
   Buat repositori baru di akun GitHub Anda dan push proyek `nutritrack-web` ke repositori tersebut.
2. **Masuk ke Dashboard Cloudflare**:
   - Buka [dash.cloudflare.com](https://dash.cloudflare.com/) dan masuk ke akun Anda.
   - Di sidebar kiri, klik **Workers & Pages** -> **Create application** -> pilih tab **Pages**.
   - Klik **Connect to Git** dan pilih repositori GitHub `nutritrack-web` Anda.
3. **Konfigurasi Build**:
   - **Framework Preset**: Pilih `Nuxt.js` (atau biarkan default).
   - **Build Command**: `npm run generate` (atau `npx nuxi generate`).
   - **Build Output Directory**: `.output/public`.
   - **Compatibility Date**: Setel ke tanggal saat ini (misal `2025-07-15` atau sesudahnya).
   - **Node.js Version**: Pastikan diatur ke versi modern (rekomendasi `>= 18.0.0` di variabel lingkungan jika diperlukan).
4. **Klik Save and Deploy**:
   Cloudflare akan mengambil kode Anda, menjalankan proses build, dan merilis situs Anda secara langsung dalam 1-2 menit.

---

### Metode B: Deploy Manual via Wrangler CLI (Tanpa Git)
Jika Anda tidak menggunakan Git dan ingin langsung men-deploy berkas hasil kompilasi lokal:

1. **Jalankan Generate Lokal**:
   ```bash
   npm run generate
   ```
   Perintah ini akan membuat folder `.output/public` yang berisi semua berkas HTML/CSS statis.
2. **Deploy via Wrangler**:
   Jalankan perintah berikut untuk mengunggah folder output langsung ke Cloudflare Pages:
   ```bash
   npx wrangler pages deploy .output/public --project-name=nutritrack
   ```
   *Catatan: Anda akan diminta untuk masuk (login) ke akun Cloudflare Anda di browser jika belum pernah masuk sebelumnya.*

---

## 📂 Struktur Folder Proyek (Nuxt 4)
*   📁 `app/` - Folder sumber utama aplikasi (Nuxt 4 layout).
    *   📁 `assets/css/` - Berkas style global `main.css` yang mendefinisikan kawaii design system.
    *   📁 `components/` - Komponen Vue terpisah:
        *   `Navbar.vue` (floating navbar dengan responsive mobile menu).
        *   `Footer.vue` (footer yang memuat alamat kantor, email dukungan, & kepatuhan Midtrans).
        *   `AppMockup.vue` (simulator handphone interaktif interaksi dashboard & simulasi pembayaran).
    *   📁 `pages/` - Halaman-halaman website (ter-routing otomatis):
        *   `index.vue` - Halaman beranda utama.
        *   `privacy.vue` - Kebijakan Privasi (Privacy Policy).
        *   `terms.vue` - Syarat & Ketentuan (Terms & Conditions).
        *   `refund.vue` - Kebijakan Refund & Pembatalan.
    *   `app.vue` - Root entry point yang membungkus navigasi utama.
*   📁 `public/` - Aset statis seperti `app_icon.png`, favicon, maskot apel, dll.
*   `nuxt.config.ts` - Konfigurasi SEO metadata, Google Fonts, dan integrasi style global.
