<template>
  <footer
    data-aos="fade-up"
    data-aos-anchor-placement="bottom-center"
    data-aos-duration="2500"
  >
    <n-divider />
    <div class="lg:mx-20 px-6 lg:px-8">
      <div class="border-t lg:flex lg:items-center lg:justify-between">
        <div>
          <h3 class="text-base font-semibold leading-5">สำนักงาน</h3>
          <p class="mt-1 text-sm leading-5">
            17 ซอยเสรีไทย 46 แยก 10 แขวงคันนายาว เขตคันนายาว กรุงเทพฯ 10230
          </p>
          <h3 class="text-base font-semibold leading-5 mt-10">ข้อมูลติดต่อ</h3>
          <p class="mt-1 text-sm leading-5">โทร : 02-919-9549</p>
          <p class="mt-1 text-sm leading-5">แฟกซ์ : 02-919-9549</p>
          <p class="mt-1 text-sm leading-5">มือถือ : 089-661-8488</p>
          <p class="mt-1 text-sm leading-5">Email : sales_pk@shelfplate.com</p>
          <p class="mt-1 text-sm leading-5">Email : sales_pk@hotmail.co.th</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d287.99637513741266!2d100.69022723098446!3d13.79081179400705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d63ebd473f2d7%3A0xe82a76b49063c21e!2zMTcgU2VyaSBUaGFpIDQ2IEFsbGV5LCBMYW5lIDEwLCDguITguLHguJnguJnguLLguKLguLLguKcgS2hldCBLaGFuIE5hIFlhbywgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDIzMA!5e0!3m2!1sen!2sth!4v1692523594427!5m2!1sen!2sth"
          class="lg:w-8/12 lg:h-96 w-full h-64"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        class="mt-8 border-t pt-4 mb-10 md:flex md:items-center md:justify-between"
      >
        <div class="flex space-x-4 md:order-2">
          <a
            href="https://www.facebook.com/sukrit.www.shelfplate.om"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Facebook</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <n-popover style="padding: 0" trigger="click">
            <template #trigger>
              <img
                class="h-6 w-6 grayscale-100 hover:grayscale-0 cursor-pointer"
                src="https://img.icons8.com/color/48/line-me.png"
                alt="line-me"
              />
            </template>
            <img
              class="h-40 w-40 cursor-pointer"
              src="/img/line.jpg"
              alt="line-me"
            />
          </n-popover>
        </div>
        <p class="mt-8 text-xs leading-5 md:order-1 md:mt-0">
          &copy; 2023 Shelfplate, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { useStore } from "~/stores/theme";
const stores = useStore();

function scrollToSection(e) {
  if (e === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (e === "products") {
    window.scrollTo({ top: 2250, behavior: "smooth" });
  } else if (e === "Infomation") {
    window.scrollTo({ top: 1450, behavior: "smooth" });
  }
}
</script>
