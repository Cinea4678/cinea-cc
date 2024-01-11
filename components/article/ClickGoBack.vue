<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

const router = useRouter()

const backHome = () => {
  router.push("/#articles")
}
</script>

<template>
  <div class="flex items-center hover:scale-110 hover:cursor-pointer hover:shadow-2xl duration-200" @click="backHome">
    <div class="flex items-center justify-center border border-black rounded-full bg-[#FFAE88] w-[40px] h-[40px] z-[11] pl-[5px]">
      <font-awesome-icon :icon="['fas', 'angle-left']" size="lg" />
    </div>
    <div class="flex items-center justify-center border-2 border-black rounded-full bg-white w-[150px] h-[36px] -translate-x-3 z-[10]">
      点击以返回首页
    </div>
  </div>
</template>

<style scoped></style>
