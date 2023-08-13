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
      SELECTIVE RACK SYSTEM
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
            class="h-[14rem] rounded-2xl object-cover drop-shadow-md hover:ring-sky-500 ring-2 transition duration-500 ease-in-out transform"
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
    imageSrc: "/SELECTIVE_RACKSYSTEM/1.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
  },
  {
    id: 2,
    imageSrc: "/SELECTIVE_RACKSYSTEM/2.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
  },
  {
    id: 3,
    imageSrc: "/SELECTIVE_RACKSYSTEM/3.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
  },
  {
    id: 4,
    imageSrc: "/SELECTIVE_RACKSYSTEM/4.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
  },
  {
    id: 5,
    imageSrc: "/SELECTIVE_RACKSYSTEM/5.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
  },
  {
    id: 6,
    imageSrc: "/SELECTIVE_RACKSYSTEM/6.jpg",
    imageAlt: "SELECTIVE_RACKSYSTEM",
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
    "SELECTIVE RACK SYSTEM หรือที่เรารู้จักในภาษาทั่วไปคือ ชั้นวางสินค้าในคลังสินค้า/โกดัง โดย Selective rack เป็นชั้นวางที่เหมาะกับคลังสินค้าหรือร้านซุปเปอร์มาเก็ตที่ต้องการเก็บสินค้าและวัตถุดิบจำนวนมาก ที่มีความหลากหลายของสินค้า ตามประโยชน์ใช้สอยดังต่อไปนี้",
  content: `- รถลากสินค้าสามารถเข้าถึงตัวชั้นสินค้าได้ในระดับสูงสุด
- ด้วยความทันสมัยของพาเลทจะสามารถบรรทุกเคลื่อนย้ายได้จากที่หนึ่งไปอีกที่หนึ่งได้
- ง่ายต่อการจัดการสต็อกสินค้าเพราะพาเลทอยู่ในตำแหน่งที่เป็นระเบียบ
- มีความสมบูรณ์แบบของการบรรทุกสินค้าทั้งน้ำหนักสินค้าและความจุสินค้า

Selective Rack System เป็นชั้นจัดเก็บสินค้าที่ออกแบบให้เหมาะสมกับการเก็บสินค้าที่มีขนาดใหญ่และมีน้ำหนักมาก เกินกว่ากำลังของคนที่จะยกได้ จึงต้องใช้รถยก ลักษณะเด่นของ Selective Rack คือมีความแข็งแรงทนทาน สามารถรับน้ำหนักได้ 500-4000 กก./ระดับชั้น`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
