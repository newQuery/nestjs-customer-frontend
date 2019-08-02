import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/views/VCustomerList/VCustomerList.vue';
import EditComponent from '@/components/CCustomerUpdate/CCustomerUpdate.vue';
import CreateComponent from '@/components/CCustomerCreate/CCustomerCreate.vue';

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent },
  ]
});
