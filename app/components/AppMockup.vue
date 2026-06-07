<template>
  <div class="mockup-container">
    <!-- Screen Selector Tabs -->
    <div class="screen-selector">
      <button 
        v-for="screen in screens" 
        :key="screen.id" 
        class="selector-btn"
        :class="{ active: activeScreen === screen.id }"
        @click="activeScreen = screen.id"
      >
        <span class="btn-icon">{{ screen.icon }}</span>
        <span class="btn-text">{{ screen.name }}</span>
      </button>
    </div>

    <!-- The Phone Frame -->
    <div class="phone-frame">
      <div class="phone-notch"></div>
      <div class="phone-screen">
        <!-- Status Bar -->
        <div class="status-bar">
          <span class="time">09:41</span>
          <div class="status-icons">
            <span>📶</span>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>

        <!-- App Screen Content -->
        <div class="screen-content">
          <!-- SCREEN 1: DASHBOARD -->
          <div v-if="activeScreen === 'dashboard'" class="app-screen dashboard-screen">
            <!-- Header -->
            <div class="app-header">
              <div class="user-info">
                <div class="avatar">🐱</div>
                <div>
                  <h5 class="user-name">Halo, Kak Hilmi!</h5>
                  <span class="plan-badge" :class="isPremium ? 'premium' : 'free'">
                    {{ isPremium ? '👑 PREMIUM' : '🐱 FREE PLAN' }}
                  </span>
                </div>
              </div>
              <button class="notif-btn">🔔</button>
            </div>

            <!-- Scrollable Content -->
            <div class="scroll-area">
              <!-- Calorie Battery Target Indicator -->
              <div class="target-card">
                <h6 class="card-title">Target Kalori Harian</h6>
                <div class="battery-section">
                  <!-- The Water Battery SVG/CSS -->
                  <div class="water-battery" :class="{ overflowing: caloriePercent > 100 }">
                    <div class="battery-cap"></div>
                    <div class="battery-body">
                      <div class="water-fill" :style="{ height: Math.min(caloriePercent, 100) + '%' }">
                        <div class="wave"></div>
                      </div>
                      <div class="battery-info">
                        <span class="battery-number">{{ caloriesConsumed }}</span>
                        <span class="battery-label">/ {{ calorieTarget }} Kcal</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Calorie Adjuster (Interactive Slider) -->
                <div class="adjuster-section">
                  <label for="calorie-input" class="adjust-label">Simulasikan Input Makanan:</label>
                  <input 
                    type="range" 
                    id="calorie-input"
                    v-model.number="caloriesConsumed" 
                    min="0" 
                    :max="calorieTarget * 1.3" 
                    class="calorie-slider"
                  />
                  <div class="slider-info">
                    <span v-if="caloriePercent > 100" class="warning-text">⚠️ Kalori berlebih! Baterai meluap!</span>
                    <span v-else class="normal-text">Geser slider untuk menambah porsi makanan</span>
                  </div>
                </div>
              </div>

              <!-- Macros Row -->
              <div class="macros-grid">
                <div class="macro-box protein">
                  <div class="macro-head">
                    <span>Protein</span>
                    <span class="macro-val">45/70g</span>
                  </div>
                  <div class="macro-bar"><div class="bar-fill" style="width: 64%"></div></div>
                </div>
                <div class="macro-box carbs">
                  <div class="macro-head">
                    <span>Karbo</span>
                    <span class="macro-val">120/250g</span>
                  </div>
                  <div class="macro-bar"><div class="bar-fill" style="width: 48%"></div></div>
                </div>
                <div class="macro-box fat">
                  <div class="macro-head">
                    <span>Lemak</span>
                    <span class="macro-val">52/65g</span>
                  </div>
                  <div class="macro-bar"><div class="bar-fill" style="width: 80%"></div></div>
                </div>
              </div>

              <!-- Water Tracker Widget -->
              <div class="widget-row">
                <div class="kawaii-widget-card water-widget">
                  <div class="widget-icon">💧</div>
                  <div class="widget-data">
                    <span class="widget-title">Minum Air</span>
                    <span class="widget-val">1200 / 2000 ml</span>
                  </div>
                  <button class="add-btn" @click="playSplash">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- SCREEN 2: GEMINI SCANNER -->
          <div v-if="activeScreen === 'scanner'" class="app-screen scanner-screen">
            <div class="scanner-container">
              <!-- Food Image Area -->
              <div class="food-photo-area">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80" alt="Nasi Goreng Telur" class="food-img" />
                <div v-if="isScanning" class="scan-bar"></div>
                <div v-if="isScanning" class="scan-overlay">Memindai dengan Gemini AI...</div>
              </div>

              <!-- Scan Control Button -->
              <div class="scan-action-row">
                <button class="btn-scan" @click="startScanning" :disabled="isScanning">
                  📸 {{ isScanning ? 'Menganalisis...' : 'Ambil Foto & Scan' }}
                </button>
              </div>

              <!-- Scan Results -->
              <div class="scan-results-card" :class="{ show: showScanResults }">
                <div class="result-header">
                  <span class="sparkle">✨</span>
                  <span class="result-title">Gemini AI Food Scanner</span>
                  <span class="sparkle">✨</span>
                </div>
                <div class="result-body">
                  <h6 class="detected-food">Salad Salmon Panggang Segar</h6>
                  <p class="confidence-text">Tingkat keyakinan: 98%</p>
                  
                  <div class="result-macros">
                    <div class="res-macro">
                      <span class="res-num red-t">450</span>
                      <span class="res-lbl">Kcal</span>
                    </div>
                    <div class="res-macro">
                      <span class="res-num red-t">32g</span>
                      <span class="res-lbl">Protein</span>
                    </div>
                    <div class="res-macro">
                      <span class="res-num blue-t">18g</span>
                      <span class="res-lbl">Karbo</span>
                    </div>
                    <div class="res-macro">
                      <span class="res-num orange-t">26g</span>
                      <span class="res-lbl">Lemak</span>
                    </div>
                  </div>
                  <p class="ai-feedback">
                    "Pilihan menu yang sangat sehat! Tinggi asam lemak Omega-3 dan protein berkualitas tinggi untuk pertumbuhan otot dan kebugaran tubuhmu. 🥗🐟"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- SCREEN 3: MIDTRANS SNAP UPGRADE -->
          <div v-if="activeScreen === 'payment'" class="app-screen payment-screen">
            <div class="upgrade-container">
              <div class="upgrade-header">
                <div class="crown-icon">👑</div>
                <h4>Upgrade Premium</h4>
                <p>Hilangkan semua batasan scan Gemini & pencarian Groq AI harian!</p>
              </div>

              <div class="price-box">
                <span class="price-strike">Rp 50.000</span>
                <span class="price-active">Rp 20.000 <span class="period">/ bulan</span></span>
              </div>

              <ul class="benefit-list">
                <li>✨ Scan Makanan Gemini Tanpa Batas</li>
                <li>✨ Pencarian AI Groq Tanpa Batas</li>
                <li>✨ Bebas Iklan Selamanya (No Ads)</li>
                <li>✨ Akses Fitur Pemantauan Orang Tua</li>
              </ul>

              <button class="btn-upgrade-now" @click="openMidtransSnap" :disabled="showMidtransPopup">
                🚀 Upgrade via Midtrans
              </button>

              <!-- Simulated Midtrans Snap Popup -->
              <div v-if="showMidtransPopup" class="midtrans-snap-overlay">
                <div class="midtrans-snap-modal animate-bounce-in">
                  <div class="midtrans-header">
                    <div class="mt-logo">
                      <span class="mt-m">midtrans</span>
                      <span class="mt-snap">SNAP</span>
                    </div>
                    <button class="mt-close" @click="closeMidtransSnap">×</button>
                  </div>
                  
                  <div class="mt-body" v-if="!paymentCompleted">
                    <div class="mt-order-info">
                      <div>
                        <span class="mt-order-lbl">ORDER ID</span>
                        <h6 class="mt-order-val">prem_hilmi_1780805613</h6>
                      </div>
                      <div class="text-right">
                        <span class="mt-order-lbl">TOTAL BAYAR</span>
                        <h6 class="mt-price">Rp 20.000</h6>
                      </div>
                    </div>
                    
                    <span class="mt-section-title">Pilih Metode Pembayaran</span>
                    
                    <!-- Payment Methods List -->
                    <div class="mt-methods">
                      <div class="mt-method-item" @click="selectPaymentMethod('gopay')" :class="{ selected: selectedMethod === 'gopay' }">
                        <span class="method-icon">📱</span>
                        <span class="method-name">GoPay / ShopeePay (QRIS)</span>
                      </div>
                      <div class="mt-method-item" @click="selectPaymentMethod('va')" :class="{ selected: selectedMethod === 'va' }">
                        <span class="method-icon">🏦</span>
                        <span class="method-name">Virtual Account (Mandiri/BCA)</span>
                      </div>
                    </div>

                    <!-- Selected Method Detail (Simulated Bank VA) -->
                    <div v-if="selectedMethod === 'va'" class="va-details">
                      <p class="va-instruction">Silakan transfer ke rekening Virtual Account berikut:</p>
                      <div class="va-number-box">
                        <span class="va-num">8830 0812 3456 7890</span>
                        <span class="va-copy">Salin</span>
                      </div>
                      <p class="va-note">Akun premium akan terdeteksi aktif otomatis dalam 5 detik setelah simulasi pembayaran berhasil.</p>
                    </div>

                    <!-- Action Button -->
                    <button 
                      class="btn-pay-confirm" 
                      @click="simulatePaymentSuccess"
                      :disabled="!selectedMethod"
                    >
                      💳 {{ selectedMethod ? 'Simulasikan Sukses Bayar' : 'Pilih Metode Pembayaran' }}
                    </button>
                  </div>

                  <!-- Success Screen inside Midtrans -->
                  <div class="mt-success-screen" v-else>
                    <div class="success-tick">✔️</div>
                    <h5>Pembayaran Berhasil!</h5>
                    <p class="mt-success-desc">Terima kasih, pembayaran untuk pesanan prem_hilmi_1780805613 telah kami terima.</p>
                    <button class="btn-mt-done" @click="finalizePremium">Kembali ke Aplikasi</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Bar of App -->
        <div class="app-nav">
          <button class="nav-item" :class="{ active: activeScreen === 'dashboard' }" @click="activeScreen = 'dashboard'">
            <span class="nav-icon">📊</span>
            <span class="nav-lbl">Gizi</span>
          </button>
          <button class="nav-item" :class="{ active: activeScreen === 'scanner' }" @click="activeScreen = 'scanner'">
            <span class="nav-icon">📸</span>
            <span class="nav-lbl">Scan</span>
          </button>
          <button class="nav-item" :class="{ active: activeScreen === 'payment' }" @click="activeScreen = 'payment'">
            <span class="nav-icon">👑</span>
            <span class="nav-lbl">Premium</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const screens = [
  { id: 'dashboard', name: 'Dashboard', icon: '📊' },
  { id: 'scanner', name: 'Gemini Scan', icon: '📸' },
  { id: 'payment', name: 'Midtrans Snap', icon: '💳' }
]

