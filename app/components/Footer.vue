<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Info Column -->
        <div class="footer-col brand-col">
          <div class="logo-group">
            <img src="/app_icon_no_bg.png" alt="NutriTrack Logo" class="footer-logo" />
            <span class="logo-text">NutriTrack</span>
          </div>
          <p class="brand-desc">
            Teman hidup sehatmu yang super imut & penuh nutrisi! Lacak kalori, pantau gizi harian dengan Gemini AI secara instan.
          </p>
          <div class="compliance-badge">
            <span class="badge-icon">🛡️</span>
            <span class="badge-text">Pembayaran Aman via Midtrans Sandbox</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-col">
          <h4 class="col-title">Navigasi</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/#hero">Beranda</NuxtLink></li>
            <li><NuxtLink to="/#features">Fitur Utama</NuxtLink></li>
            <li><NuxtLink to="/#pricing">Harga Plan</NuxtLink></li>
            <li><NuxtLink to="/#faq">Tanya Jawab (FAQ)</NuxtLink></li>
          </ul>
        </div>

        <!-- Compliance & Legal Links -->
        <div class="footer-col">
          <h4 class="col-title">Legalitas & Ketentuan</h4>
          <ul class="footer-links">
            <li><NuxtLink to="/privacy">Kebijakan Privasi</NuxtLink></li>
            <li><NuxtLink to="/terms">Syarat & Ketentuan</NuxtLink></li>
            <li><NuxtLink to="/refund">Kebijakan Refund</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Support -->
        <div class="footer-col contact-col">
          <h4 class="col-title">Hubungi Kami</h4>
          <p class="contact-item">
            <strong>📧 Email:</strong><br />
            <a href="mailto:nutritrack.app@gmail.com" class="contact-link">nutritrack.app@gmail.com</a>
          </p>
          <p class="contact-item">
            <strong>📍 Alamat Kantor:</strong><br />
            <span class="address-text">
              NutriTrack Studio Labs<br />
              Jl. Gizi Cantik Raya No. 42, Kel. Sehat Walafiat, Kec. Kebugaran, Jakarta Selatan, DKI Jakarta 12340, Indonesia.
            </span>
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} NutriTrack. All rights reserved.</p>
        <p class="footer-subtext">Dirancang dengan 💚 untuk pola hidup sehat yang menyenangkan.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #e8f5e9;
  border-top: 2px solid var(--border);
  padding: 60px 0 30px 0;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
  gap: 40px;
  margin-bottom: 40px;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.footer-logo {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--primary);
}

.brand-desc {
  font-size: 0.88rem;
  color: var(--text-sub);
  margin-bottom: 16px;
  max-width: 300px;
}

.compliance-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--surface);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
}

.col-title {
  font-size: 1rem;
  margin-bottom: 18px;
  color: var(--text-main);
  position: relative;
  display: inline-block;
  padding-bottom: 6px;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 3px;
  background-color: var(--primary-light);
  border-radius: 2px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.88rem;
  color: var(--text-sub);
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 4px;
}

.contact-item {
  font-size: 0.88rem;
  color: var(--text-sub);
  margin-bottom: 12px;
  line-height: 1.5;
}

.contact-link {
  color: var(--primary);
  font-weight: 700;
}

.address-text {
  display: inline-block;
  margin-top: 4px;
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px;
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-sub);
}

.footer-subtext {
  font-size: 0.75rem;
  margin-top: 4px;
  color: var(--text-sub);
  opacity: 0.8;
}
</style>
