<script setup lang="ts">
import OtherArticleComponents from "~/components/article/OtherArticleComponents.vue"
</script>

<template>
  <div class="bg-white rounded-tr-[60px] rounded-br-[60px] min-h-[200px] shadow-2xl px-5 py-5">
    <div class="font-semibold text-xl">近期文章</div>
    <div>
      <LazyContentQuery
        :only="['title', 'description', '_path', 'date', 'headerImage']"
        sort="date"
        :limit="5"
        v-slot="data: { data: APP.Article[] }"
      >
        <OtherArticleComponents v-for="article in data.data" :key="article.title" :article="article" />
      </LazyContentQuery>
    </div>
  </div>
</template>

<style scoped></style>
