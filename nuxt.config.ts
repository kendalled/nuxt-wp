// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/devtools',
      '@nuxtjs/tailwindcss',
      'nuxt3-vuex-module',
      '@nuxt/image',
  ],
  runtimeConfig: {
      public: {
          wordpressUrl: 'https://lapelpinsandcoins.com/graphql'
      }
  },
  app: {
    head: {  
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
})