const activeScreen = ref('dashboard')
const isPremium = ref(false)

// Calorie Simulator
const caloriesConsumed = ref(1450)
const calorieTarget = 2000
const caloriePercent = computed(() => {
  return (caloriesConsumed.value / calorieTarget) * 100
})

// Scanning Simulator
const isScanning = ref(false)
const showScanResults = ref(false)

const startScanning = () => {
  isScanning.value = true
  showScanResults.value = false
  
  setTimeout(() => {
    isScanning.value = false
    showScanResults.value = true
  }, 2500)
}

// Payment Simulator
const showMidtransPopup = ref(false)
const selectedMethod = ref(null)
const paymentCompleted = ref(false)

const openMidtransSnap = () => {
  showMidtransPopup.value = true
}

const closeMidtransSnap = () => {
  showMidtransPopup.value = false
  selectedMethod.value = null
  paymentCompleted.value = false
}

const selectPaymentMethod = (method) => {
  selectedMethod.value = method
}

const simulatePaymentSuccess = () => {
  paymentCompleted.value = true
}

const finalizePremium = () => {
  isPremium.value = true
  showMidtransPopup.value = false
  paymentCompleted.value = false
  selectedMethod.value = null
  // Automatically switch to dashboard to see the premium badge shine!
  activeScreen.value = 'dashboard'
}

