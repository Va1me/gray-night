import { createRouter, createWebHistory } from 'vue-router';
import Donate from './components/DonatesPage.vue';

const routes = [
  {
    path: '/fff',
    name: 'Donate',
    component: Donate
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;