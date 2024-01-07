<script setup lang="ts">
import moment from "moment"

const props = defineProps<{ article: APP.Article; index: number }>()
const odd = computed(() => props.index % 2 == 1)

const cardHead = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (odd.value) {
    cardHead.value?.classList.remove("bg-black")
    cardHead.value?.classList.add("bg-[#CA1B30]")
  }
})
</script>

<template>
  <div class="w-[600px] max-w-full border border-black rounded-tl-[50px] rounded-br-[50px] overflow-clip">
    <div ref="cardHead" class="h-[40px] md:h-[60px] bg-black text-white relative flex px-3 items-center">
      <div class="pl-3 pb-1 md:pb-2 h-full flex items-end leading-6 text-[14pt] md:text-[20pt] font-medium">{{ article.title }}</div>
      <div class="grow" />
      <div
        class="shrink-0 h-[30px] w-[30px] md:h-[40px] md:w-[40px] rounded-full border-black border bg-white text-black flex items-center justify-center text-3xl font-['DM_Sans']"
      >
        {{ index + 1 }}
      </div>
    </div>
    <div class="min-h-[120px] relative">
      <div class="absolute right-0 top-0 border-l border-b border-black p-1 font-['DM_Sans'] text-lg">
        {{ moment(article.date).format("YYYY.MM.DD") }}
      </div>
      <div class="p-3">
        <div class="flex items-end gap-2.5">
          <div class="rounded-xl border border-black overflow-clip shrink-0">
            <img :src="article.headerImage" class="w-[140px] h-[120px] md:w-[220px] md:h-[200px] object-cover" alt="" />
          </div>
          <div class="pb-[10px] md:pb-[30px] text-[14pt] md:text-[16pt] leading-6 font-light">{{ article.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
