import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/HelloWorld.vue"),
    },
    {
      path: "*",
      name: "Not Found",
      component: () => import("./components/NotFound.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("./components/About.vue"),
      },
  ],
});

export default router;
