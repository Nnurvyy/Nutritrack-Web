<template>
  <div class="legal-page">
    <div class="container">
      <!-- Back Button -->
      <NuxtLink to="/" class="btn-back">
        ⬅️ Kembali ke Beranda
      </NuxtLink>

      <div class="kawaii-card legal-card">
        <h1 class="legal-title">Kebijakan Privasi (Privacy Policy)</h1>
        <p class="legal-date">Terakhir diperbarui: 7 Juni 2026</p>
        
        <div class="legal-content">
          <p>
            Selamat datang di <strong>NutriTrack</strong>. Kami berkomitmen untuk melindungi privasi Anda dan memastikan bahwa data pribadi Anda dikelola dengan aman dan bertanggung jawab. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler NutriTrack ("Aplikasi") dan situs web kami.
          </p>

          <h3>1. Informasi yang Kami Kumpulkan</h3>
          <p>
            Untuk memberikan layanan asisten kesehatan dan pencatatan gizi harian yang optimal, kami mengumpulkan beberapa jenis informasi berikut:
          </p>
          <ul>
            <li>
              <strong>Informasi Akun:</strong> Alamat email, nama, dan foto profil Anda yang didapatkan saat Anda mendaftar melalui Firebase Authentication (menggunakan Email/Sandi atau Google Sign-In).
            </li>
            <li>
              <strong>Data Kesehatan dasar:</strong> Berat badan, tinggi badan, jenis kelamin, usia, tingkat aktivitas fisik, dan target kalori harian Anda yang digunakan untuk menghitung kebutuhan TDEE (Total Daily Energy Expenditure).
            </li>
            <li>
              <strong>Catatan Makanan & Asupan:</strong> Data asupan makanan harian Anda, porsi makan, jumlah air minum, riwayat berat badan, dan waktu makan yang Anda catat di Aplikasi.
            </li>
            <li>
              <strong>Data Gambar Makanan (AI Food Scanner):</strong> Gambar atau foto piring makanan yang Anda unggah melalui fitur kamera/galeri untuk dianalisis oleh AI Gemini.
            </li>
            <li>
              <strong>Informasi Transaksi:</strong> Saat Anda melakukan upgrade ke Premium, transaksi diproses secara langsung oleh <strong>Midtrans</strong>. Kami hanya menyimpan status transaksi, ID Pembayaran, tipe pembayaran, tanggal pembayaran, dan tanggal kedaluwarsa langganan. Kami <strong>tidak pernah</strong> mengakses atau menyimpan detail kartu kredit atau kredensial rekening bank Anda.
            </li>
          </ul>

          <h3>2. Bagaimana Kami Menggunakan Informasi Anda</h3>
          <p>
            Kami menggunakan data yang dikumpulkan untuk tujuan berikut:
          </p>
          <ul>
            <li>Menyediakan, mengoperasikan, dan memelihara fitur-fitur utama Aplikasi NutriTrack.</li>
            <li>Melakukan estimasi kalori dan makro gizi (Protein, Karbo, Lemak) dari gambar makanan Anda melalui API kecerdasan buatan Gemini.</li>
            <li>Memproses pencarian gizi makanan berbasis teks secara instan menggunakan API Groq.</li>
            <li>Menampilkan riwayat perkembangan berat badan dan grafik pemantauan gizi harian yang interaktif.</li>
            <li>Memfasilitasi fitur Pemantauan Orang Tua (Parental Control) untuk berbagi log nutrisi dengan anggota keluarga tepercaya yang Anda setujui.</li>
            <li>Memproses transaksi pembayaran langganan Premium dan mengaktifkan fitur premium secara otomatis melalui webhook dan API Midtrans Snap.</li>
            <li>Mengirimkan notifikasi penting terkait layanan, pembaruan keamanan, dan dukungan pelanggan.</li>
          </ul>

          <h3>3. Pembagian Informasi dengan Pihak Ketiga</h3>
          <p>
            Kami tidak akan menjual, menyewakan, atau menukar data pribadi Anda kepada pihak ketiga manapun. Kami hanya bekerja sama dengan penyedia layanan pihak ketiga tepercaya berikut untuk mendukung operasional aplikasi:
          </p>
          <ul>
            <li>
              <strong>Google Firebase:</strong> Untuk mengelola otentikasi akun pengguna (Authentication) dan basis data cloud secara real-time (Cloud Firestore).
            </li>
            <li>
              <strong>Google Cloud (Gemini AI API):</strong> Untuk memproses visual piring makanan guna mengestimasikan kandungan nutrisi secara otomatis.
            </li>
            <li>
              <strong>Groq API:</strong> Untuk memproses pencarian teks nama makanan dan rincian gizinya.
            </li>
            <li>
              <strong>Midtrans (PT Midtrans):</strong> Sebagai gerbang pembayaran resmi. Informasi penagihan Anda diproses secara terenkripsi sesuai dengan standar industri keamanan perbankan oleh Midtrans.
            </li>
          </ul>

          <h3>4. Penyimpanan dan Keamanan Data</h3>
          <p>
            Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang ketat untuk melindungi data pribadi Anda dari akses tidak sah, pengungkapan, perubahan, atau kerusakan. Data Anda disimpan secara aman di infrastruktur Cloud Firebase dengan aturan keamanan tingkat lanjut yang hanya mengizinkan akses data oleh pemilik akun yang bersangkutan.
          </p>

          <h3>5. Hak Pengguna & Penghapusan Akun</h3>
          <p>
            Anda memiliki kontrol penuh atas data Anda sendiri. Anda berhak untuk mengakses, mengubah, memperbarui, atau menghapus informasi kesehatan dan catatan gizi Anda kapan saja melalui menu pengaturan di dalam Aplikasi. 
          </p>
          <p>
            Jika Anda ingin menghapus seluruh akun dan data Anda secara permanen dari server kami, Anda dapat menggunakan tombol <strong>"Hapus Akun"</strong> yang terletak di bagian pengaturan profil Anda. Proses ini akan menghapus seluruh catatan pribadi, riwayat makanan, dan kredensial otentikasi Anda seketika tanpa sisa.
          </p>

          <h3>6. Perubahan pada Kebijakan Privasi Ini</h3>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik operasional kami atau karena alasan hukum dan regulasi. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memperbarui tanggal "Terakhir diperbarui" di bagian atas halaman ini.
          </p>

          <h3>7. Hubungi Kami</h3>
          <p>
            Jika Anda memiliki pertanyaan, kekhawatiran, atau keluhan terkait Kebijakan Privasi ini atau pengelolaan data Anda, silakan hubungi tim bantuan dukungan kami melalui email di:
          </p>
          <p class="email-box">
            📧 <a href="mailto:nutritrack.app@gmail.com"><strong>nutritrack.app@gmail.com</strong></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-page {
  padding: 40px 0;
  background-color: var(--bg-light);
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 24px;
  font-size: 0.95rem;
}

.btn-back:hover {
  color: var(--primary-light);
  transform: translateX(-4px);
}

.legal-card {
  padding: 48px;
}

@media (max-width: 768px) {
  .legal-card {
    padding: 24px;
  }
}

.legal-title {
  font-size: 2.2rem;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.legal-date {
  font-size: 0.88rem;
  color: var(--text-sub);
  margin-bottom: 32px;
  font-style: italic;
}

.legal-content h3 {
  font-size: 1.25rem;
  color: var(--text-main);
  margin-top: 28px;
  margin-bottom: 12px;
  border-bottom: 2px dashed var(--border);
  padding-bottom: 4px;
}

.legal-content p {
  font-size: 0.95rem;
  color: var(--text-sub);
  line-height: 1.7;
  margin-bottom: 16px;
  text-align: justify;
}

.legal-content ul {
  margin-left: 20px;
  margin-bottom: 20px;
  color: var(--text-sub);
  font-size: 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.legal-content ul li {
  line-height: 1.6;
}

.email-box {
  background-color: var(--primary-lighter);
  border: 1px solid var(--border);
  padding: 12px 20px;
  border-radius: 12px;
  display: inline-block;
  margin-top: 8px;
}

.email-box a {
  color: var(--primary-dark);
}
</style>
