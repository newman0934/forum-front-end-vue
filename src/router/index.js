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
import RestaurantDashboard from "../views/RestaurantDashboard.vue"
import User from "../views/User.vue"
import AdminRestaurants from "../views/AdminRestaurants.vue"
import AdminRestaurant from "../views/AdminRestaurant.vue"
import AdminRestaurantNew from "../views/AdminRestaurantNew.vue"
import AdminRestaurantEdit from "../views/AdminRestaurantEdit.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    name:"root",
    redirect: "/restaurants"
  },
  {
    path:"/admin",
    exact:true,
    redirect:"/admin/restaurants"
  },
  {
    path:"/admin/restaurants",
    name:"admin-restaurants",
    component:AdminRestaurants
  },
  {
    path:"/admin/restaurants/new",
    name:"admin-restaurant-new",
    component:AdminRestaurantNew
  },
  {
    path:"/admin/restaurants/:id",
    name:"admin-restaurant",
    component:AdminRestaurant
  },
  {
    path:"/admin/restaurants/:id/edit",
    name:"admin-restaurant-edit",
    component:AdminRestaurantEdit
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
    path:"/restaurants/:id/dashboard",
    name: "restaurant-dashboard",
    component: RestaurantDashboard
  },
  {
    path:"/users/:id",
    name:"user",
    component:User
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
