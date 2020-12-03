import { VersionNumber } from '../plugin-seed';

export default {
    install(Vue) {
        Vue.registerElement('VersionNumber', () => VersionNumber, {});
    }
};
