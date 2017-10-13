import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';

//routers
import Routes from './routers';

//vuex
import {store} from './store/store';

//rem
import './lib/rem';

//use package
Vue.use(VueRouter);

//components register
Vue.component('market-header',Header);
Vue.component('market-home',Home);

//register routers
const router = new VueRouter({
    routes:Routes
});
new Vue({
    el: '#app',
    store:store,
    render: h => h(App),
    router:router
});
