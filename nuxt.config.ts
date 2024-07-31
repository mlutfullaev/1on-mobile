// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import PrimeTheme from 'assets/primeTheme';

export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/_variables.scss" as *;',
        },
      },
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@primevue/nuxt-module', '@nuxt/eslint'],

  primevue: {
    importTheme: { from: '~/assets/primeTheme.ts' },
    options: {
    },
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        jsx: true,
      },
    },
  },
});
