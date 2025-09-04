// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'static',
  },
  site: {
    url: 'https://pgestudio.com',
    name: 'PG Estudio',
    description: 'PG Estudio, especializado en reformas y diseño arquitectónico funcional y moderno.'
  },
  app: {
    baseURL: '/',
    head: {
      title: 'PG Estudio - Arquitectura y Reformas',
      titleTemplate: '%s',
      meta: [
        {
          name: 'description',
          content:
            'PG Estudio, especializado en reformas y diseño arquitectónico funcional y moderno.',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Pablo Gabaldón' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PG Estudio' },
        { property: 'og:title', content: 'PG Estudio - Arquitectura y Reformas' },
        {
          property: 'og:description',
          content:
            'Transformamos tu espacio con diseño moderno y reformas a medida, por PG Estudio.',
        },
        { property: 'og:image', content: '/og-image.png' }, // imagen representativa en /public
        { property: 'og:url', content: 'https://www.pgestudio.com' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PG Estudio - Arquitectura y Reformas' },
        {
          name: 'twitter:description',
          content: 'Reformas y proyectos de arquitectura personalizados por Pablo Gabaldón.',
        },
        { name: 'twitter:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  css: ['~/styles/tailwind.css'],
})
