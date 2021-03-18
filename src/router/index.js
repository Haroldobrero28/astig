import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FileUpload from '../views/FileUpload.vue'
import UserInformation from '../views/UserInformation.vue'
import PasswordReset from '../views/PasswordReset.vue'
import DataEntry from '../views/DataEntry.vue'
import EditAccount from '../views/EditAccount.vue'
import SegmentR from '../views/SegmentR.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
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
    path: '/dataentry',
    name: 'DataEntry',
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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
