import Vue from 'vue';
import Router from 'vue-router';
import Movies from '../containers/Movies';
import MovieDetail from '../containers/MovieDetail';
import Shows from '../containers/Shows';
import ShowDetail from '../containers/ShowDetail';
import Home from '../containers/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/movies/:source',
      name: 'MoviesSource',
      component: Movies,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/movie/:id',
      name: 'MovieDetail',
      component: MovieDetail,
    },
    {
      path: '/shows/:source',
      name: 'ShowsSource',
      component: Shows,
    },
    {
      path: '/shows',
      name: 'Shows',
      component: Shows,
    },
    {
      path: '/show/:id',
      name: 'ShowDetail',
      component: ShowDetail,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'root',
      component: Home,
    },
  ],
});
