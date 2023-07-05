import { createRouter, createWebHashHistory } from 'vue-router'
 
import Test from '../components/Test.vue';
import HelloWorld from '../components/HelloWorld.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '', redirect: '/test'},
        { path: '/test', component: Test },
        { path: '/index', component: HelloWorld }
    ]
})
 
export default router;