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
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 4,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/4.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 5,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/5.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 6,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/6.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 7,
    imageSrc: "/MADE_TO_ORDER/STACKING_PALLET/7.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
];
const modalcontent = ref({
  title: "STACKING PALLET",
  content: `เป็นชั้นวางสินค้าที่มีความอิสระในการใช้งาน สะดวก สามารถวางต่อกันได้ตามแนวสูงในขณะใช้งาน และซ้อนเก็บเมื่อเลิกใช้งาน ทำให้ประหยัดพื้นที่ในการจัดเก็บ เพิ่มความสะดวกในการเคลื่อนย้ายและจัดเก็บสินค้า สามารถสั่งทำขนาดได้ตามต้องการ รับน้ำหนักได้ตั้งแต่ 500-2,000 Kg./Stack ซ้อนกันได้ถึง 4 - 5 ชั้น`,
});
</script>

<style lang="scss" scoped></style>
