import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import NotebookList from '@/components/NotebookList'
import NotebookDetail from '@/components/NoteDetail'
import TrashDetail from '@/components/TrashDetail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login/:user',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login/:user',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login/:user',
      name: 'Login',
      component: Login,
    },
    {
      path: '/login/:user',
      name: 'Login',
      component: Login,
    },
  ]
})
