<template>
  <div class="landing-page">
    <!-- HERO SECTION -->
    <section id="hero" class="section hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge-new animate-pulse-soft">🐾 Rilis Terbaru v1.2</div>
          <h1 class="hero-title">
            Diet Jadi Seru Bersama <span class="green-text">NutriTrack!</span> 🥦🍓
          </h1>
          <p class="hero-desc">
            Aplikasi asisten kesehatan dan pelacak gizi harian (*calorie & macro tracker*) dengan antarmuka yang sangat manis (*kawaii aesthetics*), mikro-animasi gemas, dan kecerdasan buatan (AI) Gemini yang mendeteksi gizi makananmu lewat kamera!
          </p>
          <div class="hero-actions">
            <a href="#pricing" class="btn-primary">
              👑 Upgrade Premium
            </a>
            <a href="#demo" class="btn-secondary">
              📱 Coba Simulasi App
            </a>
          </div>
          
          <!-- Chibi Mascot Card -->
          <div class="mascot-card">
            <img src="/img/mascot.png" alt="NutriTrack Mascot" class="mascot-img" />
            <div class="mascot-text">
              <strong>Hai! Aku NutriAppy! 🍏</strong>
              <p>Aku siap menemani diet sehatmu setiap hari tanpa rasa bosan. Yuk catat makananmu!</p>
            </div>
          </div>
        </div>

        <div id="demo" class="hero-mockup">
          <div class="mockup-header-text">
            <h4>Simulasi Aplikasi Langsung</h4>
            <p>Cobalah navigasi interaktif di bawah ini untuk melihat fitur aplikasi kami!</p>
          </div>
          <AppMockup />
        </div>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section id="features" class="section features-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">FITUR UNGGULAN</span>
          <h2 class="section-title">Semua yang Kamu Butuhkan untuk Hidup Sehat</h2>
          <p class="section-desc">Dengan sentuhan estetika imut dan teknologi AI terdepan untuk pelacakan nutrisi yang akurat.</p>
        </div>

        <div class="features-grid">
          <!-- Feature 1: Gemini AI Food Scanner -->
          <div class="kawaii-card feature-card">
            <div class="feature-icon bg-red">📸</div>
            <h3 class="feature-title">AI Food Scanner (Gemini)</h3>
            <p class="feature-text">
              Cukup foto piring makanmu, AI Gemini akan mendeteksi jenis makanan dan mengestimasikan kalori, karbohidrat, protein, serta lemak secara instan!
            </p>
            <div class="feature-details">
              <span class="plan-tag free">Free: 2x Scan/Hari (+Iklan)</span>
              <span class="plan-tag premium">Premium: Tanpa Batas (Bebas Iklan)</span>
            </div>
          </div>

          <!-- Feature 2: Groq AI Smart Search -->
          <div class="kawaii-card feature-card">
            <div class="feature-icon bg-blue">🔍</div>
            <h3 class="feature-title">Pencarian AI Pintar (Groq)</h3>
            <p class="feature-text">
              Tulis nama makanan khas Indonesia (contoh: "sate kambing bumbu kacang"), AI Groq akan langsung mencari dan menjabarkan rincian gizinya untukmu.
            </p>
            <div class="feature-details">
              <span class="plan-tag free">Free: 5x Cari/Hari (+Iklan)</span>
              <span class="plan-tag premium">Premium: Cari Tanpa Batas</span>
            </div>
          </div>

          <!-- Feature 3: Calorie & Macro Target Tracker -->
          <div class="kawaii-card feature-card">
            <div class="feature-icon bg-green">🔋</div>
            <h3 class="feature-title">Water Battery Tracker</h3>
            <p class="feature-text">
              Penghitungan kalori harian otomatis (TDEE) dengan visualisasi baterai air interaktif. Jika kalori harianmu berlebih, baterai air akan memicu animasi meluap!
            </p>
            <div class="feature-details">
              <span class="plan-tag universal">Tersedia untuk semua tipe akun</span>
            </div>
          </div>

          <!-- Feature 4: Parental Control -->
          <div class="kawaii-card feature-card">
            <div class="feature-icon bg-orange">👨‍👩‍👧‍👦</div>
            <h3 class="feature-title">Fitur Pemantauan Orang Tua</h3>
            <p class="feature-text">
              Hubungkan akun orang tua dan anak untuk memantau catatan makanan, grafik asupan kalori harian, serta riwayat berat badan secara real-time demi buah hati tercinta.
            </p>
            <div class="feature-details">
              <span class="plan-tag premium">Khusus Akun Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MIDTRANS PAYMENT FLOW SECTION -->
    <section class="section flow-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">KEAMANAN TRANSAKSI</span>
          <h2 class="section-title">Alur Pembayaran Aman & Instan</h2>
          <p class="section-desc">Kami bekerja sama dengan Midtrans Snap untuk menghadirkan proses checkout yang aman, cepat, dan otomatis.</p>
        </div>

        <div class="flow-steps">
          <div class="flow-step">
            <div class="step-num">1</div>
            <h4 class="step-title">Pilih Upgrade</h4>
            <p class="step-text">Masuk ke halaman profil di aplikasi NutriTrack, lalu ketuk tombol "Upgrade Premium" Rp 20.000 / bulan.</p>
          </div>
          <div class="flow-arrow">➡️</div>
          <div class="flow-step">
            <div class="step-num">2</div>
            <h4 class="step-title">Pilih Metode Pembayaran</h4>
            <p class="step-text">Browser secara otomatis akan menampilkan halaman Midtrans Snap. Pilih QRIS (GoPay/ShopeePay), Transfer Bank (VA), atau e-Wallet.</p>
          </div>
          <div class="flow-arrow">➡️</div>
          <div class="flow-step">
            <div class="step-num">3</div>
            <h4 class="step-title">Verifikasi Otomatis</h4>
            <p class="step-text">Teknologi Background Auto-Polling kami mendeteksi settlement dari sistem Midtrans secara real-time.</p>
          </div>
          <div class="flow-arrow">➡️</div>
          <div class="flow-step">
            <div class="step-num">4</div>
            <h4 class="step-title">Premium Aktif!</h4>
            <p class="step-text">Status akun langsung terubah secara instan di Firebase tanpa perlu klik konfirmasi pembayaran atau kirim bukti transfer.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING SECTION -->
    <section id="pricing" class="section pricing-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">DAFTAR HARGA</span>
          <h2 class="section-title">Pilih Plan Terbaik untuk Diet Sehatmu</h2>
          <p class="section-desc">Mulai secara gratis atau buka pengalaman penuh tanpa batas iklan dengan harga langganan terjangkau.</p>
        </div>

        <div class="pricing-grid">
          <!-- Free Plan -->
          <div class="kawaii-card pricing-card">
            <div class="card-badge bg-gray">PLAN DASAR</div>
            <h3 class="plan-name">Free Plan</h3>
            <div class="plan-price">Rp 0 <span class="period">/ selamanya</span></div>
            <p class="plan-summary">Cocok untuk pemula yang ingin mencoba pencatatan dasar gizi harian.</p>
            <ul class="plan-features">
              <li>✔️ Target Kalori & Makro Nutrisi Harian</li>
              <li>✔️ Calorie Tracker & Water Battery</li>
              <li>❌ Batasan 2x Scan Gemini AI Per Hari</li>
              <li>❌ Batasan 5x Cari Groq AI Per Hari</li>
              <li>❌ Harus Menonton Iklan 15 Detik</li>
              <li>❌ Tanpa Fitur Pemantauan Orang Tua</li>
            </ul>
            <button class="btn-secondary btn-pricing" disabled>Aktif Secara Bawaan</button>
          </div>

          <!-- Premium Plan -->
          <div class="kawaii-card pricing-card premium-card">
            <div class="card-badge bg-gold animate-pulse-soft">POPULER 👑</div>
            <h3 class="plan-name text-white">Premium Plan</h3>
            <div class="plan-price text-white">Rp 20.000 <span class="period">/ bulan</span></div>
            <p class="plan-summary text-white-mute">Akses tanpa batas dan hilangkan iklan untuk pengalaman hidup sehat maksimal!</p>
            <ul class="plan-features text-white-list">
              <li>✔️ Target Kalori & Makro Nutrisi Harian</li>
              <li>✔️ Calorie Tracker & Water Battery</li>
              <li>✔️ Scan Gemini AI TANPA BATAS Harian</li>
              <li>✔️ Cari Groq AI TANPA BATAS Harian</li>
              <li>✔️ BEBAS IKLAN 100% (No Interruptions)</li>
              <li>✔️ Akses Fitur Pemantauan Orang Tua</li>
              <li>✔️ Layanan Bantuan Prioritas</li>
            </ul>
            <a href="#demo" class="btn-primary btn-pricing gold-btn">Upgrade Sekarang</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="section faq-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">TANYA JAWAB</span>
          <h2 class="section-title">Pertanyaan yang Sering Diajukan</h2>
          <p class="section-desc">Punya pertanyaan seputar cara kerja NutriTrack? Temukan jawabannya di sini.</p>
        </div>

        <div class="faq-list">
          <div class="kawaii-card faq-item">
            <h4 class="faq-question">Bagaimana cara kerja AI Food Scanner Gemini?</h4>
            <p class="faq-answer">
              Cukup arahkan kamera handphone ke menu makanan Anda atau pilih gambar dari galeri, AI Gemini kami akan menganalisis visual makanan tersebut, memperkirakan berat porsi, lalu menyajikan estimasi kalori dan rincian gizi makro (protein, karbohidrat, lemak).
            </p>
          </div>

          <div class="kawaii-card faq-item">
            <h4 class="faq-question">Apakah metode pembayaran Midtrans ini aman?</h4>
            <p class="faq-answer">
              Sangat aman! Semua transaksi diproses secara langsung oleh Midtrans, payment gateway berlisensi Bank Indonesia yang bersertifikat standar keamanan industri global (PCI-DSS). Kami tidak menyimpan informasi detail kartu kredit atau kredensial perbankan Anda di server kami.
            </p>
          </div>

          <div class="kawaii-card faq-item">
            <h4 class="faq-question">Bagaimana jika transaksi pembayaran saya mengalami kendala?</h4>
            <p class="faq-answer">
              Jika status premium Anda tidak langsung aktif setelah membayar, Anda dapat menekan tombol "Saya Sudah Bayar" pada menu peningkatan di aplikasi. Jika masih berkendala, silakan hubungi tim bantuan pelanggan kami melalui email di <a href="mailto:nutritrack.app@gmail.com"><strong>nutritrack.app@gmail.com</strong></a> dengan menyertakan ORDER ID transaksi Anda.
            </p>
          </div>

          <div class="kawaii-card faq-item">
            <h4 class="faq-question">Apakah saya dapat membatalkan langganan kapan saja?</h4>
            <p class="faq-answer">
              Ya, Anda dapat membatalkan perpanjangan langganan kapan saja. Masa aktif premium Anda akan tetap berlaku penuh selama 30 hari sejak tanggal pembayaran terakhir, dan status akun Anda akan kembali ke Free Plan pada siklus bulan berikutnya tanpa dikenakan denda atau biaya tersembunyi.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Landing page utilizes static setup.
