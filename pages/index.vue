<template>
  <n-card class="mx-auto bg-sky-200 p-4 rounded-[2rem] shadow-lg">
    <StarterHeading />
    <StarterBody class="py-10" />
    <StarterCounter class="pt-5 border-t divide-slate-200" />

    <div class="my-10 border-t">
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="chat-header">
          Obi-Wan Kenobi
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div
          class="chat-bubble"
          :class="stores.theme === null ? 'chat-bubble-primary' : ''"
        >
          You were the Chosen One!
        </div>
        <div class="chat-footer opacity-50">Delivered</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="chat-header">
          Anakin
          <time class="text-xs opacity-50">12:46</time>
        </div>
        <div
          class="chat-bubble"
          :class="stores.theme === null ? 'chat-bubble-primary' : ''"
        >
          I hate you!
        </div>
        <div class="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>

    <div class="my-10 border-t">
      <n-space>
        <n-button tertiary @click="changeTheme()"> Default </n-button>
      </n-space>
    </div>
  </n-card>
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
  methods: {
    changeTheme() {
      this.stores.changeTheme((this.stores.active = !this.stores.active));
    },
  },
});
</script>
