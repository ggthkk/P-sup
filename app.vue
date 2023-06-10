<template>
  <div class="grid h-screen place-items-center overflow-hidden">
    <n-config-provider :theme="stores.theme">
      <n-message-provider>
        <n-global-style />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>
<script lang="ts">
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
    if (process.client) {
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
