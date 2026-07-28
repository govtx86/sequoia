// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // Public keys (Exposed to BOTH server and browser)
    public: {
      apiBase: 'http://localhost:8080' // Overridden by NUXT_PUBLIC_API_BASE
    }
  }
})
