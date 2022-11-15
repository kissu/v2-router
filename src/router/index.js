import Vue from "vue";
import VueRouter from "vue-router";
import CustomersName from "../views/CustomersName.vue";

Vue.use(VueRouter);

const routes = [
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
