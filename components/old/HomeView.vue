<script setup lang="ts">
import anime from "animejs";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const xmark_go = {
    targets: ".xmarks-mainview",
    rotate: 90,
    delay: anime.stagger(100), // increase delay by 100ms for each elements.
};
const xmark_back = {
    targets: ".xmarks-mainview",
    rotate: 180,
    delay: anime.stagger(100, { direction: "reverse" }),
};

onMounted(() => {
    let tl = anime.timeline({
        loop: true,
        durantion: 1000,
    });
    tl.add(xmark_go).add(xmark_back, 1200);
});
</script>

<template>
    <div class="hv-container">
        <div class="title">
            <p class="text-6xl">Hi, I am</p>
            <h1 class="text-9xl">Zhang Yao</h1>
        </div>
        <div class="background-icons">
            <div v-for="i in 10" :key="i" class="xmarks-mainview mt-2">
                <font-awesome-icon :icon="['fas', 'xmark']" style="color: #ffffff" size="lg" />
            </div>
        </div>
        <div class="scrooldown-tip animate__animated animate__bounce animate__repeat-2 animate__delay-1s">
            <span>
                <font-awesome-icon :icon="['fas', 'angles-down']" style="color: #ffffff" size="lg" />
            </span>
            <span class="ml-2 text-white">向下滚动以继续</span>
        </div>
    </div>
</template>

<style scoped>
.hv-container {
    height: 100vh;
    width: 100vw;
    position: relative;
    background: #ca1b30;
}

.title {
    position: absolute;
    bottom: 5em;
    left: 3em;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: bold;
}

.background-icons {
    position: absolute;
    bottom: 20em;
    left: 3em;
}

.scrooldown-tip {
    position: absolute;
    bottom: 5em;
    right: 3em;
}
</style>
