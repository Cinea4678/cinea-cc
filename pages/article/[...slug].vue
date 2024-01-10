<script lang="ts" setup>
import { useRouter } from "nuxt/app"
import "~/assets/css/article.scss"
import ClickGoBack from "~/components/article/ClickGoBack.vue"

const router = useRouter()
</script>

<template>
  <div>
    <div class="min-h-[100vh] bg-white">
      <div class="pt-[50px] pb-[20px] px-[30px] flex flex-col md:flex-row md:items-end gap-3">
        <div class="font-bold font-['DM_Sans'] text-5xl md:text-8xl">Article</div>
        <ContentDoc v-slot="doc: { doc: APP.Article }">
          <div class="pb-[12px]">
            <h1 class="text-2xl md:text-3xl">{{ doc.doc.title }}</h1>
          </div>
        </ContentDoc>
        <div class="grow" />
        <div class="hidden md:block">
          <ClickGoBack />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-5 max-w-[1300px] mx-auto">
        <div class="col-span-8 bg-white rounded-tl-[60px] rounded-br-[60px] min-h-[500px] shadow-2xl px-2 md:px-5 py-1">
          <ContentDoc class="article" />
        </div>
        <div class="col-span-4">
          <div class="bg-white rounded-tr-[60px] rounded-br-[60px] min-h-[200px] shadow-2xl px-5 pt-5">
            <div class="font-semibold text-xl">其他文章</div>
            <div>
              <LazyContentQuery
                :only="['title', 'description', '_path', 'date', 'headerImage']"
                sort="date"
                :limit="5"
                v-slot="data: { data: APP.Article[] }"
              >
                <div v-for="article in data.data">
                  {{ article.title }}
                </div>
              </LazyContentQuery>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
//.back-home-btn {
//  position: absolute;
//  top: 6em;
//  right: 3em;
//
//  padding: 1em 1.7em 1em 1.7em;
//  border: #ca1b30 0.1em solid;
//  color: #ca1b30;
//
//  font-awesome-icon {
//    color: #ca1b30;
//  }
//
//  transition-duration: 300ms;
//}
//
//.back-home-btn:hover {
//  color: #fff;
//  background-color: #ca1b30;
//  cursor: pointer;
//
//  font-awesome-icon {
//    color: #fff;
//  }
//
//  transition-duration: 300ms;
//}
//
//.title {
//  position: absolute;
//  top: 4em;
//  left: 3em;
//
//  font-family: Montserrat, sans-serif;
//  color: #ca1b30;
//}
//
//.marks {
//  position: absolute;
//  top: 6em;
//  left: 28em;
//}
//
//.article-container {
//  position: absolute;
//  top: 18em;
//  width: 100%;
//}
</style>
