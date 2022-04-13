import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginView from "../components/LoginView.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
];

const router = new VueRouter({ routes: routes });

export default router;
