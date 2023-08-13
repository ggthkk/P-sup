<template>
  <div class="mx-auto">
    <h2 class="text-md font-bold">{{ modalcontent.title }}</h2>
    <!-- eslint-disable vue/no-v-html -->
    <p class="mt-6 text-base" v-html="addLineBreaks(modalcontent.content)"></p>
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-items-center"
    >
      <div
        v-for="product in products"
        :key="product.name"
        class="flex gap-4 p-2"
      >
        <n-image
          :src="product.imageSrc"
          width="220"
          class="h-[12rem] rounded-2xl object-cover drop-shadow-md hover:ring-sky-500 ring-2 transition duration-500 ease-in-out transform cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

function addLineBreaks(text) {
  return text.replace(/\n/g, "<br>");
}
const products = [
  {
    id: 1,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 4,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/4.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 5,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/5.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 6,
    imageSrc: "/MADE_TO_ORDER/PALLETCONTAINER/6.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
];
const modalcontent = ref({
  title: "PALLET CONTAINER",
  content: `มีทนทานรับน้ำหนักได้ 1000 Kg สามารถเรียงตัววางพับกันได้สูงถึง 3 ชั้น ใช้งานได้เอนกประสงค์ตามความต้องการที่หลากหลายอุณหภูมิที่ -30 ไปถึง 40 องศา สะดวกรวดเร็วในเคลื่อนย้ายสินค้า จากที่หนึ่ง ไปอีก ที่หนึ่ง ได้อย่างรวดเร็ว 
  
  สะดวกในการปรับปรุงเปลี่ยนแปลงพื้นที่การใช้งาน เหมาะสมกับงานคลัง สินค้าที่ใช้พื้นที่อันจำกัด มีหลายขนาดให้เลือกใช้ สนใจโทรมาหาเราได้ที่ 02-919-9549`,
});
</script>

<style lang="scss" scoped></style>
