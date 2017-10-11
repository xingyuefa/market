/**
 * Created by Administrator on 2017/10/11 0011.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        featuredBazaar:[
            {mainBazaar:{imgUrl:'./src/assets/home-textiles@2x.png'},eputyBazaar:[{imgUrl:'../src/assets/vintage-wine@2x.png'},{imgUrl:'../src/assets/Gentlman@2x.png'}]},
            {mainBazaar:{imgUrl:'./src/assets/optimizationBags@2x.png'},eputyBazaar:[{imgUrl:'../src/assets/tideWomen@2x.png'},{imgUrl:'../src/assets/carAccessories@2x.png'}]}
        ]
    }
});