import HomePageView from "@/views/HomePageView.vue";
import SyllabusView from "@/views/SyllabusView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "HomePageView", component: HomePageView },
  { path: "/syllabus", name: "SyllabusView", component: SyllabusView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