// Extra interactivity helper
const playSplash = () => {
  alert('Gelas air ditambahkan! 🥤')
}
</script>

<style scoped>
.mockup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 380px;
}

/* Screen Selector Tabs */
.screen-selector {
  display: flex;
  background-color: var(--primary-lighter);
  border: 2px solid var(--border);
  padding: 6px;
  border-radius: 20px;
  width: 100%;
  justify-content: space-between;
}

.selector-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 8px 4px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-sub);
}

.selector-btn.active {
  background-color: var(--surface);
  color: var(--primary);
  box-shadow: 0 4px 12px var(--shadow-color);
  font-weight: 700;
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-text {
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 2px;
}

/* Phone Frame */
.phone-frame {
  position: relative;
  width: 320px;
  height: 640px;
  background-color: #1e1e1e;
  border: 10px solid #2e2e2e;
  border-radius: 40px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15), 0 0 0 4px #444;
  overflow: hidden;
}

.phone-notch {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 130px;
  height: 20px;
  background-color: #2e2e2e;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 99;
}

.phone-screen {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f4f6f0;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  overflow: hidden;
}

/* Status Bar */
.status-bar {
  height: 32px;
  padding: 8px 24px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #555;
  background-color: transparent;
  z-index: 10;
}

.status-icons {
  display: flex;
  gap: 4px;
  font-size: 0.7rem;
}