</script>

<style scoped>
.landing-page {
  padding-bottom: 20px;
}

/* Section styling helpers */
.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px auto;
}

.section-tag {
  display: inline-block;
  background-color: var(--primary-lighter);
  color: var(--primary);
  font-weight: 800;
  font-size: 0.8rem;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.section-title {
  font-size: 2.2rem;
  color: var(--text-main);
  margin-bottom: 12px;
}

.section-desc {
  color: var(--text-sub);
  font-size: 1.05rem;
}

/* HERO SECTION */
.hero-section {
  background: radial-gradient(circle at 10% 20%, rgba(232, 245, 233, 0.4) 0%, rgba(255, 255, 255, 0) 90%);
  padding-top: 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.badge-new {
  display: inline-block;
  background-color: var(--accent-light);
  color: var(--accent);
  border: 1.5px solid var(--accent);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 800;
  margin-bottom: 16px;
}

.hero-title {
  font-size: 3.2rem;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.green-text {
  color: var(--primary);
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--text-sub);
  margin-bottom: 28px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 36px;
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.4rem;
  }
  .hero-actions {
    flex-direction: column;
    gap: 12px;
  }
  .hero-actions .btn-primary, .hero-actions .btn-secondary {
    width: 100%;
  }
}

/* Mascot Card */
.mascot-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: white;
  border: 2px solid var(--border);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 8px 16px var(--shadow-color);
  max-width: 500px;
}

