// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/devtools',
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
