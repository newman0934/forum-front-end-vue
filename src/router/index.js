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
import UserEdit from "../views/UserEdit.vue"
import AdminCategories from "../views/AdminCategories.vue"
import AdminUsers from "../views/AdminUsers.vue"
import store from '../store/index'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}


const routes = [
  {
    path:"/",
    name:"root",
    redirect: "/signin"
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
    path:"/users/:id/edit",
    name:"user-edit",
    component:UserEdit
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: AdminRestaurants,
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: AdminRestaurantNew,
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: AdminRestaurant,
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: AdminRestaurantEdit,
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: AdminCategories,
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users/',
    name: 'admin-users',
    component: AdminUsers,
    beforeEnter: authorizeIsAdmin
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

router.beforeEach(async (to, from, next) => {

  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 如果有 token 的話才驗證
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }
// 對於不需要驗證 token 的頁面
  const pathWithoutAuthentication = ["sign-up"]
  if(pathWithoutAuthentication.includes(to.name)){
    next()
    return
  }

  // 如果 token 無效則轉址到登入頁
  if(!isAuthenticated && to.name !== "sign-in"){
    next("/signin")
    return 
  }
  // 如果 token 有效則轉址到餐聽首頁
  if(isAuthenticated && to.name === "sign-in"){
    next("/restaurants")
    return 
  }

  next()
})

export default router
