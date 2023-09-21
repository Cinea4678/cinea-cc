<script setup lang="ts">
import ArticleTitleBlock from "~/components/ArticleTitleBlock.vue";
import {onMounted} from "#imports";

const articles = ref([])
onMounted(()=>{
    queryContent().only(['title','description','_path','date',"header-image"]).find().then((res)=>{
        articles.value = res
        console.log(res)
    })
})
</script>

<template>
    <div class="article-container relative">
        <div class="title flex">
            <h2 style="font-size: 6em;font-weight: 800;">Articles</h2>
        </div>
        <x-marks-component class="marks" color="white"/>
        <div class="flex mb-10" style="padding-top: 18em;">
            <div class="grow"/>
            <div class="container flex flex-wrap justify-center">
                <ArticleTitleBlock v-for="article in articles" :key="article.title" :article="article"/>
            </div>
            <div class="grow"/>
        </div>
    </div>
</template>

<style scoped>
.article-container{
    min-height: 100vh;
    width: 100vw;
    background: #ca1b30;
}

.title {
    position: absolute;
    top: 4em;
    left: 3em;

    font-family: Montserrat, sans-serif;
    color: white;
}

.marks{
    position: absolute;
    top: 6em;
    left: 30em;
}

</style>
