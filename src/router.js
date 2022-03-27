import { createRouter, createWebHistory } from "vue-router";

import Home from "./routes/Home.vue";
import ContainerQueries from "./routes/ContainerQueries.vue";
import Subgrid from "./routes/Subgrid.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/container", component: ContainerQueries },
  { path: "/subgrid", component: Subgrid },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
