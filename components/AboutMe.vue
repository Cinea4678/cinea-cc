<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
    <div class="about-me relative">
        <div class="title flex">
            <h2 style="font-size: 6em;font-weight: 800;">About Me</h2>
        </div>
        <x-marks-component/>
        <div class="scrooldown-tip">
            <span>
                <font-awesome-icon :icon="['fas', 'angles-down']" style="color: #ca1b30" size="lg" />
            </span>
            <span class="ml-2" style="color:#ca1b30;">向下滚动以继续</span>
        </div>
        <div class="photos-1">
            <div class="photo-1">
                <img class="object-cover" style="height: 100%;" src="https://blogsources-1305284863.cos.ap-nanjing.myqcloud.com/images/cinea-1.png" alt="照片">
            </div>
        </div>
        <div class="intro-1">
            <p>我叫<span class="text-2xl italic font-bold">张尧</span>，2002年8月生人，来自云南玉溪</p><br/>
            <p>本科就读于<span class="text-2xl italic font-bold">同济大学</span> 软件学院软件工程专业，方向为软件与数据工程</p><br/>
            <p>业余爱好摄影，自驾，研究前后端技术</p><br/>
            <p>在校期间自己研究制作过一个万行代码的<span class="text-xl italic font-bold">Rust操作系统</span></p><br/>
            <p>积极参与“互联网+”大赛，将所学融合应用，拥有<span class="text-xl italic font-bold">一个市赛银奖，一个校赛银奖</span> 的成绩</p><br/>
            <p>还参与中国大学生计算机设计大赛，取得<span class="text-2xl italic font-bold">全国一等奖</span></p>
        </div>
        <div class="photos-2">
            <div class="photo-2">
                <img class="object-cover" style="height: 100%;" src="https://blogsources-1305284863.cos.ap-nanjing.myqcloud.com/images/cinea-2.png" alt="照片">
            </div>
        </div>
        <div class="intro-2">
            <p>大二暑期参加学校组织的<span class="text-2xl italic font-bold">恒生电子</span> 夏令营，获得个人优秀技术称号</p><br/>
            <p>正在为本校《高级语言程序设计》课程编写<span class="text-xl italic font-bold">作业管理和课程问答论坛</span></p><br/>
        </div>
    </div>
</template>

<style scoped>
.about-me {
    height: 100vh;
}

.title {
    position: absolute;
    top: 4em;
    left: 3em;

    font-family: Montserrat, sans-serif;
    color: #ca1b30;
}

.scrooldown-tip{
    position: absolute;
    top: 6em;
    right: 2em;
}

.photos-1{
    position: absolute;
    top: 15em;
    left: 3em;
}

.photo-1{
    width: 15em;
    height: 20em;
    background-color: #ca1b30;
    padding: 0.5em;
}

.intro-1{
    position: absolute;
    top: 15em;
    left: 22em;
    color: #ca1b30;
}

.photos-2{
    position: absolute;
    top: 35em;
    right: 3em;
}

.photo-2{
    width: 15em;
    height: 20em;
    background-color: #ca1b30;
    padding: 0.5em;
}

.intro-2{
    position: absolute;
    top: 35em;
    right: 22em;
    color: #ca1b30;
    text-align: right;
}
</style>
