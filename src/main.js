import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'
import axios from 'axios'
import moment from 'moment'
import VCharts from 'v-charts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import JsonExcel from 'vue-json-excel'


Vue.use(mavonEditor)
Vue.prototype.$axios = http
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.component('downloadExcel', JsonExcel)

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.response.use(
    response => {
        return response.data
    }, error => {
        return Promise.reject(error)
    })


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


