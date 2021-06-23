import { View } from '@nativescript/core';
import { Visibility } from '@nativescript/core/ui/styling/style-properties';
export * from './cast';
export declare abstract class CastButtonBase extends View {
    static validMetadataKeys: string[];
    static castEvent: string;
    visibility: Visibility;
    sendEvent(eventName: string, data?: any): void;
}
