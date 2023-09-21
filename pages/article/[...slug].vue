<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useRouter} from "nuxt/app";
import "~/assets/css/article.scss"

const router = useRouter();
</script>

<template>
    <main>
        <nav>
            <div class="back-home-btn" @click="router.back()">
                <font-awesome-icon :icon="['fas', 'angles-left']" /> Back Home
            </div>
        </nav>
        <div class="title flex">
            <h2 style="font-size: 6em;font-weight: 800;">Article</h2>
        </div>
        <x-marks-component class="marks" color="red"/>

        <div class="article-container">
            <div class="flex">
                <div class="grow"/>
                <div class="container">
                    <ContentDoc class="article"/>
                </div>
                <div class="grow"/>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.back-home-btn {
    position: absolute;
    top: 6em;
    right: 3em;

    padding: 1em 1.7em 1em 1.7em;
    border: #ca1b30 0.1em solid;
    color: #ca1b30;

    font-awesome-icon{
        color: #ca1b30;
    }

    transition-duration: 300ms;
}

.back-home-btn:hover{
    color: #fff;
    background-color: #ca1b30;
    cursor: pointer;

    font-awesome-icon{
        color: #fff;
    }

    transition-duration: 300ms;
}

.title {
    position: absolute;
    top: 4em;
    left: 3em;

    font-family: Montserrat, sans-serif;
    color: #ca1b30;
}

.marks {
    position: absolute;
    top: 6em;
    left: 28em;
}

.article-container {
    position: absolute;
    top: 18em;
    width: 100%;
}
</style>
