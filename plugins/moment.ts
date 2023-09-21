import moment from "moment";
import "moment/dist/locale/zh-cn.js"

moment.locale("zh-cn")
console.log(moment().format('LL'))

export default defineNuxtPlugin((nuxt) => {
})
