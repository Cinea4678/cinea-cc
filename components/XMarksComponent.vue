<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import anime from "animejs";

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
        durantion: 1500,
    });
    tl.add(xmark_go).add(xmark_back, 3400);
});
</script>

<template>
    <div class="marks flex">
        <div v-for="i in 15" :key="i" class="xmarks-mainview ml-3">
            <font-awesome-icon :icon="['fas', 'xmark']" style="color: #ca1b30" size="lg"/>
        </div>
    </div>
</template>
<style scoped>

.marks {
    position: absolute;
    top: 6em;
    left: 35em;
}

</style>
