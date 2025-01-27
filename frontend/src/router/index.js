import HomePageView from "@/views/HomePageView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", name: "HomePageView", component: HomePageView }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
