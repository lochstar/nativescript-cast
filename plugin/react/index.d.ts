import { NativeScriptProps, ViewAttributes } from 'react-nativescript';
import { CastButton as NativeScriptCastButton } from '../cast';
export declare function register(): void;
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
export {};
