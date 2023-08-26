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
    imageSrc: "/MADE_TO_ORDER/ROLL_PALLET/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/ROLL_PALLET/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/ROLL_PALLET/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
];
const modalcontent = ref({
  title: "ROLL PALLET",
  content: `รถเข็น Roll Pallet รถเข็นในคลังสินค้า รถเข็นในคลังอาหาร รถเข็นในสายการผลิตเครื่องดื่ม รถเข็นในคลังอาหารและยา รถเข็นทรงสูง รถเข็นในศูนย์กระจายสินค้า รับผลิตและนำเข้ารถเข็นทรงสูงในคลังสินค้า 
  รถเข็นสำหรับใส่ พาร์ท รถเข็นในศูนย์กระจายสินค้าทุกประเภท รถเข็นทรงสูงสำหรับแยกการจัดส่งสินค้าตามร้านค้า Store ต่างๆ ในคลังสินค้าและศูนย์กระจายสินค้า`,
});
</script>

<style lang="scss" scoped></style>
