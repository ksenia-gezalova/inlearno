import Vue from 'vue'
import VueRouter from 'vue-router'

import Table from './Table';
//import Modal from './Modal';
import Map from './Map';
import NotFound from './NotFound';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',

  routes: [{
      path: '/',
      redirect: '/table'
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/map',
      component: Map
    },
    /* {
      path: '/table/:id',
      component: Modal,
      props: true
    }, */
    {
      path: '/**',
      component: NotFound
    }
  ]
})