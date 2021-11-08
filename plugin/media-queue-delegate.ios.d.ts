import { CastButton } from './cast.android';
declare class MediaQueueDelegate extends NSObject implements GCKMediaQueueDelegate {
    static ObjCProtocols: {
        prototype: GCKMediaQueueDelegate;
    }[];
    owner: CastButton;
    static new(): GCKMediaQueueDelegate;
    mediaQueueDidReloadItems(queue: GCKMediaQueue): void;
    didInsertItemsInRange(queue: GCKMediaQueue, range: NSRange): void;
    didUpdateItemsAtIndexes(queue: GCKMediaQueue, indexes: number[]): void;
    didRemoveItemsAtIndexes(queue: GCKMediaQueue, indexes: number[]): void;
    mediaQueueWillChange(queue: GCKMediaQueue): void;
    mediaQueueDidChange(queue: GCKMediaQueue): void;
}
export { MediaQueueDelegate };
