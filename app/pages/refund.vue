<template>
  <div class="legal-page">
    <div class="container">
      <!-- Back Button -->
      <NuxtLink to="/" class="btn-back">
        ⬅️ Kembali ke Beranda
      </NuxtLink>

      <div class="kawaii-card legal-card">
        <h1 class="legal-title">Kebijakan Pengembalian Dana & Pembatalan (Refund & Cancellation Policy)</h1>
        <p class="legal-date">Terakhir diperbarui: 7 Juni 2026</p>
        
        <div class="legal-content">
          <p>
            Terima kasih telah berlangganan layanan Premium di <strong>NutriTrack</strong>. Kami ingin memastikan Anda memiliki pengalaman terbaik saat menggunakan platform pelacak gizi kami. Kebijakan ini menjelaskan ketentuan mengenai pembatalan layanan Premium Anda serta pengembalian dana (refund) atas pembayaran yang telah dilakukan melalui gerbang pembayaran <strong>Midtrans</strong>.
          </p>

          <h3>1. Pembatalan Langganan Premium</h3>
          <p>
            Anda memiliki kebebasan penuh untuk membatalkan keanggotaan Premium Anda kapan saja tanpa dikenakan biaya pembatalan atau denda.
          </p>
          <ul>
            <li>
              <strong>Cara Membatalkan:</strong> Karena sistem pembayaran Premium bulanan kami (Rp 20.000/bulan) via Midtrans <strong>tidak melakukan auto-debit otomatis secara paksa</strong> di kartu atau e-wallet Anda pada bulan berikutnya, Anda cukup membiarkan masa langganan berakhir tanpa melakukan perpanjangan manual.
            </li>
            <li>
              <strong>Akses Tetap Aktif:</strong> Setelah Anda memutuskan untuk tidak memperpanjang langganan, semua fitur Premium Anda akan tetap aktif sepenuhnya hingga akhir siklus masa aktif 30 hari yang sedang berjalan. Setelah masa aktif habis, tipe akun Anda akan secara otomatis diturunkan kembali menjadi Free Plan (Plan Dasar).
            </li>
          </ul>

          <h3>2. Kebijakan Pengembalian Dana (Refund Policy)</h3>
          <p>
            Secara umum, semua biaya langganan Premium yang dibayarkan melalui Midtrans bersifat <strong>final dan tidak dapat dikembalikan (non-refundable)</strong>. Hal ini dikarenakan akses ke seluruh fitur tanpa batas (Gemini AI Food Scanner, Groq AI Search, dan Bebas Iklan) langsung dibuka seketika setelah pembayaran Anda berhasil terverifikasi. Kami tidak memberikan pengembalian dana secara pro-rata untuk sisa hari yang tidak digunakan dalam masa langganan 30 hari.
          </p>
          
          <p class="highlight-box">
            <strong>Pengecualian Klaim Refund yang Valid:</strong><br />
            Kami hanya akan menyetujui pengembalian dana di bawah kondisi khusus berikut:
            <br /><br />
            1. **Transaksi Ganda (Double Billing):** Jika saldo rekening bank atau dompet digital Anda terpotong lebih dari satu kali untuk transaksi pemesanan Premium yang sama karena adanya gangguan teknis pada sistem pembayaran.
            <br />
            2. **Kesalahan Fatal Sistem:** Jika sistem pembayaran Midtrans menyatakan transaksi Anda sukses, namun sistem backend kami gagal mengaktifkan akun Premium Anda dalam kurun waktu 48 jam kerja setelah investigasi manual dan percobaan sinkronisasi ulang dilakukan oleh tim dukungan kami.
          </p>

          <h3>3. Tata Cara Pengajuan Klaim Refund</h3>
          <p>
            Jika Anda mengalami kondisi pengecualian di atas, Anda dapat mengajukan klaim pengembalian dana dengan mengikuti langkah-langkah berikut:
          </p>
          <ul>
            <li>Ajukan permohonan Anda dalam kurun waktu maksimal <strong>7 hari kalender</strong> terhitung sejak tanggal transaksi pembayaran bermasalah dilakukan.</li>
            <li>Kirim email resmi ke alamat bantuan pelanggan kami di <a href="mailto:nutritrack.app@gmail.com"><strong>nutritrack.app@gmail.com</strong></a>.</li>
            <li>Gunakan subjek email: <strong>[KLAIM REFUND NUTRITRACK] - (Nama Akun Anda)</strong>.</li>
            <li>
              Cantumkan informasi wajib berikut di dalam isi email:
              <ul>
                <li>Nama Lengkap Pengguna & Alamat Email Akun NutriTrack.</li>
                <li><strong>ORDER ID</strong> Transaksi (dapat dilihat pada histori pembayaran atau tanda terima email dari Midtrans).</li>
                <li>Bukti pembayaran yang sah (screenshot mutasi rekening, bukti bayar GoPay/ShopeePay, atau invoice email Midtrans).</li>
                <li>Penjelasan singkat mengenai kronologi kendala pembayaran yang dialami.</li>
              </ul>
            </li>
          </ul>

          <h3>4. Proses Investigasi & Pengembalian Dana</h3>
          <p>
            Setelah menerima email pengajuan klaim Anda:
          </p>
          <ul>
            <li>Tim dukungan kami akan melakukan peninjauan dan rekonsiliasi data transaksi bersama pihak Midtrans dalam waktu <strong>3 hingga 5 hari kerja</strong>.</li>
            <li>Kami akan mengirimkan notifikasi via email untuk memberi tahu Anda apakah permohonan refund Anda disetujui atau ditolak berdasarkan hasil investigasi data.</li>
            <li>Jika klaim disetujui, dana akan dikembalikan melalui transfer bank ke rekening asal atau dikembalikan ke saldo dompet digital Anda (sesuai metode pembayaran awal yang Anda gunakan) dalam waktu <strong>5 hingga 10 hari kerja</strong>, bergantung pada kebijakan dan waktu proses perbankan atau penyedia e-wallet yang bersangkutan.</li>
          </ul>

          <h3>5. Hubungi Tim Bantuan</h3>
          <p>
            Kami siap membantu Anda menyelesaikan segala kendala pembayaran. Jika Anda butuh informasi lebih lanjut mengenai pembatalan plan atau status transaksi Anda, silakan hubungi kami di:
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

.highlight-box {
  background-color: var(--accent-light) !important;
  border: 1px solid var(--accent);
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
