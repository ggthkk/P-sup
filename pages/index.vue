<template>
  <div class="relative isolate px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:py-20">
      <div class="text-center">
        <img class="h-56 w-auto" src="/img/logo-1.png" alt="" />
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
          SUPAMNUAYCHO
        </h1>
        <p class="mt-6 text-lg leading-8">
          ศูนย์รวมการจัดเก็บ และอุปกรณ์เคลือนย้าย ครบวงจร เช่น ชั้นวางของ
          ชั้นวางสินค้า ชั้นวางพาเลท ชั้นวางในคลังสินค้า เช่น Micro Rack ,Medium
          Rack ,Racking ,Selective Rack ,Long Span, Drive-in Rack ,Mezzanine
          Floor , Supermarket Shelf, อุปการณ์เคลื่อนย้าย เช่น รถลากยก รถเข็น
          เป็นต้น เราพร้อมให้บริการด้านออกแบบ และติดตั้ง รวมถึงการรื้อถอน
          และเคลือนย้าย ชั้นวางของทุกชนิด
          ด้วยทีมงานมืออาชีพที่มีประสบการณ์มากกว่า 10 ปี
          และบริการหลังการขายอย่างรวดเร็วทันใจ พร้อมรับประกันสินค้ามากกว่าใครถึง
          3 ปี
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Get started</a
          >
          <a href="#" class="text-sm font-semibold leading-6"
            >Learn more <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>
    <Slidepage />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "~/stores/theme";
import Slidepage from "~/components/index/Silde-showindex.vue";

export default defineComponent({
  components: {
    Slidepage,
  },
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