/* Screen Content Area */
.screen-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.app-screen {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  box-sizing: border-box;
}

.scroll-area {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 20px;
}

.scroll-area::-webkit-scrollbar {
  width: 4px;
}
.scroll-area::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 10px;
}

/* Header */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-top: 4px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar {
  width: 38px;
  height: 38px;
  background-color: #fff;
  border: 1.5px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.user-name {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--text-main);
}

.plan-badge {
  font-size: 0.6rem;
  font-weight: 900;
  padding: 1px 6px;
  border-radius: 20px;
  display: inline-block;
}

.plan-badge.free {
  background-color: var(--carbs-bg);
  color: var(--carbs);
}

.plan-badge.premium {
  background-color: var(--accent-light);
  color: var(--accent);
  border: 1px solid var(--accent);
  box-shadow: 0 0 6px rgba(255,160,0,0.3);
}

.notif-btn {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Dashboard Widgets */
.target-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 20px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(46,125,50,0.03);
}

.card-title {
  font-size: 0.75rem;
  color: var(--text-sub);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.battery-section {
  display: flex;
  justify-content: center;
  padding: 8px 0;
}

/* Cute Water Battery */
.water-battery {
  position: relative;
  width: 80px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.battery-cap {
  width: 24px;
  height: 8px;
  background-color: var(--primary);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 2px solid var(--primary-dark);
}

.battery-body {
  width: 100%;
  flex: 1;
  background-color: #fafbfc;
  border: 3px solid var(--primary-dark);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
}

.water-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, var(--primary-light) 0%, var(--primary) 100%);
  border-top: 1px solid rgba(255,255,255,0.3);
  transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

/* Wave Effect */
.wave {
  position: absolute;
  top: -8px;
  left: 0;
  width: 200%;
  height: 16px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 40%;
  animation: wave-animation 4s linear infinite;
  transform: translate3d(0, 0, 0);
}

.water-battery.overflowing .battery-body {
  border-color: var(--protein);
  background-color: #fff5f5;
}

.water-battery.overflowing .water-fill {
  background: linear-gradient(180deg, var(--protein) 0%, #d32f2f 100%);
}

.battery-info {
  position: relative;
  z-index: 5;
  text-align: center;
  color: var(--text-main);
  text-shadow: 0 1px 2px rgba(255,255,255,0.8);
}

.battery-number {
  display: block;
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1.1;
}

.battery-label {
  font-size: 0.6rem;
  font-weight: 700;
  opacity: 0.7;
}

/* Interactive Adjuster Slider */
.adjuster-section {
  margin-top: 12px;
  border-top: 1px solid var(--primary-lighter);
  padding-top: 10px;
}

.adjust-label {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--text-sub);
  display: block;
  margin-bottom: 4px;
}

.calorie-slider {
  width: 100%;
  accent-color: var(--primary);
  cursor: pointer;
}

.slider-info {
  font-size: 0.6rem;
  margin-top: 4px;
  text-align: center;
  font-weight: 600;
}

.warning-text {
  color: var(--protein);
}
.normal-text {
  color: var(--text-sub);
}

/* Macros Grid */
.macros-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 12px;
}

