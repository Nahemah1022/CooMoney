import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueCookies from 'vue-cookies';
import { FontAwesomeIcon } from '@/assets/js/fontawesome.js';
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCookies);
Vue.$cookies.config('30s');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (Vue.$cookies.get('token')) {
  router.replace('/Home');
} else {
  router.replace('/');
}