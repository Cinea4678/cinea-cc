// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    build: {},
    css: ["@/assets/css/main.css", "animate.css/animate.min.css", "@fortawesome/fontawesome-svg-core/styles.css"],
    modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],

    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },
});
