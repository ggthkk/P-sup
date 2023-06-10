import { defineStore } from "pinia";
import { darkTheme } from "naive-ui";

export const useStore = defineStore("theme", {
  state: () => {
    return {
      theme: process.client
        ? localStorage.getItem("theme") === "darkTheme"
          ? darkTheme
          : null
        : null,
      active: process.client
        ? localStorage.getItem("theme") === "darkTheme"
        : null,
      renderPage: 0,
    };
  },
  actions: {
    changeTheme(newTheme: boolean) {
      if (process.client) {
        if (newTheme === true) {
          this.theme = darkTheme;
          localStorage.setItem("theme", "darkTheme");
          this.renderPage++;
        } else if (newTheme === false) {
          this.theme = null;
          localStorage.setItem("theme", "lightTheme");
          this.renderPage++;
        }
      }
    },
  },
});
