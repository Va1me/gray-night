import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue';
import DonatesPage from './components/DonatesPage.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/donate', component: DonatesPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;