.macro-box {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 14px;
  padding: 8px;
}

.macro-head {
  display: flex;
  flex-direction: column;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-sub);
}

.macro-val {
  font-size: 0.72rem;
  font-weight: 900;
  color: var(--text-main);
  margin-top: 2px;
}

.macro-bar {
  height: 5px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-top: 6px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 10px;
}

.protein .bar-fill { background-color: var(--protein); }
.carbs .bar-fill { background-color: var(--carbs); }
.fat .bar-fill { background-color: var(--fat); }

/* Water widget card */
.kawaii-widget-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.widget-icon {
  font-size: 1.2rem;
}

.widget-data {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.widget-title {
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--text-sub);
}

.widget-val {
  font-size: 0.75rem;
  font-weight: 900;
  color: var(--text-main);
}

.add-btn {
  background-color: var(--water-bg);
  border: 1px solid var(--water);
  color: var(--water);
  font-weight: 900;
  font-size: 1.1rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* SCREEN 2: SCANNER SCREEN */
.scanner-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
}

.food-photo-area {
  position: relative;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid var(--border);
}

.food-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scan-bar {
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  background-color: var(--primary-light);
  box-shadow: 0 0 8px var(--primary-light);
  animation: scan-line 2s ease-in-out infinite;
}

.scan-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  padding: 4px 0;
}

.scan-action-row {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.btn-scan {
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
  box-shadow: 0 4px 8px var(--shadow-hover);
}

.btn-scan:disabled {
  background-color: var(--text-sub);
  cursor: not-allowed;
}

.scan-results-card {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 12px;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.scan-results-card.show {
  opacity: 1;
  transform: translateY(0);
}

.result-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid var(--primary-lighter);
  padding-bottom: 6px;
  margin-bottom: 8px;
}

.sparkle {
  font-size: 0.75rem;
}

.result-title {
  font-size: 0.65rem;
  font-weight: 900;
  color: var(--primary-dark);
  text-transform: uppercase;
}

.detected-food {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--text-main);
  text-align: center;
}

.confidence-text {
  font-size: 0.6rem;
  color: var(--text-sub);
  text-align: center;
  margin-bottom: 8px;
}

.result-macros {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.res-macro {
  background-color: var(--bg-light);
  border-radius: 8px;
  padding: 4px;
  text-align: center;
  border: 1px solid var(--border);
}

.res-num {
  display: block;
  font-size: 0.75rem;
  font-weight: 900;
}

.res-lbl {
  font-size: 0.55rem;
  color: var(--text-sub);
  font-weight: 600;
}

.red-t { color: var(--protein); }
.blue-t { color: var(--carbs); }
.orange-t { color: var(--fat); }

.ai-feedback {
  font-size: 0.65rem;
  color: var(--text-sub);
  font-style: italic;
  line-height: 1.4;
  border-top: 1px dashed var(--border);
  padding-top: 6px;
}

/* SCREEN 3: UPGRADE PREMIUM SCREEN */
.upgrade-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 10px;
}

.upgrade-header {
  text-align: center;
  margin-top: 10px;
}

.crown-icon {
  font-size: 2.2rem;
  animation: float 2.5s ease-in-out infinite;
}

.upgrade-header h4 {
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--primary-dark);
  margin-top: 4px;
}

.upgrade-header p {
  font-size: 0.65rem;
  color: var(--text-sub);
  max-width: 200px;
  margin: 2px auto 0 auto;
}

.price-box {
  background-color: var(--accent-light);
  border: 1.5px solid var(--accent);
  padding: 8px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}

.price-strike {
  text-decoration: line-through;
  color: var(--text-sub);
  font-size: 0.72rem;
}

.price-active {
  color: var(--primary-dark);
  font-size: 1.05rem;
  font-weight: 900;
}

.period {
  font-size: 0.6rem;
  font-weight: 600;
}

