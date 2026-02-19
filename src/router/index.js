import { createRouter, createWebHistory } from 'vue-router'

import Count from '@/components/Count.vue';
import Calc from '@/components/Calc.vue';
import PostsList from '@/components/PostsList.vue';
import SlotsView from '@/components/SlotsView.vue';
import PostView from '@/components/PostView.vue';
import CustomInputView from '@/components/CustomInputView.vue';

const routes = [
  { path: '/', component: Count },
  { path: '/calculator', component: Calc },
  { path: '/post', component: PostView },
  { path: '/slots', component: SlotsView },
  {path:'/all-posts',component: PostsList },
  {path:'/custom-input',component: CustomInputView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

