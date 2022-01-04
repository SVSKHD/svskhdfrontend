import { createRouter, createWebHistory } from "vue-router";

// Auth
import Signup from "../views/auth/Signup.vue";
import Signin from "../views/auth/Signin.vue";
// pages
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue"
import About from "../views/About.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
