import Vue from 'vue'
import Router from 'vue-router'
import Listen from '@/components/Listen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listen',
      component: Listen
    }
  ]
})
