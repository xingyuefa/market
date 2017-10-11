import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Home from './components/Home.vue';

//vuex
import {store} from './store/store';

//rem
import './lib/rem'

//components register
Vue.component('market-header',Header);
Vue.component('market-home',Home);

new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
});