.mascot-img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
  background-color: var(--bg-light);
  border: 2px solid var(--border);
}

.mascot-text strong {
  font-family: var(--font-heading);
  color: var(--primary-dark);
  font-size: 0.95rem;
}

.mascot-text p {
  font-size: 0.8rem;
  color: var(--text-sub);
  margin-top: 2px;
  line-height: 1.4;
}

.hero-mockup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mockup-header-text {
  text-align: center;
  margin-bottom: 12px;
}

.mockup-header-text h4 {
  font-size: 1.15rem;
  color: var(--primary-dark);
}

.mockup-header-text p {
  font-size: 0.85rem;
  color: var(--text-sub);
}

/* FEATURES SECTION */
.features-section {
  background-color: var(--surface);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}

.bg-red { background-color: var(--protein-bg); border: 1.5px solid var(--protein); }
.bg-blue { background-color: var(--carbs-bg); border: 1.5px solid var(--carbs); }
.bg-green { background-color: var(--primary-lighter); border: 1.5px solid var(--border); }
.bg-orange { background-color: var(--fat-bg); border: 1.5px solid var(--fat); }

.feature-title {
  font-size: 1.25rem;
  color: var(--text-main);
}

.feature-text {
  font-size: 0.92rem;
  color: var(--text-sub);
  line-height: 1.5;
}

