import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:filter?",
    name: "Home",
    component: Home,
    props: true
  },
  // {
  //   path: '/cart',
  //   name: 'Cart',
  //   component: () => import( /*webpackChunkName: "Cart"*/ '../views/Cart.vue')
  // },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "new" */ "../views/New.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart")
  },
  {
    path: "/sale",
    name: "Sale",
    component: () => import(/* webpackChunkName: "sale" */ "../views/Sale.vue")
  },
  // {
  //   path: '/reviews',
  //   name: 'Reviews',
  //   component: () => import(/* webpackChunkName: "reviews" */ '../views/Reviews.vue')
  // },
  {
    path: "/detailedstrip/:id",
    name: "DetailedStrip",
    component: () =>
      import(
        /* webpackChunkName: "detailsstrip" */ "../views/DetailedStrip.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
