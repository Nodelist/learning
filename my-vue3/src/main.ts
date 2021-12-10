import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css';
import * as echarts from 'echarts';

import Map3D from '@/units/supermap/map3D/index';

declare global {
    interface Window {
        Map3D: any;
        Cesium: any;
    }
}
window.Map3D = Map3D;


const APP = createApp(App);
APP.config.globalProperties.$echarts = echarts;
APP.config.globalProperties.$Map3D = Map3D;

APP.use(router)
APP.use(store)
APP.use(ElementPlus)
APP.mount('#app')