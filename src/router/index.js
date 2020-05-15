import Vue from 'vue'
import Router from 'vue-router'
import Join from '../components/member/Join'
import Login from '../components/member/Login'
import Calculator from '../components/common/Calculator'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes : [
        {path: '/join', component: Join},
        {path: '/login', component: Login},
        {path: '/calculator', component: Calculator}

    ]
})