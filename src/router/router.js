import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home'
import History from '../components/history'
import Labs from '../components/labs'
import Contact from '../components/contact'
import Values from '../components/values'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/history', component: History },
    { path: '/labs', component: Labs },
    { path: '/contact', component: Contact },
    { path: '/values', component: Values },
  ],
  scrollBehavior() {
    window.scrollTo(0, 0);
  }
})