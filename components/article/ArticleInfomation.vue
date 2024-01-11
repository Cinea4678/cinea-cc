<script setup lang="ts"></script>

<template>
  <div class="bg-white rounded-tr-[60px] rounded-br-[60px] min-h-[200px] shadow-2xl px-5 py-5">
    <div class="font-semibold text-xl">文章信息</div>
    <div>
      <ContentDoc v-slot="doc">
        {{ doc.doc.title }}
      </ContentDoc>
    </div>
  </div>
</template>

<style scoped></style>
