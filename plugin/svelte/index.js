import { NativeViewElementNode, registerElement } from 'svelte-native/dom';
import { CastButton } from '../cast';
export default class CastButtonElement extends NativeViewElementNode {
    constructor() {
        super('castButton', CastButton);
    }
    static register() {
        registerElement('castButton', () => new CastButtonElement());
    }
}
//# sourceMappingURL=index.js.map