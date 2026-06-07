<template>
  <div class="app-layout">
    <Navbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding-top: 90px; /* Offset to clear the floating navbar */
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 80px;
  }
}
</style>
