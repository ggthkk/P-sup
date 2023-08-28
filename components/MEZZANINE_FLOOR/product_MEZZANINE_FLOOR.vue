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
      MEZZANINE FLOOR
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
    imageSrc: "/MEZZANINE_FLOOR/1.jpg",
    imageAlt: "MEZZANINE_FLOOR",
  },
  {
    id: 2,
    imageSrc: "/MEZZANINE_FLOOR/2.jpg",
    imageAlt: "MEZZANINE_FLOOR",
  },
  {
    id: 3,
    imageSrc: "/MEZZANINE_FLOOR/3.jpg",
    imageAlt: "MEZZANINE_FLOOR",
  },
  {
    id: 4,
    imageSrc: "/MEZZANINE_FLOOR/4.jpg",
    imageAlt: "MEZZANINE_FLOOR",
  },
  {
    id: 5,
    imageSrc: "/MEZZANINE_FLOOR/5.jpg",
    imageAlt: "MEZZANINE_FLOOR",
  },
  {
    id: 6,
    imageSrc: "/MEZZANINE_FLOOR/6.jpg",
    imageAlt: "MEZZANINE_FLOOR",
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
    "Mezzanine Floor คือชั้นหรือชั้นลอยที่สร้างขึ้นเพื่อการจัดสรรพื้นที่จำกัด การจัดเก็บสิ่งของเพื่อให้มีประสิทธิภาพ และเกิดประสิทธิผลในทางการจัดการงานในคลังสินค้าหรือคลังวัสดุ",
  content: `การติดตั้งชั้นลอยช่วยให้ใช้พื้นที่ได้อย่างเต็มที่ โดยสามารถใช้พื้นที่ในการจัดเก็บเป็นพื้นที่ทำงานและสำนักงานได้มากถึงสองเท่าหรือสามเท่าความสูงของอาคารช่วยให้ใช้พื้นที่ได้อย่างมีประสิทธิภาพและทำกำไรได้เนื่องจากใช้เงินลงทุนน้อยกว่าต้นทุนค่าที่ดินสามารถใช้พื้นที่ทั้งหมดหรือใช้เฉพาะแนวตั้งในการติดตั้งชั้นลอยก็ได้ Mezzanine Floor เป็นชั้นเก็บสินค้าที่ช่วยเพิ่มพื้นที่ในการใช้งานให้มากขึ้น โดยการทำเป็นชั้นลอย สามารถออกแบบให้รับน้ำหนักได้ตามความต้องการ การรับน้ำหนักเริ่มตั้งแต่ 300-1000 Kgs/Sqm

ในการจัดแบ่งพื้นที่หรือเปิดพื้นที่ให้กว้างขึ้นเพิ่มประโยชน์ในการใช้สอยพื้นที่ให้ได้มากขึ้นเกือบเท่าตัว และหากคุณต้องการคำแนะนำงานโครงสร้างดังกล่าว มีความคงทนแข็งแรง สามารถรับน้ำหนัก 500 - 1000 กก./ตรม. พร้อมกับมีทีมงานให้คำปรึกษา และออกแบบได้ที่เราฟรี`,
});
</script>
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