.benefit-list {
  list-style: none;
  font-size: 0.7rem;
  color: var(--text-main);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.btn-upgrade-now {
  width: 100%;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.8rem;
  cursor: pointer;
  box-shadow: 0 4px 12px var(--shadow-hover);
  transition: all 0.2s ease;
}

.btn-upgrade-now:hover {
  transform: translateY(-2px);
}

/* Simulated Midtrans Snap Overlay */
.midtrans-snap-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  z-index: 100;
}

.midtrans-snap-modal {
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 14px;
  box-shadow: 0 -8px 24px rgba(0,0,0,0.15);
  text-align: left;
}

.midtrans-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2.5px solid #005691;
  padding-bottom: 8px;
}

.mt-logo {
  font-weight: 900;
  font-size: 0.95rem;
  display: flex;
  gap: 2px;
}

.mt-m {
  color: #1e2d42;
}

.mt-snap {
  color: #005691;
}

.mt-close {
  background: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  color: #888;
  cursor: pointer;
}

.mt-order-info {
  display: flex;
  justify-content: space-between;
  background-color: #f8fafe;
  padding: 8px 12px;
  border-radius: 10px;
  margin: 10px 0;
  border: 1px solid #dce5f5;
}

.mt-order-lbl {
  font-size: 0.5rem;
  font-weight: 700;
  color: #888;
  display: block;
}

.mt-order-val {
  font-size: 0.65rem;
  font-weight: 800;
  color: #1e2d42;
  margin-top: 1px;
}

.mt-price {
  font-size: 0.85rem;
  font-weight: 900;
  color: #005691;
  margin-top: 1px;
}

.mt-section-title {
  font-size: 0.65rem;
  font-weight: 800;
  color: #1e2d42;
  margin: 8px 0 6px 0;
  display: block;
}

.mt-methods {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mt-method-item {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1.5px solid #e2e8f0;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mt-method-item:hover {
  background-color: #f7fafc;
}

.mt-method-item.selected {
  border-color: #005691;
  background-color: #f0f7ff;
}

.method-icon {
  font-size: 1rem;
}

.method-name {
  font-size: 0.68rem;
  font-weight: 700;
  color: #1e2d42;
}

/* Virtual account simulation details */
.va-details {
  background-color: #fff9db;
  border: 1px solid #ffe066;
  border-radius: 8px;
  padding: 8px;
  margin-top: 8px;
  font-size: 0.6rem;
}

.va-instruction {
  font-weight: 700;
  color: #666;
}

.va-number-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #ffe066;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 900;
  font-size: 0.75rem;
  color: #111;
  margin: 4px 0;
}

.va-copy {
  color: #005691;
  font-size: 0.55rem;
  cursor: pointer;
  text-transform: uppercase;
}

.va-note {
  color: #888;
  font-style: italic;
  line-height: 1.3;
}

.btn-pay-confirm {
  width: 100%;
  background-color: #005691;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 0.72rem;
  cursor: pointer;
  margin-top: 10px;
}

.btn-pay-confirm:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
}

/* Midtrans Success Screen */
.mt-success-screen {
  padding: 20px 10px;
  text-align: center;
}

.success-tick {
  width: 46px;
  height: 46px;
  background-color: #c6f6d5;
  color: #2f855a;
  font-size: 1.5rem;
  font-weight: 900;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  border: 2px solid #38a169;
}

.mt-success-screen h5 {
  font-size: 0.95rem;
  font-weight: 900;
  color: #2f855a;
  margin-bottom: 4px;
}

.mt-success-desc {
  font-size: 0.65rem;
  color: var(--text-sub);
  line-height: 1.4;
  margin-bottom: 16px;
}

.btn-mt-done {
  background-color: #2f855a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 0.7rem;
  cursor: pointer;
}

/* App Bottom Navigation Bar */
.app-nav {
  height: 52px;
  background-color: white;
  border-top: 1.5px solid var(--border);
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  padding-bottom: 4px;
}

.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: var(--text-sub);
  padding: 4px;
  transition: all 0.2s ease;
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 1.1rem;
}

.nav-lbl {
  font-size: 0.58rem;
  font-weight: 700;
  margin-top: 1px;
}

/* Animations */
.animate-bounce-in {
  animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes bounce-in {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.text-right {
  text-align: right;
}
</style>
