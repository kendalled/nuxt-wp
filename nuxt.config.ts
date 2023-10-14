// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxt/devtools',
      '@nuxtjs/tailwindcss',
      'nuxt3-vuex-module'
  ],
  runtimeConfig: {
      public: {
          wordpressUrl: 'https://lapelpinsandcoins.com/graphql'
      }
  }
})
