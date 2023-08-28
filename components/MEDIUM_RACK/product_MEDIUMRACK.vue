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
      MEDIUM RACK
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
    imageSrc: "/MEDIUM_RACK/1.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 2,
    imageSrc: "/MEDIUM_RACK/2.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 3,
    imageSrc: "/MEDIUM_RACK/3.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 4,
    imageSrc: "/MEDIUM_RACK/4.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 5,
    imageSrc: "/MEDIUM_RACK/5.jpg",
    imageAlt: "Drive-In Rack System",
  },
  {
    id: 6,
    imageSrc: "/MEDIUM_RACK/6.jpg",
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
  title:
    "Medium Rack เป็นหนึ่งใน Selective Rack แต่ถูกออกแบบให้ใช้งานได้สินค้าหลากหลายแบบมาตรฐาน",
  content: `ประกอบด้วยโครงเหล็กฐาน 1 คู่, คานรับน้ำหนัก, สเตย์ยึดด้านหลัง และแผ่นชั้นซึ่งอาจใช้ได้ทั้งไม้อัดหรือแผ่นเหล็ก แต่ละชั้นสามารถรับน้ำหนักได้ตั้งแต่ 400 – 1,000 กก. และยังสามารถปรับระดับชั้นได้โดยไม่ต้องใช้เครื่องมือ การติดตั้งก็ง่าย โดยมีรายละเอียดดังต่อไปนี้
                
  - ขนาดมาตราฐาน กว้าง (W) 1200-2000 x ความลึก (D) 600-800 x ความสูง (H) 1500-4000 mm.
  - น้ำหนักสินค้าที่วางได้ต่อชั้น 300 - 800 kg
  - ใช้วางสินค้าอะไหล่ในสโตร์ และสามารถต่อเติมเพิ่มจำนวนชั้นได้สูงสุด 4 ชั้นโดยมีแผ่นทางเดินระหว่างชั้น`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
