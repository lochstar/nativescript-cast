import { CastButton } from '../cast';

export default {
    install(Vue) {
        Vue.registerElement('CastButton', () => CastButton, {});
    }
};
