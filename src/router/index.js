import Vue from 'vue';
import Router from 'vue-router';
import Movies from '../views/Movies';
import MovieDetail from '../views/MovieDetail';
import Shows from '../views/Shows';
import ShowDetail from '../views/ShowDetail';
import Search from '../views/Search';
import Home from '../views/Home';

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
      path: '/search/',
      name: 'Search',
      component: Search,
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
