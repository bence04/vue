import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: /* Home */ () => import('./views/Home.vue'),
    },
    {
      path: '/detail',
      name: 'detail/:id',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: /* Detail */ () => import('./views/Detail.vue'),
    },
  ],
});
