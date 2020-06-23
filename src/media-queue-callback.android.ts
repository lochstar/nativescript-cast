import { CastButtonBase } from './cast.common';
import { CastButton, convertMediaInfo } from './cast.android';
import { CastEvent, QueueItem } from './cast.types';

export class MediaQueueCallback extends com.google.android.gms.cast.framework.media.MediaQueue.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();
    this.owner = owner;
    return global.__native(this);
  }

  public itemsReloaded(): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsReloaded,
      android: this.owner.nativeView
    });
  }

  public itemsInsertedInRange(insertIndex: number, insertCount: number): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsInsertedInRange,
      insertIndex: insertIndex,
      insertCount: insertCount,
      android: this.owner.nativeView
    });
  }

  public itemsUpdatedAtIndexes(indexes: number[]): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsUpdatedAtIndexes,
      indexes: indexes,
      android: this.owner.nativeView
    });

    const parsedQueueItems = [];

    if (indexes.length > 0) {
      Array.from(indexes).forEach(i => {
        const item = this.owner.queueFetchItemAtIndex(i);

        const queueItem: QueueItem = {
          mediaInformation: convertMediaInfo(item.getMedia()),
          itemID: item.getItemId(),
          autoplay: item.getAutoplay(),
          startTime: item.getStartTime(),
          playbackDuration: item.getPlaybackDuration(),
          preloadTime: item.getPreloadTime(),
          activeTrackIds: item.getActiveTrackIds(),
          customData: item.getCustomData(),
        };
        parsedQueueItems.push(queueItem);
      });
    }

    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDidReceiveQueueItems,
      queueItems: parsedQueueItems,
      android: this.owner.nativeView
    });
  }

  public itemsRemovedAtIndexes(indexes: number[]): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.itemsRemovedAtIndexes,
      indexes: indexes,
      android: this.owner.nativeView
    });
  }

  public mediaQueueChanged(): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueChanged,
      android: this.owner.nativeView
    });
  }

  public mediaQueueWillChange(): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.mediaQueueWillChange,
      android: this.owner.nativeView
    });
  }
}
