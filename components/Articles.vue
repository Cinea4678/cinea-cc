<script setup lang="ts">
import ClickTip from "~/components/article-list/ClickTip.vue"
import ArticleComponent from "~/components/article-list/ArticleComponent.vue"

const articles = ref<APP.Article[]>([
  {
    headerImage: "https://blogsources-1305284863.file.myqcloud.com/images/IMG_9924.PNG",
    _path: "",
    date: new Date(),
    description: "自主实现了一个基于 Rust 语言的多任务操作系统",
    title: "基于 Rust 语言的多任务操作系统",
  },
  {
    headerImage: "https://blogsources-1305284863.file.myqcloud.com/images/IMG_9924.PNG",
    _path: "",
    date: new Date(),
    description: "自主实现了一个基于 Rust 语言的多任务操作系统",
    title: "基于 Rust 语言的多任务操作系统",
  },
  {
    headerImage: "https://blogsources-1305284863.file.myqcloud.com/images/IMG_9924.PNG",
    _path: "",
    date: new Date(),
    description: "自主实现了一个基于 Rust 语言的多任务操作系统",
    title: "基于 Rust 语言的多任务操作系统",
  },
  {
    headerImage: "https://blogsources-1305284863.file.myqcloud.com/images/IMG_9924.PNG",
    _path: "",
    date: new Date(),
    description: "自主实现了一个基于 Rust 语言的多任务操作系统",
    title: "基于 Rust 语言的多任务操作系统",
  },
])
</script>

<template>
  <div class="min-h-[100vh] bg-white">
    <div class="pt-[50px] pl-[30px] flex flex-col md:flex-row md:items-end gap-3">
      <div class="font-bold font-['DM_Sans'] text-7xl md:text-9xl">Articles</div>
      <click-tip class="pb-[20px]" />
    </div>
    <div class="pt-[50px] px-2 md:pl-[30px] flex flex-col gap-[10px] max-w-[1200px]">
      <div v-for="(article, i) in articles" :key="i" :class="i % 2 == 1 ? 'flex flex-row-reverse' : 'flex flex-row'">
        <article-component class="hover:scale-105 hover:shadow-2xl hover:cursor-pointer duration-200" :article="article" :index="i" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
