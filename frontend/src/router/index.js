import HomePage from "@/components/Homepage.vue";
import { createRouter, createWebHistory } from "vue-router";



const routes = [{ path: "/", name: "Homepage", component: HomePage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
