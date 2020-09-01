import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/view/index'
import install from '@/components/install'
import bases from '@/components/bases'
import introduction from '@/components/introduction'
import advanced from '@/components/advanced'
import qtRouter from '@/components/bases/qtRouter'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/install/:name',
            name: 'install',
            component: install
        },
        {
            path: '/bases',
            name: 'bases',
            component: bases,
            children: [{
                path: 'qtlu',
                component: qtRouter
            }]
        },
        {
            path: '/introduction',
            name: 'introduction',
            component: introduction
        },
        {
            path: '/advanced',
            name: 'advanced',
            component: advanced
        },
    ],
    mode: 'history'
})