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
        ],
        navBtn:[
            {navBtnSrc:'../src/assets/homeBtn@2x.png',navBtnName:'首页'},
            {navBtnSrc:'../src/assets/Vplaza@2x.png',navBtnName:'名品特卖'},
            {navBtnSrc:'../src/assets/discover@2x.png',navBtnName:'发现'},
            {navBtnSrc:'../src/assets/shoppingCar@2x.png',navBtnName:'购物车'},
            {navBtnSrc:'../src/assets/mine@2x.png',navBtnName:'我的'},
        ],
        products:[
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'32155',productImgSrc:'../src/assets/playStation@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:false},
            {productName:'Apple/苹果 运动手表',productPrice:'121.00',purchases:'56981',productImgSrc:'../src/assets/AppleWatch@2x.png',productLogoSrc:'../src/assets/SONY-LOGO@2x.png',isRegularChain:true},
            {productName:'七匹狼正品男士真皮皮带',productPrice:'800.00',purchases:'462436',productImgSrc:'../src/assets/belt@2x.png',productLogoSrc:'../src/assets/SEPTWOLVES-LOGO@2x.png',isRegularChain:false},
            {productName:'女包LV专柜正品',productPrice:'1235.00',purchases:'64432',productImgSrc:'../src/assets/lvBag@2x.png',productLogoSrc:'../src/assets/bag-logo@2x.png',isRegularChain:true},
            {productName:'索尼HRX1210游戏机',productPrice:'800.00',purchases:'346435',productImgSrc:'../src/assets/playStation@2x.png',isRegularChain:true},
        ]
    }
});