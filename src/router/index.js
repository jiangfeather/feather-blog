import Vue from 'vue'
import Router from 'vue-router'

import home from 'components/home/home'
import technology from 'components/technology/technology'
import life from 'components/life/life'
import aboutme from 'components/aboutme/aboutme'
import contact from 'components/contact/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/technology',
      name: 'technology',
      component: technology
    },
    {
      path: '/life',
      name: 'life',
      component: life
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: aboutme
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})