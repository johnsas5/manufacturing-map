import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SettingsView from "../views/SettingsView.vue";
import DowntimeEntriesView from "../views/DowntimeEntriesView.vue";
import MapView from "../views/MapView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { name: "Home", path: "/", component: MapView },
  { name: "Login", path: "/login", component: LoginView },
  { name: "Settings", path: "/settings", component: SettingsView },
  { name: "DowntimeEntries", path: "/downtimeEntries", component: DowntimeEntriesView },
];

const appRouter = new VueRouter({ routes: routes });

export default appRouter;
