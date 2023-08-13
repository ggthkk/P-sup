// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetUno } from "unocss";
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt-3-starter",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "ชั้นวางของคุณภาพ ราคาถูก รับประกัน 3 ปี ที่นี้เท่านั้น",
        },
        { name: "naive-ui-style" },
        { name: "naive-ui-style" },
      ],
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
  modules: [
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@bg-dev/nuxt-naiveui",
    "nuxt-purgecss",
  ],
  //  css: ["@unocss/reset/tailwind.css"],
  unocss: {
    presets: [presetUno()],
  },
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  purgecss: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
    ],
  },
});
