import { NativeScriptProps, ViewAttributes, registerElement } from 'react-nativescript';
import { VersionNumber as NativeScriptVersionNumber } from '../plugin-seed';

export function register() {
    registerElement('versionNumber', () => require('../').VersionNumber);
}

interface VersionNumberAttributes extends ViewAttributes {}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            versionNumber: NativeScriptProps<VersionNumberAttributes, NativeScriptVersionNumber>;
        }
    }
}
