import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '../components/common/Layout.vue'
import HomeView from '../views/HomeView.vue'
import MyInfoView from '../views/MyInfoView.vue'
import DonationProjectView from '../views/DonationProjectView.vue'
import DonationChildView from '../views/DonationChildView.vue'
import LoginView from '../views/LoginView.vue'
import SignInView from '../views/SignInView.vue'
import MyInfoDetailView from '../components/my_info/MyInfoDetail.vue'
import MyInfoProject from '../components/my_info/MyInfoProject.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: AppLayout, // 默认布局
    children: [
      {
        path: 'home',
        component: HomeView 
      },
      {
        path: 'my_info',
        redirect: 'my_info/detail',
        component: MyInfoView,
        children:[
          {
            path: 'detail',
            component: MyInfoDetailView
          },
          {
            path: 'projects',
            component: MyInfoProject
          }
        ]
      },
      {
        path: 'donation_project',
        component: DonationProjectView 
      },
      {
        path: 'donation_child',
        component: DonationChildView 
      },
    ]
  },
  {
    path:'/login',
    component: LoginView
  },
  {
    path:'/sign_in',
    component: SignInView
  }
]

const router = new VueRouter({
  routes
})

export default router