.feature-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 6px;
}

.plan-tag {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 12px;
}

.plan-tag.free {
  background-color: #f0f0f0;
  color: #666;
}

.plan-tag.premium {
  background-color: var(--accent-light);
  color: var(--accent);
  border: 1px solid var(--accent);
}

.plan-tag.universal {
  background-color: var(--primary-lighter);
  color: var(--primary);
  border: 1px solid var(--border);
}

/* PAYMENT FLOW SECTION */
.flow-section {
  background-color: #fafdfa;
}

.flow-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
}

.flow-step {
  flex: 1;
  background: white;
  border: 2px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 6px 12px var(--shadow-color);
  position: relative;
}

.step-num {
  width: 36px;
  height: 36px;
  background-color: var(--primary);
  color: white;
  font-weight: 900;
  font-size: 1.1rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.step-title {
  font-size: 1.1rem;
  margin-top: 8px;
  margin-bottom: 10px;
  color: var(--text-main);
}

.step-text {
  font-size: 0.85rem;
  color: var(--text-sub);
  line-height: 1.5;
}

.flow-arrow {
  font-size: 1.8rem;
  color: var(--primary-light);
}

@media (max-width: 992px) {
  .flow-steps {
    flex-direction: column;
    gap: 36px;
  }
  .flow-arrow {
    transform: rotate(90deg);
    margin: -10px 0;
  }
}

/* PRICING SECTION */
.pricing-section {
  background-color: var(--surface);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
}

.pricing-grid {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 40px;
  max-width: 850px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .pricing-grid {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
  .pricing-card {
    width: 100%;
    max-width: 400px;
  }
}

.pricing-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 28px;
  text-align: center;
  position: relative;
}

.premium-card {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  border-color: var(--primary-dark);
  box-shadow: 0 16px 36px rgba(27, 94, 32, 0.2);
}

.card-badge {
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.bg-gray {
  background-color: #f0f0f0;
  color: #666;
}

.bg-gold {
  background-color: var(--accent);
  color: white;
  border: 1px solid white;
}

.plan-name {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

.plan-price {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 16px;
}

.plan-price .period {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-sub);
}

.premium-card .plan-price .period {
  color: var(--primary-lighter);
}

.plan-summary {
  font-size: 0.88rem;
  color: var(--text-sub);
  margin-bottom: 24px;
  min-height: 48px;
}

.text-white {
  color: white;
}
.text-white-mute {
  color: var(--primary-lighter);
  opacity: 0.9;
}

.plan-features {
  list-style: none;
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 0.88rem;
}

.plan-features li {
  padding-bottom: 8px;
  border-bottom: 1px solid var(--primary-lighter);
}

.premium-card .plan-features li {
  border-bottom-color: rgba(255, 255, 255, 0.15);
}

.text-white-list {
  color: white;
}

.btn-pricing {
  width: 100%;
  margin-top: auto;
}

.gold-btn {
  background-color: var(--accent);
  border: none;
  color: white;
  box-shadow: 0 8px 20px rgba(255, 160, 0, 0.3);
}

.gold-btn:hover {
  background-color: #ffb300;
  box-shadow: 0 12px 24px rgba(255, 160, 0, 0.45);
}

/* FAQ SECTION */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  text-align: left;
}

.faq-item:hover {
  transform: scale(1.01);
}

.faq-question {
  font-size: 1.15rem;
  color: var(--primary-dark);
  margin-bottom: 8px;
}

.faq-answer {
  font-size: 0.92rem;
  color: var(--text-sub);
  line-height: 1.6;
}
</style>
