import { NativeViewElementNode, registerElement } from 'svelte-native/dom';
import { VersionNumber } from '../plugin-seed';

export default class VersionNumberElement extends NativeViewElementNode<VersionNumber> {
    constructor() {
        super('versionNumber', VersionNumber);
    }

    static register() {
        registerElement('versionNumber', () => new VersionNumberElement());
    }
}
