import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import YiEcharts from '../src/index';
Vue.use(YiEcharts)

new Vue({
    render: h => h(App)
}).$mount('#app');
