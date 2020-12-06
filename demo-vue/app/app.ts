import Vue from 'nativescript-vue';
import Menu from './components/Menu.vue';

import VersionNumber from '@nativescript-community/plugin-seed/vue';
Vue.use(VersionNumber);

Vue.config.silent = true;

new Vue({
    render: h => h('frame', [h(Menu)])
}).$start();
