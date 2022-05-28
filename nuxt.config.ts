import { defineNuxtConfig } from 'nuxt3'
import en from './locales/en.json'
import zh from './locales/zh.json'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@intlify/nuxt3', {
      localeDir: 'lang',
      vueI18n: {
        // You can setting same `createI18n` options here !
        locale: 'en',
        messages: {
          zh,
          en
        }
      }

    }]
  ]
})
