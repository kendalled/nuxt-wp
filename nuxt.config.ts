// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
  },
  runtimeConfig: {
    public: {
      // Toggle to gradually roll out the estimator UI
      showEstimator: process.env.NUXT_PUBLIC_SHOW_ESTIMATOR ?? true
    }
  },
  modules: [
      // '@nuxt/devtools', // Disable devtools in production
      '@nuxtjs/tailwindcss',
      'nuxt3-vuex-module',
      '@nuxt/image',
      '@nuxt/content',
      'nuxt-gtag',
      ['@nuxtjs/google-fonts', {
        families: {
          Inter: '300..900'
        }
    }]
  ],
  gtag: {
    id: 'G-ST0M4S4ZHE'
  },
  routeRules: {
    '/lapel-pins': { redirect: { to: '/pins', statusCode: 301 } },
    '/pins/privacy': { redirect: { to: '/privacy', statusCode: 301 } },
    '/coins/privacy': { redirect: { to: '/privacy', statusCode: 301 } },
    '/lapelpins': { redirect: { to: '/pins', statusCode: 301 } },
    '/challenge-coins': { redirect: { to: '/coins', statusCode: 301 } },
    '/challengecoins': { redirect: { to: '/coins', statusCode: 301 } },
  },
  content: {
    // ... options
  },
  app: {
    head: {  
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
})
