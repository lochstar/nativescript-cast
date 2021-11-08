import { CastButton } from './cast';
import { View } from 'tns-core-modules/ui/core/view';
import { Visibility } from "tns-core-modules/ui/styling/style-properties";
export declare abstract class CastButtonBase extends View implements CastButton {
    static validMetadataKeys: string[];
    static mediaRouterEventEvent: string;
    static sessionEventEvent: string;
    visibility: Visibility;
    sendEvent(eventName: string, data?: any): void;
}
