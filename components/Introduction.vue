<script setup lang="ts">
import IntroductionTextLeft from "~/components/introduction/IntroductionTextLeft.vue"
import AboutMeComponent from "~/components/introduction/AboutMeComponent.vue"
import IntroductionTextRight from "~/components/introduction/IntroductionTextRight.vue"
import ScrollDownTip from "~/components/welcome/ScrollDownTip.vue"
</script>

<template>
  <div class="flex min-h-[100vh] bg-white py-[50px] justify-center">
    <div class="max-w-[1560px] w-full grid grid-cols-8 lg:grid-cols-[repeat(16,minmax(0,1fr))]">
      <div
        class="relative z-[20] col-span-7 max-w-[100vw] h-[calc(100vh-100px)] py-[30px] pl-[50px] shadow-2xl rounded-tl-[100px] rounded-br-[100px] bg-white"
      >
        <introduction-text-left />
        <div class="absolute bottom-0 left-0">
          <img src="/img/home/D04.png" class="w-[260px] lg:w-[300px]" alt="" />
        </div>
      </div>
      <div class="relative z-[22] h-full w-full">
        <div class="absolute -left-[120px] bottom-[100px]">
          <about-me-component />
        </div>
      </div>
      <div
        class="relative z-[21] col-span-8 max-w-[100vw] h-[calc(100vh-100px)] py-[30px] pl-[50px] shadow-2xl rounded-tr-[100px] rounded-bl-[100px] bg-white"
      >
        <div class="absolute left-[25px] top-[25px]">
          <scroll-down-tip />
        </div>
        <div class="absolute bottom-[25px] right-[25px] text-right pl-[15px]">
          <introduction-text-right />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
