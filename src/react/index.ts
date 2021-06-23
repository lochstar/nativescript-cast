import { NativeScriptProps, ViewAttributes, registerElement } from 'react-nativescript';
import { CastButton as NativeScriptCastButton } from '../cast';

export function register() {
    registerElement('castButton', () => require('../cast').CastButton);
}

interface CastButtonAttributes extends ViewAttributes {
    onCast?: (eventName: string, data?: any) => any;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            castButton: NativeScriptProps<CastButtonAttributes, NativeScriptCastButton>;
        }
    }
}
