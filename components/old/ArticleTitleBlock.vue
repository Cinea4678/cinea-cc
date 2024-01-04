<script setup lang="ts">
import moment from "moment";
import {useRouter} from "#imports";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

interface Article {
    title: string
    description: string
    date: Date
    "header-image": string
    _path: string
}

interface Props{
    article: Article
}

const props = defineProps<Props>()
const router = useRouter()

const jump = () => {
    router.push(props.article._path)
}
</script>

<template>
    <div class="article-block flex" @click="jump">
        <div class="w-1/2 left">
            <img class="object-cover h-full" :src="article['header-image']" :alt="article.title"/>
        </div>
        <div class="w-1/2 right flex flex-col">
            <h2 class="text-2xl font-bold">
                {{article.title}}
            </h2>
            <p class="mt-4 text-sm">{{moment(article.date).format("LL")}}</p>
            <p class="mt-4">{{article.description}}</p>
            <div class="grow"/>
            <p class="text-right underline underline-offset-4">
                <NuxtLink :to="article._path">立即查看 <font-awesome-icon :icon="['fas', 'angles-right']" style="color: #ffffff;" /></NuxtLink>
            </p>
        </div>
    </div>
</template>
<style scoped>
.article-block {
    width: 40em;
    height: 20em;
    margin: 2.5em 2em 2.5em 2em;
    background: white;
    padding: 0.4em;

    filter: drop-shadow(4px 4px rgba(0,0,0,0.4));

    transition-duration: 300ms;
}

.article-block:hover{
    transform: translateX(-0.4em) translateY(-0.4em);
    filter: drop-shadow(8px 8px rgba(0,0,0,0.4));

    cursor: pointer;
}

.left{
    padding-right: 0.4em;
    object-fit: fill;
}

.right{
    background: #b41a2a;
    padding: 0.6em;
    color: white;
}
</style>
