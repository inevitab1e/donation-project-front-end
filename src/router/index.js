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
import MyInfoChildren from '../components/my_info/MyInfoChildren.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';
import ProjectDesc from '../components/project/ProjectDesc.vue';
import ProjectProgList from '../components/project/ProjectProgList.vue';
import PayView from '../views/PayView.vue';
import ChildDetailView from '../views/ChildDetailView.vue';
import ChildDesc from '../components/child/ChildDesc.vue';
import ChildProgList from '../components/child/ChildProgList.vue';

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
        children: [
          {
            path: 'detail',
            component: MyInfoDetailView
          },
          {
            path: 'projects',
            component: MyInfoProject
          },
          {
            path: 'children',
            component: MyInfoChildren
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
      {
        path: 'project_detail',
        component: ProjectDetailView,
        redirect: 'project_detail/project_desc',
        children: [
          {
            path: 'project_desc',
            component: ProjectDesc
          },
          {
            path: 'project_prog',
            component: ProjectProgList
          }
        ]
      },
      {
        path: 'child_detail',
        component: ChildDetailView,
        redirect: 'child_detail/child_desc',
        children: [
          {
            path: 'child_desc',
            component: ChildDesc
          },
          {
            path: 'child_prog',
            component: ChildProgList
          }
        ]
      }

    ]
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/sign_in',
    component: SignInView
  },
  {
    path: '/pay',
    component: PayView
  }

]

const router = new VueRouter({
  routes
})

export default router
