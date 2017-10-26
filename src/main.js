import Vue from 'vue';
import VueRouter from 'vue-router';

//echarts
import echarts from 'echarts';

import App from './App.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';

//routers
import Routes from './routers';

//vuex
import {store} from './store/store';

//rem
import './lib/rem';
//velocity.js
import Velocity from 'velocity-animate';

Vue.prototype.$echarts = echarts;

//use package
Vue.use(VueRouter);

//components register
Vue.component('market-header',Header);
Vue.component('market-home',Home);

//函数组组件（复用）结合velocity.js库使用比较方便
Vue.component('my-tab', {
    functional: true,
    render: function (createElement, context) {
        let data = {
            props: {
                name: 'very-special-transition',
                mode: 'out-in'
            },
            on: {
                beforeEnter: function(el){

                },
                enter: function(el,done){

                },
                beforeLeave: function (el) {
                    // ...
                },
                leave: function (el, done) {
                    Velocity(el, {
                        translateX: '-100%',
                        opacity: 0.2
                    }, { duration: 300,easeInSine:'easeInSine',complete: done});
                }
            }
        }
        return createElement('transition', data, context.children)
    }
})

//register routers
const router = new VueRouter({
    routes:Routes
});
var vm = new Vue({
    el: '#app',
    store:store,
    render: h => h(App),
    router:router
});