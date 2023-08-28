<template>
  <div class="py-10">
    <div class="relative isolate overflow-hidden">
      <div
        v-if="stores.theme === null"
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96 transition duration-500"
        aria-hidden="true"
      ></div>
      <div class="mx-auto px-6 py-20 lg:px-8">
        <div class="mx-auto max-w-8xl px-6 lg:px-20">
          <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="text-center">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
                ทำไมต้องเรา
              </h2>
            </div>
            <dl
              class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-3"
            >
              <div
                v-for="stat in stats"
                :key="stat.id"
                class="flex flex-col bg-gray-400/5 p-8 gap-4"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <dt class="text-sm font-semibold leading-6">
                  {{ stat.description }}
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight">
                  {{ stat.name }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/theme";
const stores = useStore();

const stats = [
  {
    id: 1,
    name: "ให้คำปรึกษาฟรี",
    description:
      "หากคุณต้องการคำปรึกษา เรามีทีมงานมืออาชีพคอยให้คำแนะนำเราพร้อมจะออกแบบชั้นวางของให้ฟรี โดยไม่มีค่าใช้จ่ายแต่อย่างไร",
  },
  {
    id: 2,
    name: "รับการทันใจ",
    description:
      "ไม่ว่าจะเกิดปัญหาอะไรหลังการติดตั้งเพียงแค่คุณโทรมา เราพร้อมบริการถึงที่",
  },
  {
    id: 3,
    name: "รับประกันสินค้าถึง 3 ปี",
    description:
      "โดยปกติการรับประกันชั้นวางของ จะรับประกันเพียง 1 ปี แต่เรากล้ารับประกันถึง 3 ปีและนี้คือจุดเด่นของเราที่ทำให้คุณมั่นใจในคุณภาพของเรา กับอายุการใช้งานที่นานกว่าใคร",
  },
];
</script>
