import { CastButton } from './cast.android';
declare class MediaQueueCallback extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
    owner: CastButton;
    constructor(owner: any);
    itemsReloaded(): void;
    itemsInsertedInRange(insertIndex: number, insertCount: number): void;
    itemsUpdatedAtIndexes(indexes: number[]): void;
    itemsRemovedAtIndexes(indexes: number[]): void;
    mediaQueueChanged(): void;
    mediaQueueWillChange(): void;
}
export { MediaQueueCallback };
