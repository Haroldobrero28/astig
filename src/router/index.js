import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../Signin.vue'
import FileUpload from '../FileUpload.vue'
import UserInformation from '../UserInformation.vue'
import PasswordReset from '../PasswordReset.vue'
import DataEntry from '../DataEntry.vue'
import EditAccount from '../EditAccount.vue'
import SegmentR from '../SegmentR.vue'
import TryPage from '../TryPage.vue'

import Signup from '../Signup'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },

  {
    path: '/fileupload',
    name: 'FileUpload',
    component: FileUpload
  },

  {
    path: '/userinformation',
    name: 'UserInformation',
    component: UserInformation
  },

  {
    path: '/passwordreset',
    name: 'PasswordReset',
    component: PasswordReset
  },

  {
    path: '/',
    name: 'Home',
    component: DataEntry
  },

  {
    path: '/editaccount',
    name: 'EditAccount',
    component: EditAccount
  },

  {
    path: '/segmentr',
    name: 'SegmentR',
    component: SegmentR
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/trypage',
    name: 'TryPage',
    component: TryPage
  }
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
