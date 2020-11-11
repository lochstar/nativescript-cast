import Vue from 'nativescript-vue';
import App from './components/App.vue';

Vue.config.silent = true;

new Vue({
    render: h => h('frame', [h(App)])
}).$start();
