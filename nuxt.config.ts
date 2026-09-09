// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    // задается в .env
    token: '', // для сервера
    public: {
      // для сервера и фронтенда
      apiurl: '',
      imageurl: '',
    },
  },
  app: {
    head: {
      title: 'Лабаз',
      titleTemplate: '%s | Шикарный',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
        },
      ],
      script: [],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons',
      },
    ],
  },
  site: {
    url: 'http://localhost:3001',
    name: 'Название сайта',
  },

  routeRules: {
    // задать приоритет и частоту конкретной странице
    '/catalog': {
      sitemap: { changefreq: 'daily', priority: 0.8 },
      robots: false,
    },

    // убрать целую ветку из sitemap
    '/account/**': { sitemap: false },

    // паттерны тоже работают
    '/blog/**': { sitemap: { changefreq: 'weekly' } },
  },
  robots: {
    disallow: ['/account'],
  },
  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: 'weekly',
    },
  },
  nitro: {
    storage: {
      db: {
        driver: 'fs-lite',
        base: './db',
      },
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
})