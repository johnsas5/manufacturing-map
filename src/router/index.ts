import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ChatView from "../views/ChatView.vue";
import MapView from "../views/MapView.vue";
import HelloWorld from "../views/ChatView.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {name: "Home", path: "/", component: HelloWorld},
  {name: "Login", path: "/login", component: LoginView},
];

const appRouter = new VueRouter({ routes: routes });

export default appRouter;
