<template>
  <div
    class="rounded-lg transition duration-500 ease-in-out transform drop-shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden"
    :class="stores.theme === null ? 'bg-white' : 'bg-[#242526]'"
    @click="showModal = true"
  >
    <n-carousel
      autoplay
      direction="vertical"
      dot-placement="right"
      mousewheel
      style="width: 100%; height: 240px"
    >
      <img
        v-for="product in products"
        :key="product.id"
        :src="product.imageSrc"
        class="carousel-img rounded-t-xl transition duration-500 ease-in-out transform hover:scale-105"
      />
    </n-carousel>

    <div
      class="flex items-center justify-center mt-2 space-x-8 text-xl px-2 font-medium text-center transition duration-500 ease-in-out"
    >
      MICRO RACK FLOOR
    </div>
    <div class="flex items-end p-2" aria-hidden="true">
      <div
        class="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filtertransition duration-500 ease-in-out transform hover:scale-105"
      >
        View Product
      </div>
    </div>
    <n-modal
      v-model:show="showModal"
      class="custom-card my-4"
      preset="card"
      :style="bodyStyle"
      size="huge"
    >
      <div class="mx-auto">
        <h2 class="text-md font-bold">{{ modalcontent.title }}</h2>
        <!-- eslint-disable vue/no-v-html -->
        <p
          class="mt-6 text-base"
          v-html="addLineBreaks(modalcontent.content)"
        ></p>
      </div>

      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center"
      >
        <div
          v-for="product in products"
          :key="product.name"
          class="flex gap-4 p-2"
        >
          <n-image
            :src="product.imageSrc"
            width="220"
            class="h-[12rem] rounded-2xl object-cover drop-shadow-md hover:ring-sky-500 ring-2 transition duration-500 ease-in-out transform"
          />
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "~/stores/theme";
const stores = useStore();

const products = [
  {
    id: 1,
    imageSrc: "/MICRO_RACK_FLOOR/1.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
  {
    id: 2,
    imageSrc: "/MICRO_RACK_FLOOR/2.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
  {
    id: 3,
    imageSrc: "/MICRO_RACK_FLOOR/3.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
  {
    id: 4,
    imageSrc: "/MICRO_RACK_FLOOR/4.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
  {
    id: 5,
    imageSrc: "/MICRO_RACK_FLOOR/5.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
  {
    id: 6,
    imageSrc: "/MICRO_RACK_FLOOR/6.jpg",
    imageAlt: "MICRO RACK FLOOR",
  },
];
const bodyStyle = {
  width: "800px",
};

const showModal = ref(false);
function addLineBreaks(text) {
  return text.replace(/\n/g, "<br>");
}
const modalcontent = ref({
  title:
    "MICRO RACK FLOOR หรือ ชั้นเก็บสินค้าที่ยกพื้นสูงขึ้นโดยสร้างเป็นโครงเหล็กเพื่อเพิ่มพื้นที่ ในการใช้งานให้มากขึ้น สามารถเพิ่มปริมาณการจัดเก็บได้มากขึ้น และเรียบร้อย ทำให้การขนถ่ายสินค้าง่ายและสะดวกมากยิ่งขึ้น",
  content: `ซึ่งบางครั้งเราอาจจะเรียกว่า Micro Rack With Mezzanine Floor สามารถขยายต่อเติมในแนวตั้งเป็น 2-3 ชั้น ซึ่งจะมีอุปกรณ์อื่นเข้ามาช่วยเสริมสร้าง อาทิเช่น แผ่นปูทางเดินชั้น2 บันไดและราวกันตก 
  
  เพื่อเพิ่มพื้นที่ใช้สอยในการจัดเก็บให้มากขึ้นกว่าเดิม 2-3 เท่าในแนวสูง สะดวกในการใช้งานเป็นอย่างมาก สามารถจัดหมวดหมู่ได้อย่างเป็นระเบียบ ตรวจนับของง่าย หยิบใช้สอยสะดวกมีสีสันสวยงาม อายุการใช้งานนาน 5-10 ปี
  ซึ่งจัดเป็น 
  
  ชั้นวางของขนาดเล็ก สามารถรับน้ำหนักได้ 100-200 กิโลกรัม/ชั้น และทำให้สามารถใช้พื้นที่ในอากาศให้เกิดประโยชน์สูงสุดโดยทำเป็นพื้นที่ทาง เดินเพื่อขึ้นไปเบิกจ่ายสินค้า`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
