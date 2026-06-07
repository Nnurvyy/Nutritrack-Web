// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'NutriTrack - Teman Hidup Sehatmu yang Super Imut! 🥦✨',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'NutriTrack adalah aplikasi asisten kesehatan dan pelacak gizi harian (calorie & macro tracker) dengan antarmuka yang sangat manis (kawaii aesthetics), mikro-animasi gemas, dan AI Gemini!' },
        { name: 'keywords', content: 'nutritrack, calorie tracker, macro tracker, gizi harian, ai food scanner, gemini ai, groq ai, diet sehat, pemantauan orang tua, midtrans' },
        { name: 'author', content: 'NutriTrack Team' },
        { property: 'og:title', content: 'NutriTrack - Teman Hidup Sehatmu yang Super Imut & Penuh Gizi! 🥦✨' },
        { property: 'og:description', content: 'Lacak kalori, scan makanan dengan Gemini AI, dan jalani hidup sehat dengan cara yang menyenangkan & imut!' },
        { property: 'og:image', content: '/app_icon.png' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})

