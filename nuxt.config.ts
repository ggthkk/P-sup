// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetUno } from "unocss";
import { presetDaisy } from "unocss-preset-daisy";
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt-3-starter",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "description", content: "Starter template for Nuxt 3." }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap",
        },
      ],
    },
  },
  modules: ["@unocss/nuxt", "@pinia/nuxt", "@bg-dev/nuxt-naiveui"],
  css: ["@unocss/reset/tailwind.css"],
  unocss: {
    presets: [presetUno(), presetDaisy()],
  },
});
