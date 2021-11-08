import { View } from '@nativescript/core';
export * from './cast';
export declare abstract class CastButtonBase extends View {
    static validMetadataKeys: string[];
    static castEvent: string;
    sendEvent(eventName: string, data?: any): void;
    constructor();
}
