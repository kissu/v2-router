import Vue from "vue";
import VueRouter from "vue-router";
import CustomersName from "../views/CustomersName.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/customers/:name",
    name: "customers-name",
    component: CustomersName,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
