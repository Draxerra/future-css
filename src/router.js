import { createRouter, createWebHistory } from "vue-router";

import Home from "./routes/Home.vue";
import ContainerQueries from "./routes/ContainerQueries.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/container-queries", component: ContainerQueries },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
