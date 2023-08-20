<template>
  <div>
    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:py-20">
        <div class="text-center">
          <img
            class="lg:h-56 md:h-42 h-30 w-auto"
            src="/img/logo-1.png"
            alt=""
          />
          <h1 class="lg:text-4xl font-bold tracking-tight sm:text-6xl">
            SUPAMNUAYCHO
          </h1>
          <p class="mt-6 lg:text-lg text-base leading-8 break-keep">
            ศูนย์รวมการจัดเก็บ และอุปกรณ์เคลือนย้าย ครบวงจร เช่น
            ชั้นวางของชั้นวางสินค้า ชั้นวางพาเลท ชั้นวางในคลังสินค้า เช่น Micro
            Rack,Medium Rack ,Racking ,Selective Rack ,Long Span, Drive-in Rack
            ,Mezzanine Floor , Supermarket Shelf, อุปการณ์เคลื่อนย้าย เช่น
            รถลากยก รถเข็น เป็นต้น เราพร้อมให้บริการด้านออกแบบ และติดตั้ง
            รวมถึงการรื้อถอน และเคลือนย้าย ชั้นวางของทุกชนิด
            ด้วยทีมงานมืออาชีพที่มีประสบการณ์มากกว่า 10 ปี
            และบริการหลังการขายอย่างรวดเร็วทันใจ
            พร้อมรับประกันสินค้ามากกว่าใครถึง 3 ปี
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <n-button type="primary" @click="scrollToSection('products')"
              >Products</n-button
            >

            <n-button quaternary type="info"> Learn more </n-button>
          </div>
        </div>
      </div>
    </div>
    <Slidepage />
    <Whatus />
    <Products />
    <Process />
    <Contactus />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "@/stores/theme";
import Slidepage from "@/components/index/Silde-showindex.vue";
import Whatus from "@/components/index/Whatus.vue";
import Products from "@/components/index/Products.vue";
import Process from "@/components/index/Process.vue";
import Contactus from "@/components/index/Contactus.vue";

export default defineComponent({
  components: {
    Slidepage,
    Whatus,
    Products,
    Process,
    Contactus,
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
    scrollToSection(e) {
      if (e === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e === "products") {
        window.scrollTo({ top: 2250, behavior: "smooth" });
      }
    },
  },
});
</script>
