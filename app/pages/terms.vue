<template>
  <div class="legal-page">
    <div class="container">
      <!-- Back Button -->
      <NuxtLink to="/" class="btn-back">
        ⬅️ Kembali ke Beranda
      </NuxtLink>

      <div class="kawaii-card legal-card">
        <h1 class="legal-title">Syarat & Ketentuan (Terms & Conditions)</h1>
        <p class="legal-date">Terakhir diperbarui: 7 Juni 2026</p>
        
        <div class="legal-content">
          <p>
            Selamat datang di <strong>NutriTrack</strong>. Harap membaca Syarat & Ketentuan ini secara cermat sebelum mengunduh, menginstal, atau menggunakan Aplikasi NutriTrack ("Aplikasi") dan situs web kami. Dengan mengakses atau menggunakan layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh seluruh ketentuan yang tertulis di bawah ini.
          </p>

          <h3>1. Ketentuan Umum</h3>
          <p>
            NutriTrack adalah platform asisten kesehatan digital yang menyediakan fitur pencatatan kalori, gizi makanan, riwayat berat badan, serta pemantauan orang tua. Aplikasi ini menggunakan teknologi Kecerdasan Buatan (AI) pihak ketiga untuk mendeteksi nutrisi berdasarkan input foto maupun teks. Layanan kami disediakan "sebagaimana adanya" dan diperuntukkan bagi individu berusia minimal 13 tahun (atau usia legal yang berlaku di yurisdiksi Anda).
          </p>

          <h3>2. Pendaftaran Akun & Keamanan</h3>
          <p>
            Untuk menggunakan fitur Aplikasi secara lengkap, Anda diharuskan melakukan pendaftaran akun melalui sistem otentikasi Firebase yang kami sediakan. Anda wajib:
          </p>
          <ul>
            <li>Memberikan informasi pendaftaran yang akurat, lengkap, dan terbaru.</li>
            <li>Menjaga kerahasiaan kredensial akun Anda (alamat email dan sandi).</li>
            <li>Bertanggung jawab penuh atas semua aktivitas yang terjadi di bawah akun Anda.</li>
            <li>Segera memberi tahu kami jika mendeteksi adanya penggunaan akun tanpa izin atau pelanggaran keamanan lainnya.</li>
          </ul>

          <h3>3. Langganan Premium & Pembayaran</h3>
          <p>
            NutriTrack menawarkan peningkatan akun ke tipe <strong>Premium</strong> dengan biaya langganan sebesar <strong>Rp 20.000 per bulan</strong> (atau harga promosi lain yang berlaku).
          </p>
          <ul>
            <li>
              <strong>Gerbang Pembayaran:</strong> Semua transaksi pembayaran diproses dengan aman secara eksternal melalui payment gateway resmi kami, <strong>Midtrans (Snap Integration)</strong>.
            </li>
            <li>
              <strong>Aktivasi Instan:</strong> Setelah pembayaran Anda dikonfirmasi sukses oleh Midtrans, sistem Hono backend kami akan secara otomatis memperbarui status langganan akun Anda di basis data Firestore secara real-time tanpa perlu melakukan konfirmasi manual.
            </li>
            <li>
              <strong>Siklus Tagihan:</strong> Langganan Premium bersifat bulanan (berlaku selama 30 hari sejak tanggal aktivasi). Langganan tidak diperpanjang secara otomatis secara paksa di kartu Anda. Anda harus melakukan pembayaran secara manual setiap bulannya melalui Midtrans Snap untuk memperpanjang masa aktif Premium.
            </li>
            <li>
              <strong>Pajak dan Biaya Administrasi:</strong> Harga yang tertera sudah termasuk pajak yang berlaku di wilayah Republik Indonesia. Biaya admin tambahan yang dibebankan oleh metode pembayaran pilihan Anda (jika ada) merupakan tanggung jawab pengguna.
            </li>
          </ul>

          <h3>4. Batasan Penggunaan Wajar (Fair Use Policy)</h3>
          <p>
            Demi menjaga stabilitas server dan ketersediaan layanan AI bagi seluruh pengguna, kami menerapkan batasan penggunaan wajar pada fitur-fitur bertenaga AI:
          </p>
          <ul>
            <li>
              <strong>Free Plan:</strong> Dibatasi maksimal 2 kali pemindaian makanan menggunakan AI Gemini per hari (di mana scan ke-2 menampilkan iklan 15 detik) dan 5 kali pencarian gizi teks menggunakan AI Groq per hari (di mana pencarian ke-3 dan ke-5 menampilkan iklan 15 detik).
            </li>
            <li>
              <strong>Premium Plan:</strong> Menawarkan pemindaian Gemini AI dan pencarian Groq AI tanpa batas harian. Namun, penyalahgunaan sistem seperti melakukan spamming pemanggilan API secara berulang menggunakan bot atau script otomatis akan mengakibatkan penangguhan akun secara permanen.
            </li>
          </ul>

          <h3>5. Penafian Informasi Kesehatan (Medical Disclaimer)</h3>
          <p class="warning-box">
            <strong>⚠️ PENTING:</strong> NutriTrack <strong>BUKAN</strong> merupakan penyedia layanan medis, klinik, atau ahli gizi profesional. Semua data gizi, kalori, saran diet, dan analisis makanan yang dihasilkan oleh AI Gemini, AI Groq, maupun kalkulator TDEE di dalam Aplikasi hanyalah berupa estimasi dan panduan umum untuk tujuan informasi dan edukasi mandiri. Informasi ini tidak boleh digunakan sebagai pengganti diagnosis, konsultasi, atau perawatan medis profesional oleh dokter atau ahli gizi berlisensi. Harap berkonsultasi dengan profesional medis sebelum memulai program diet ekstrim atau mengubah asupan nutrisi Anda jika Anda memiliki kondisi kesehatan tertentu.
          </p>

          <h3>6. Hak Kekayaan Intelektual</h3>
          <p>
            Semua logo, nama merek, desain antarmuka imut, ilustrasi maskot, kode sumber, animasi, dan aset visual lainnya yang terdapat di situs web dan Aplikasi NutriTrack adalah milik eksklusif tim pengembang NutriTrack dan dilindungi oleh undang-undang hak cipta dan kekayaan intelektual yang berlaku di Indonesia.
          </p>

          <h3>7. Batasan Tanggung Jawab</h3>
          <p>
            NutriTrack tidak bertanggung jawab atas kerugian, cedera, atau masalah kesehatan yang timbul akibat penggunaan atau ketidakmampuan menggunakan Aplikasi, atau karena ketergantungan pada estimasi kandungan nutrisi yang disajikan oleh sistem AI kami.
          </p>

          <h3>8. Perubahan Syarat & Ketentuan</h3>
          <p>
            Kami berhak untuk mengubah Syarat & Ketentuan ini sewaktu-waktu. Kami akan mengumumkan perubahan tersebut dengan memperbarui tanggal revisi di bagian atas halaman ini. Penggunaan berkelanjutan Anda terhadap Aplikasi setelah perubahan tersebut berlaku menunjukkan persetujuan Anda terhadap ketentuan yang diperbarui.
          </p>

          <h3>9. Kontak Informasi</h3>
          <p>
            Untuk pertanyaan atau klarifikasi lebih lanjut mengenai Syarat & Ketentuan ini, silakan hubungi kami di:
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

.warning-box {
  background-color: var(--protein-bg) !important;
  border: 1px solid var(--protein);
  border-radius: 12px;
  padding: 16px 20px !important;
  color: var(--text-main) !important;
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
