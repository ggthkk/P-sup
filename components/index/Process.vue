<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
  >
    <div
      class="grid gap-8 row-gap-0 lg:grid-cols-3"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-duration="2500"
    >
      <div class="relative text-center">
        <div
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-32 sm:h-32 drop-shadow-md"
          :class="stores.theme === null ? 'bg-sky-600' : 'bg-gray-800'"
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/cute-clipart/64/search.png"
            alt="search"
          />
        </div>
        <h6 class="mb-2 text-2xl font-extrabold">Step 1</h6>
        <p class="max-w-md mb-2 text-lg font-bold sm:mx-auto">
          เลือกสินค้าจากหน้าเว็บ
        </p>
        <p class="max-w-md mb-3 text-sm sm:mx-auto">
          หากคุณมีความต้องการชั้นวางของ ให้คุณลองเลือกประเภทสินค้าจะหน้าเว็บไซต์
          เพื่อหาประเภทที่เหมาะสมกับการใช้งานของคุณ
        </p>
        <n-button quaternary type="info" @click="scrollToSection('products')">
          เพิ่มเติม
        </n-button>
        <div
          class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute"
        >
          <svg
            class="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
            ></line>
            <polyline
              fill="none"
              stroke-miterlimit="10"
              points="15,5 22,12 15,19 "
            ></polyline>
          </svg>
        </div>
      </div>
      <div class="relative text-center">
        <div
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-32 sm:h-32 drop-shadow-md"
          :class="stores.theme === null ? 'bg-sky-600' : 'bg-gray-800'"
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/cute-clipart/64/search.png"
            alt="search"
          />
        </div>
        <h6 class="mb-2 text-2xl font-extrabold">Step 2</h6>
        <p class="max-w-md mb-2 text-lg font-bold sm:mx-auto">
          ติดต่อเราเพื่อสอบถามข้อมูล
        </p>
        <p class="max-w-md mb-3 text-sm sm:mx-auto">
          หลังจากที่คุณได้ประเภทสินค้าที่ต้องการ ให้คุณติดต่อมาหาเรา เพื่อปรึกษา
          และออกแบบชั้นวางของที่เหมาะกับคุณ
        </p>
        <n-button quaternary type="info" @click="scrollToSection('Contact')">
          เพิ่มเติม
        </n-button>
        <div
          class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute"
        >
          <svg
            class="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <line
              fill="none"
              stroke-miterlimit="10"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
            ></line>
            <polyline
              fill="none"
              stroke-miterlimit="10"
              points="15,5 22,12 15,19 "
            ></polyline>
          </svg>
        </div>
      </div>
      <div class="relative text-center">
        <div
          class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-32 sm:h-32 drop-shadow-md"
          :class="stores.theme === null ? 'bg-sky-600' : 'bg-gray-800'"
        >
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/cute-clipart/64/search.png"
            alt="search"
          />
        </div>
        <h6 class="mb-2 text-2xl font-extrabold">Step 3</h6>
        <p class="max-w-md mb-2 text-lg font-bold sm:mx-auto">
          ชมสินค้าจริงจากโรงงาน
        </p>
        <p class="max-w-md mb-3 text-sm sm:mx-auto">
          ขั้นตอนสุดท้ายก่อนการสั่งซื้อ คือเราจะให้คุณได้ชมตัวอย่างงานจริง
          จากโรงงานของเรา เพื่อป้องกันการผิดพลาด
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "~/stores/theme";
const stores = useStore();

function scrollToSection(e) {
  if (e === "products") {
    window.scrollTo({ top: 2250, behavior: "smooth" });
  } else if (e === "Contact") {
    window.scrollTo({ top: 4200, behavior: "smooth" });
  }
}
</script>
