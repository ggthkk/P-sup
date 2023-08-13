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
          class="h-[14rem] rounded-2xl object-cover drop-shadow-md hover:ring-sky-500 ring-2 transition duration-500 ease-in-out transform cursor-pointer"
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
    imageSrc: "/MADE_TO_ORDER/Steel_carts/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 4,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/4.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 5,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/5.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 6,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/6.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 7,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/7.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 8,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/8.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 9,
    imageSrc: "/MADE_TO_ORDER/Steel_carts/9.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
];
const modalcontent = ref({
  title: "รถเข็นเหล็ก และ สแตนเลส",
  content: `ไม่ว่าจะเป็น รถเข็นช้อปปิ้ง, รถเข็นวางตะกร้าช้อปปิ้ง,รถเข็นช้อปปิ้ง DIY, รถเข็นสำหรับขนของ เราก็สามารถผลิตให้คุณได้อย่างที่คุณต้องการ ในราคาประหยัด และคุณภาพดี พร้อมที่จะรับประกันสินค้าให้คุณเพียงโทรสั่งเรา`,
});
</script>

<style lang="scss" scoped></style>
