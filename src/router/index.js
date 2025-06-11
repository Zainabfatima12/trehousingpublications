// // 


// import HomePageView from "@/views/HomePageView.vue";
// import SyllabusView from "@/views/SyllabusView.vue";
// import PYQPageView from "@/views/PYQPageView.vue";
// import SolvedPaperView from "@/views/SolvedPaperView.vue";
// import TestSeriesView from "@/views/TestSeriesView.vue";


// import TermsAndConditions from "@/views/TermsAndConditions.vue";

// import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   { path: "/", name: "HomePageView", component: HomePageView },
//   { path: "/syllabus", name: "SyllabusView", component: SyllabusView },
//   { path: "/PYQ", name: "PYQPageView", component: PYQPageView },
//   { path: "/solvedPaper", name: "SolvedPaperView", component: SolvedPaperView },
//   { path: "/Testseries", name: "TestSeriesView", component: TestSeriesView },
  

//   { path: "/terms-and-conditions", name: "TermsAndConditions", component: TermsAndConditions },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//  scrollBehavior() {  // fix scroll 
//   return { top: 0 };
// }
// });

// export default router;

import HomePageView from "@/views/HomePageView.vue";
import SyllabusView from "@/views/SyllabusView.vue";
import PYQPageView from "@/views/PYQPageView.vue";
import SolvedPaperView from "@/views/SolvedPaperView.vue";
import TestSeriesView from "@/views/TestSeriesView.vue";
import TermsAndConditions from "@/views/TermsAndConditions.vue";

import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "HomePageView", component: HomePageView },
  { path: "/syllabus", name: "SyllabusView", component: SyllabusView },
  { path: "/PYQ", name: "PYQPageView", component: PYQPageView },
  { path: "/solvedPaper", name: "SolvedPaperView", component: SolvedPaperView },
  { path: "/Testseries", name: "TestSeriesView", component: TestSeriesView },
  { path: "/terms-and-conditions", name: "TermsAndConditions", component: TermsAndConditions },

  // ✅ Privacy Policy Route
  { path: "/privacy-policy", name: "PrivacyPolicy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
