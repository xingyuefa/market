import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Home from './components/Home.vue';

//rem
import './lib/rem'



//components register
Vue.component('market-header',Header);
Vue.component('market-home',Home);

new Vue({
  el: '#app',
  render: h => h(App)
})
