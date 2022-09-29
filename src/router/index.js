import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsView from '../views/PostsView.vue'
import DetailsView from '../views/DetailsView.vue'
import EditView from '../views/EditView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/posts/:id/details',
    name: 'details',
    component: DetailsView
  },
  {
    path: '/posts/:id',
    name: 'edit',
    component: EditView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
