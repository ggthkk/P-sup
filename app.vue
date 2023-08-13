<template>
  <div>
    <n-config-provider :theme="stores.theme" preflight-style-disabled>
      <n-message-provider>
        <n-global-style />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "~/stores/theme";
export default defineComponent({
  setup() {
    const stores = useStore();

    return {
      stores,
    };
  },
  mounted() {
    try {
      const checkFirstTheme = localStorage.getItem("theme");
      if (checkFirstTheme === null) {
        localStorage.setItem("theme", "darkTheme");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    } catch (error) {
      console.log("localStorage is not available");
    }
  },
});
</script>
<style>
html,
div,
p,
h1,
h2,
body {
  font-family: "Kanit", sans-serif, -apple-system, blinkmacsystemfont, Segoe UI,
    roboto, Helvetica Neue, arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", Segoe UI Symbol !important;
}
#app {
  font-family: "Kanit", sans-serif;
}
</style>
