<script setup lang="ts">
const data = await queryContent().only(["title", "description", "_path", "image"]).find();
</script>

<template>
    <div class="content-index">
        <div class="flex">
            <div class="grow" />
            <div class="container relative">
                <div class="project-title">
                    <h2 class="text-4xl font-bold project-title-text">TOP项目</h2>
                    <div class="project-title-decorition" />
                </div>
                <div>{{ data }}</div>
            </div>
            <div class="grow" />
        </div>
    </div>
</template>

<style scoped>
.content-index {
    min-height: 100vh;
    background: rgb(226, 207, 205);
    background: linear-gradient(
        90deg,
        rgba(226, 207, 205, 1) 0%,
        rgba(255, 255, 255, 1) 51%,
        rgba(226, 207, 205, 1) 100%
    );
}

.project-title {
    position: absolute;
    top: 3em;
    left: 1em;
    z-index: 2;
}

.project-title-text {
    position: absolute;
    left: 0.2em;
    width: 9em;
    z-index: 2;
}

.project-title-decorition {
    position: absolute;
    top: 1.7em;
    width: 12em;
    height: 1em;
    background-color: #ca1b30;
    z-index: 1;
}
</style>
