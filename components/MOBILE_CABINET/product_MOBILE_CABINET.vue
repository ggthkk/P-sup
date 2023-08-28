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
      MOBILE CABINET
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
    imageSrc: "/MOBILE_CABINET/1.jpg",
    imageAlt: "MOBILE CABINET",
  },
  {
    id: 2,
    imageSrc: "/MOBILE_CABINET/2.jpg",
    imageAlt: "MOBILE CABINET",
  },
  {
    id: 3,
    imageSrc: "/MOBILE_CABINET/3.jpg",
    imageAlt: "MOBILE CABINET",
  },
  {
    id: 4,
    imageSrc: "/MOBILE_CABINET/4.jpg",
    imageAlt: "MOBILE CABINET",
  },
  {
    id: 5,
    imageSrc: "/MOBILE_CABINET/5.jpg",
    imageAlt: "MOBILE CABINET",
  },
  {
    id: 6,
    imageSrc: "/MOBILE_CABINET/6.jpg",
    imageAlt: "MOBILE CABINET",
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
    "การจัดเก็บแบบเดิมทำให้เสียพื้นที่ ไม่สามารถใช้ประโยชน์จากพื้นที่ที่มีอยู่ได้อย่างมีประสิทธิภาพ ซึ่งมีผลทำให้หน่วยงานของท่านสูญเสียโดยที่ท่านไม่รู้ตัว",
  content: `การจัดเก็บแบบเดิมทำให้เสียพื้นที่ที่เป็นช่องว่างเป็นจำนวนมากเพื่อเข้าถึงเอกสาร ถือเป็นการสูญเสียหลายๆด้าน เช่น ค่าใช้จ่ายในการก่อสร้างหรือค่าเช่าพื้นที่ รวมถึงค่าใช้จ่ายที่เกิดขึ้น ไม่ว่าจะเป็นค่าไฟ ค่าเจ้าหน้าที่ ค่าตกแต่ง อุปกรณ์ต่างๆ เป็นต้น

การจัดเก็บด้วยตู้รางเลื่อนสามารถเพิ่มพื้นที่การใช้งานได้มากขึ้น เนื่องจากเรานำตู้ที่ใช้งานขึ้นวางอยู่บนรางเลื่อนเพื่อให้สามารถวิ่งไปมาได้โดยเหลือพื้นที่ที่จะเข้าถึงเอกสารไว้เพียง 1 ช่อง จากที่เราเว้นไว้ทุกช่อง ด้วยเพียงแนวคิดนี้จะทำให้เราสามารถลดขนาดของการจัดเก็บได้ ถึง 50%

นอกจากนั้น ตู้รางเลื่อนยังสามารถเพิ่มพื้นที่การจัดเก็บของท่านได้อีกประมาณหนึ่งเท่าตัว ภายใต้พื้นที่เดิมเราสามารถนำตู้เพิ่มขึ้นได้จากของเดิมประมาณหนึ่งเท่าตัวหรือมากกว่า ทั้งนี้ ด้วยหลักการการลดช่องว่างที่ไม่ได้ใช้งานลงให้เหลือเพียงหนึ่งช่องก็จะทำให้เราสามารถจัดเก็บเพิ่มขึ้นอย่างไม่น่าเชื่อ`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
