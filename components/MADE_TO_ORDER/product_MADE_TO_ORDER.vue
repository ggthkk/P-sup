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
      MADE TO ORDER
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
          v-for="(product, index) in products"
          :key="product.name"
          class="flex gap-4 p-2"
          @click="detailModal(index)"
        >
          <img
            :src="product.imageSrc"
            width="220"
            class="h-[14rem] rounded-2xl object-cover drop-shadow-md hover:ring-sky-500 ring-2 transition duration-500 ease-in-out transform cursor-pointer"
          />
        </div>
      </div>
    </n-modal>
    <n-modal
      v-model:show="showModaldetail"
      class="lg:mx-auto md:mx-auto mx-6"
      transform-origin="center"
    >
      <n-card
        title=""
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
        style="width: 1000px"
      >
        <order1 v-if="indexofDetail === 0" />
        <order2 v-if="indexofDetail === 1" />
        <order3 v-if="indexofDetail === 2" />
        <order4 v-if="indexofDetail === 3" />
        <order5 v-if="indexofDetail === 4" />
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import order1 from "./PALLETCONTAINER.vue";
import order2 from "./Steelandstainless.vue";
import order3 from "./Steel_carts.vue";
import order4 from "./ROLL_PALLET.vue";
import order5 from "./STACKING_PALLET.vue";
import { useStore } from "~/stores/theme";
const stores = useStore();

const products = [
  {
    id: 1,
    imageSrc: "/MADE_TO_ORDER/1.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 2,
    imageSrc: "/MADE_TO_ORDER/2.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 3,
    imageSrc: "/MADE_TO_ORDER/3.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 4,
    imageSrc: "/MADE_TO_ORDER/4.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  {
    id: 5,
    imageSrc: "/MADE_TO_ORDER/5.jpg",
    imageAlt: "MADE_TO_ORDER",
  },
  //  {
  //    id: 6,
  //    imageSrc: "/MADE_TO_ORDER/6.jpg",
  //    imageAlt: "MADE_TO_ORDER",
  //  },
];
const bodyStyle = {
  width: "800px",
};

const showModal = ref(false);
const showModaldetail = ref(false);

const indexofDetail = ref(0);
function detailModal(index) {
  indexofDetail.value = index;
  showModaldetail.value = true;
}
function addLineBreaks(text) {
  return text.replace(/\n/g, "<br>");
}
const modalcontent = ref({
  title: "MADE TO ORDER",
  content: `นอกจากงานชั้นวางของสำเร็จรูปแล้ว เรายังสามารถออกแบบชั้นางของ หรืออุปกรณ์อื่นๆนอกเนื่องจากสินค้าที่เรามีอยู่หน้าเว็บ เพื่อการใช้งานที่เหมาะสมกับคุณได้อีกด้วย

ไม่ว่าจะเป็น PALLET CONTAINER, ROLL PALLET, STACKING PALLET, งานกลึง ซ่อมอะไหล่เครื่องจักรทุกชนิด, รถเข็นเหล็ก และ สแตนเลส, งานเหล็ก และ สแตนเลส เป็นต้น ซึ่งทั้งหมดนี้ ต่างก็มีการรับประกันสินค้า เพื่อให้คุณมั่นใจในคุณภาพของเรา

โดยคุณเองสามารถติดต่อ เพื่อสอบถามข้อมูล หรือรวมไปถึงการให้คำปรึกษา และออกแบบฟรี โดยไม่มีค่าใช้จ่ายใดๆทั้งสิ้น และเหนื่อกว่าผู้ให็บริการที่อื่น คือ สินค้าของเรากล้ารับประกัน ด้วยระยะเวลาที่นานกว่าใคร คือสิ่งที่เรามั่นใจในคุณภาพของเรา`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
