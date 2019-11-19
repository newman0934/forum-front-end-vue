import Vue from 'vue'
import VueRouter from 'vue-router'
import notFound from "../views/notFouned.vue"
import SignIn from "../views/signIn.vue"
import SignUp from "../views/signUp.vue"
import Restaurants from "../views/Restaurants.vue"
import RestaurantsFeeds from "../views/RestaurantsFeeds.vue"
import RestaurantsTop from "../views/RestaurantsTop.vue"
import UsersTop from "../views/UsersTop.vue"
import Restaurant from "../views/Restaurant.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"root",
    redirect: "/restaurants"
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path:"/signup",
    name:"sign-up",
    component:SignUp
  },
  {
    path:"/restaurants",
    name:"restaurants",
    component:Restaurants
  },
  {
    path:"/restaurants/top",
    name:"restaurants-top",
    component:RestaurantsTop
  },
  {
    path:"/users/top",
    name:"users-top",
    component:UsersTop
  },
  {
    path:"/restaurants/feeds",
    name:"restaurants-feeds",
    component:RestaurantsFeeds
  },
  {
    path:"/restaurants/:id",
    name: "restaurant",
    component:Restaurant
  },
  {
    path:"*",
    name: "not-found",
    component: notFound
  },
  
]

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes
})

export default router
