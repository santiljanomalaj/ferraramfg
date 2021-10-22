import Vue from 'vue'
import { DatocmsImagePlugin } from "vue-datocms";
import VueMeta from "vue-meta";

import App from './App.vue'

import router from './router/router'

// css files and js importing
import './assets/css/foundation.css'
import './assets/css/app.css'
import $ from 'jquery'
import 'foundation-sites'
window.$ = $
window.jQuery = $
import './assets/js/vendor/what-input.js'
$(function() {
  $(document).foundation()
})
import './assets/css/site.css'

Vue.use(DatocmsImagePlugin)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')