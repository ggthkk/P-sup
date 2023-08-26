<template>
  <div class="py-10">
    <div class="mx-4">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2500"
        class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3"
      >
        <ProductDriveInRackSystem />
        <productMEDIUMRACK />
        <productMEZZANINEFLOOR />
        <productMICRORACK />
        <productMICRORACKFLOOR />
        <productMOBILECABINET />
        <productSELECTIVERACKSYSTEM />
        <productMADETOORDER />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductDriveInRackSystem from "@/components/DRIVEINRACKSYSTEM/product_DRIVEINRACKSYSTEM.vue";
import productMEDIUMRACK from "@/components/MEDIUM_RACK/product_MEDIUMRACK.vue";
import productMEZZANINEFLOOR from "@/components/MEZZANINE_FLOOR/product_MEZZANINE_FLOOR.vue";
import productMICRORACK from "@/components/MICRO_RACK/product_MICRO_RACK.vue";
import productMICRORACKFLOOR from "@/components/MICRO_RACK_FLOOR/product_MICRO_RACK_FLOOR.vue";
import productMOBILECABINET from "@/components/MOBILE_CABINET/product_MOBILE_CABINET.vue";
import productSELECTIVERACKSYSTEM from "@/components/SELECTIVE_RACKSYSTEM/product_SELECTIVE_RACKSYSTEM.vue";
import productMADETOORDER from "@/components/MADE_TO_ORDER/product_MADE_TO_ORDER.vue";
</script>
