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
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 4,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/4.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 5,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/5.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 6,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/6.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 7,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/7.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 8,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/8.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 9,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/9.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 10,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/10.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 11,
    imageSrc: "/MADE_TO_ORDER/Steelandstainless/11.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
];
const modalcontent = ref({
  title: "งานเหล็ก และ สแตนเลส",
  content: `งานเหล็ก และ สแตนเลส รับทำประตูสแตนเลส รับทำราวบันไดสแตนเลส รับทำโครงโพลีสแตนเลส รับทำราวกันตกสแตนเลส รับทำรั้วสแตนเลส ขายส่งออกแบบงานสแตนเลสทุกชนิด 

  ราคากันเองและเชื่อถือได้ บริการดีเยี่ยมและเป็นกันเอง มีบุคลากรที่เชี่ยวชาญในการจัดทำเกี่ยวกับสแตนเลสทุกชนิด 
งานเชื่อมเหล็ก เชื่อมอาร์กอน งานเชื่อมสแตนเลส เชื่อมอลูมิเนียม งานโลหะแผ่น ตู้สแตนเลส เฟอร์นิเจอร์สแตนเลสตามแบบ ถังขยะสแตนเลส 
โต๊ะสแตนเลส เตาสแตนเลส ตู้สแตนเลส ซิ้งค์สแตนเลส ประตูสแตนเลส หลังคาสแตนเลส โครงหลังคาสแตนเลส หน้าต่างสแตนเลส ขายตู้เชื่อม 
ขายอุปกรณ์สแตนเลสทุกชนิด`,
});
</script>

<style lang="scss" scoped></style>
