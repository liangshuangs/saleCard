import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/index/views/index/index'
import newPage from '@/index/views/index/newPage'
import editPage from '@/index/views/index/edit'

Vue.use(VueRouter);
/* webpackChunkName: "home-index-component" */

const routes = [{
    path: '*',
    redirect: '/home',
},
{
    path: '/home',
    name: 'home',
    component:index
},
{
    path: '/newPage',
    name: 'newPage',
    component:newPage
},
{
  path: '/editPage',
  name: 'editPage',
  component:editPage
}

];
const router = new VueRouter({
    routes: routes
});

export default router;