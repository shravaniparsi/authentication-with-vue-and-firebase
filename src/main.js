
import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
