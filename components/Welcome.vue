<script setup lang="ts">
import ScrollDownTip from "~/components/home/ScrollDownTip.vue"
import CineaPicture from "~/components/home/CineaPicture.vue"
</script>

<template>
  <div class="relative h-[100vh] bg-white">
    <div class="absolute bottom-0 left-0">
      <img src="/img/home/D01.png" class="w-[100px] lg:w-[230px]" alt="" />
    </div>
    <div class="absolute top-0 right-0">
      <img src="/img/home/D02.png" class="w-[200px] lg:w-[450px]" alt="" />
    </div>
    <div class="absolute top-0 left-0 px-4 py-4">
      <div class="font-['DM_Sans'] w-[200px] md:w-fit lg:text-lg">WELCOME TO MY PERSONAL WEBSITE.</div>
      <div class="mt-2 w-[200px] md:w-[450px] h-[1px] border-b border-black"></div>
      <scroll-down-tip class="mt-4" />
    </div>
    <div class="absolute bottom-0 right-[calc(62vw-482px)] lg:right-[calc(43vw-412px)]">
      <cinea-picture />
    </div>
  </div>
</template>

<style scoped></style>
