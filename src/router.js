import { createRouter, createWebHistory } from "vue-router";

import Home from "./routes/Home.vue";
import ColorFunctions from "./routes/ColorFunctions.vue";
import ContainerQueries from "./routes/ContainerQueries.vue";
import Has from "./routes/Has.vue";
import Lab from "./routes/Lab.vue";
import Subgrid from "./routes/Subgrid.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/colors", component: ColorFunctions },
  { path: "/container", component: ContainerQueries },
  { path: "/lab", component: Lab },
  { path: "/has", component: Has },
  { path: "/subgrid", component: Subgrid },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
