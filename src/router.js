import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AnimeVideo from "./components/AnimeVideo.vue"
import ByLette from "./components/ByLetter.vue"
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "AnimeVideo",
      name: "AnimeVideo",
      component: AnimeVideo
    },
    {
      path: "/Letter/:letter",
      name: "ByLetter",
      component: ByLette
    },
    {
      path: "*",
      name: "NotFound",
      component: NotFound
    }
  ]
});
