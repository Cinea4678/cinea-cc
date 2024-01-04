<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
</script>

<template>
  <div class="flex items-center">
    <div class="flex items-center justify-center border border-black rounded-full bg-[#FFAE88] w-[40px] h-[40px] z-[11]">
      <font-awesome-icon :icon="['fas', 'arrow-down']" size="lg" />
    </div>
    <div class="flex items-center justify-center border-2 border-black rounded-full bg-white w-[150px] h-[36px] -translate-x-3 z-[10]">
      向下滚动以继续
    </div>
  </div>
</template>

<style scoped></style>
