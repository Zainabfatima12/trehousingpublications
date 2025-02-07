import HomePageView from "@/views/HomePageView.vue";
import SyllabusView from "@/views/SyllabusView.vue";
import PYQPageView from "@/views/PYQPageView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "HomePageView", component: HomePageView },
  { path: "/syllabus", name: "SyllabusView", component: SyllabusView },
  { path: "/PYQ", name: "PYQPageView", component: PYQPageView },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
