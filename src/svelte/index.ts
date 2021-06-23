import { NativeViewElementNode, registerElement } from 'svelte-native/dom';
import { CastButton } from '../cast';

export default class CastButtonElement extends NativeViewElementNode<CastButton> {
    constructor() {
        super('castButton', CastButton);
    }

    static register() {
        registerElement('castButton', () => new CastButtonElement());
    }
}
