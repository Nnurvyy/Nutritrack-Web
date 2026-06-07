<template>
  <header class="navbar-wrapper">
    <div class="container">
      <nav class="navbar">
        <!-- Logo -->
        <NuxtLink to="/" class="logo-group">
          <img src="/app_icon_no_bg.png" alt="NutriTrack Logo" class="logo-img" />
          <span class="logo-text">NutriTrack</span>
        </NuxtLink>

        <!-- Desktop Links -->
        <ul class="nav-links" :class="{ 'nav-links-mobile-open': isMenuOpen }">
          <li><NuxtLink to="/#hero" @click="closeMenu" class="nav-link">Beranda</NuxtLink></li>
          <li><NuxtLink to="/#features" @click="closeMenu" class="nav-link">Fitur</NuxtLink></li>
          <li><NuxtLink to="/#pricing" @click="closeMenu" class="nav-link">Harga</NuxtLink></li>
          <li><NuxtLink to="/#faq" @click="closeMenu" class="nav-link">FAQ</NuxtLink></li>
          <li class="mobile-cta">
            <NuxtLink to="/#pricing" @click="closeMenu" class="btn-primary btn-sm">Download App</NuxtLink>
          </li>
        </ul>

        <!-- Right Side / CTA Button -->
        <div class="navbar-cta">
          <NuxtLink to="/#pricing" class="btn-primary">Download App</NuxtLink>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :class="{ 'menu-toggle-active': isMenuOpen }">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 16px;
  pointer-events: none; /* Let clicks pass through empty spaces around the navbar */
}

.navbar-wrapper .container {
  pointer-events: auto; /* Re-enable clicks on the navbar box */
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid var(--border);
  padding: 12px 24px;
  border-radius: 40px;
  box-shadow: 0 10px 30px rgba(46, 125, 50, 0.08);
  transition: all 0.3s ease;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-img {
  width: 38px;
  height: 38px;
  object-fit: contain;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.logo-group:hover .logo-img {
  transform: rotate(15deg) scale(1.1);
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 28px;
  align-items: center;
  margin: 0;
}

.nav-link {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-sub);
  position: relative;
  padding: 6px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--primary-light);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-cta .btn-primary {
  padding: 8px 20px;
  font-size: 0.9rem;
}

.mobile-cta {
  display: none;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.menu-toggle .bar {
  height: 3px;
  width: 100%;
  background-color: var(--primary);
  border-radius: 10px;
  transition: all 0.3s ease;
}

/* Mobile responsive styles */
@media (max-width: 768px) {
  .navbar {
    border-radius: 24px;
    padding: 10px 16px;
  }

  .logo-text {
    font-size: 1.2rem;
  }

  .navbar-cta {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  /* Hamburger transform when open */
  .menu-toggle-active .bar:nth-child(1) {
    transform: translateY(7.5px) rotate(45deg);
  }
  .menu-toggle-active .bar:nth-child(2) {
    opacity: 0;
  }
  .menu-toggle-active .bar:nth-child(3) {
    transform: translateY(-7.5px) rotate(-45deg);
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 12px;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 2px solid var(--border);
    border-radius: 20px;
    padding: 24px;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 10px 30px rgba(46, 125, 50, 0.12);
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .nav-links-mobile-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .mobile-cta {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 8px;
  }

  .mobile-cta .btn-primary {
    width: 100%;
    padding: 10px;
  }
}
</style>
