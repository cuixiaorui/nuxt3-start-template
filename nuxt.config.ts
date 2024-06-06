// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ["~/assets/global.css"],

  typescript: {
    shim: false,
  },

  build: {
    transpile: ["trpc-nuxt"],
  },

  vite: {
    plugins: [],
  },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@formkit/auto-animate",
    "@logto/nuxt",
    "@nuxt/eslint",
  ],

  runtimeConfig: {
    logto: {
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      appSecret: process.env.NUXT_LOGTO_APP_SECRET,
      cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
    },
  },
});
