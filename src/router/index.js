import Vue from 'vue';
import Router from 'vue-router';
import Movies from '../components/Movies';
import Shows from '../components/Shows';
import Home from '../components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Shows,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
