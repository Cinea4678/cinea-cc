<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="foot-container">
        <p class="mt-10"><img src="/img/heart.png" alt="" style="width: 1.2em; height: 1.2em; " class="mx-auto"/></p>
        <p class="font-bold mt-3">Designed and made with love by Cinea (Zhang Yao)</p>
        <p class="mt-3">本页面由我本人设计和实现，源代码：<a href="https://github.com/Cinea4678/cinea-cc" class="underline" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /> Github</a></p>
        <p class="font-bold mt-10">2023 © 张尧</p>
    </div>
</template>

<style scoped>
.foot-container{
    height: 15em;
    color: #ca1b30;
    text-align: center;
    font-family: Montserrat, sans-serif;
}
</style>
