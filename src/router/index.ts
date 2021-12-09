import {createRouter, createWebHashHistory} from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import Label from '../components/atoms/label/Label.vue';

const routes = [
  {
    path: '/',
    name: 'Label',
    component: Label,
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


export default router;
