import Vue from 'nativescript-vue';
import VersionNumber from '@nativescript-community/plugin-seed/vue';

export function install() {
    console.log('hello world');
    Vue.use(VersionNumber);
}
