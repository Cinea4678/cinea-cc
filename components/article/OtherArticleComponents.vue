<script lang="ts" setup>
import moment from "moment"

const props = defineProps<{
  article: APP.Article
}>()

const router = useRouter()

const goto = () => {
  router.push(props.article._path)
}
</script>

<template>
  <div class="my-3 p-2 -ml-2 rounded-lg hover:bg-black/10 hover:cursor-pointer" @click="goto">
    <div class="flex gap-4">
      <img :src="article.headerImage" alt="" class="w-[90px] h-[90px] object-cover rounded-lg shadow-lg" />
      <div>
        <div class="mt-4 font-bold">{{ article.title }}</div>
        <div>{{ moment(article.date).format("LL") }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
