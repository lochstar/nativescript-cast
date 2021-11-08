import { registerElement } from 'react-nativescript';
export function register() {
    registerElement('castButton', () => require('../cast').CastButton);
}
//# sourceMappingURL=index.js.map