import home from './components/Home.vue';
import vplaza from './components/Vplaza.vue';
import Echarts from './components/Echarts.vue';

export default [
    {path:'/',component:home},
    {path:'/vplaza',component:vplaza},
    {path:'/charts',component:Echarts},
]