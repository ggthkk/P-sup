// https://nuxt.com/docs/api/configuration/nuxt-config
import { presetUno } from "unocss";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Shelfplate",
      meta: [
        {
          name: "description",
          content: "ชั้นวางของคุณภาพ ราคาถูก รับประกัน 3 ปี ที่นี้เท่านั้น",
        },
        { name: "naive-ui-style" },
        { name: "vueuc-style" },
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
  unocss: {
    uno: true,
    icons: true,
    attributify: true,

    shortcuts: [],
    rules: [],
    // presets: [presetUno()],
  },
  experimental: {
    reactivityTransform: true,
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
    ssr: {
      noExternal: [
        "moment",
        "naive-ui",
        "@juggle/resize-observer",
        "@css-render/vue3-ssr",
      ],
    },
  },
  ssr: false,
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
