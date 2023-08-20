<template>
  <div
    class="rounded-lg transition duration-500 ease-in-out transform drop-shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer"
    :class="stores.theme === null ? 'bg-gray-100' : 'bg-[#242526]'"
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
        class="carousel-img rounded-xl transition duration-500 ease-in-out transform hover:scale-105"
      />
    </n-carousel>

    <div
      class="flex items-center justify-center mt-2 space-x-8 text-xl px-2 font-medium text-center transition duration-500 ease-in-out"
    >
      DRIVE-IN RACK SYSTEM
    </div>
    <div class="flex items-end p-2" aria-hidden="true">
      <div
        class="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filtertransition duration-500 ease-in-out transform hover:scale-[1.01]"
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
    imageSrc: "/DRIVEINRACKSYSTEM/1.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 2,
    imageSrc: "/DRIVEINRACKSYSTEM/2.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 3,
    imageSrc: "/DRIVEINRACKSYSTEM/3.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 4,
    imageSrc: "/DRIVEINRACKSYSTEM/4.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 5,
    imageSrc: "/DRIVEINRACKSYSTEM/5.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 6,
    imageSrc: "/DRIVEINRACKSYSTEM/6.jpg",
    imageAlt: "Drive-In Rack System",
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
  title: "ชั้นวางแบบ Drive-In / Drive Through Racking System",
  content: `เป็นชั้นวางสินค้าที่ออกแบบให้วางสินค้าติดๆ กันตามแนวลึกทำให้ประหยัดพื้นที่ได้มากถึง 50-80% เหมาะสำหรับจัดเก็บสินค้าที่เป็นประเภทเดียวกันในแต่ละช่อง 
  
  ชั้นวางแบบ Drive-In / Drive Through Racking System เป็นชั้นวางสินค้าที่ออกแบบให้วางสินค้าติดๆ กันตามแนวลึก ทำให้ประหยัดพื้นที่ได้มากถึง 50-80% เหมาะสำหรับจัดเก็บสินค้าที่เป็นประเภทเดียวกันในแต่ละช่อง 
  อย่างไรก็ตามระบบชั้นวางแบบ Drive-In ยังสามารถจัดในรูปแบบเข้าด้านหน้าและออกด้านหลังได้ โดยเว้นช่องทางเดินด้านหลังสำหรับรถยกเวลาเบิกจ่าย (ระบบ Drive-Through) ทำให้สินค้าหมุนเวียนได้ แบบ First-In First-Out 
  คือ เข้าด้านหน้า ออกด้านหลังได้อย่างมีประสิทธิภาพ 
  
  เหมาะสมกับการจัดเก็บสินค้าที่เหมือนๆกัน หรือมีรายการสินค้าที่ไม่มากนักแต่มีจำนวนมาก คือให้สินค้าที่มีชนิดเดียวกัน อยู่ในซองเดียวกันใช้งานกับสินค้าที่เก็บเป็นพาเลทเท่านั้น เหมาะสำหรับสินค้าที่ผลิตเป็นล็อต และจ่ายออกเป็นล็อตด้วยวิธีดังกล่างก็จะช่วยประหยัดพื้นที่ได้มาก`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
