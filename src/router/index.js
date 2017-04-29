import Vue from 'vue';
import Router from 'vue-router';
import Movies from '../components/Movies';
import MovieDetail from '../components/MovieDetail';
import Shows from '../components/Shows';
import ShowDetail from '../components/ShowDetail';
import Home from '../components/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: '',
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
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
