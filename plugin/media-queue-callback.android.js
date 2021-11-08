import { CastButtonBase } from './cast.common';
import { CastEvent } from './cast.types';
var MediaQueueCallback = /** @class */ (function (_super) {
    __extends(MediaQueueCallback, _super);
    function MediaQueueCallback(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    MediaQueueCallback.prototype.itemsReloaded = function () {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsReloaded,
            android: this.owner.nativeView
        });
    };
    MediaQueueCallback.prototype.itemsInsertedInRange = function (insertIndex, insertCount) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsInsertedInRange,
            insertIndex: insertIndex,
            insertCount: insertCount,
            android: this.owner.nativeView
        });
    };
    MediaQueueCallback.prototype.itemsUpdatedAtIndexes = function (indexes) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsUpdatedAtIndexes,
            indexes: indexes,
            android: this.owner.nativeView
        });
        /*
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
        */
    };
    MediaQueueCallback.prototype.itemsRemovedAtIndexes = function (indexes) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsRemovedAtIndexes,
            indexes: indexes,
            android: this.owner.nativeView
        });
    };
    MediaQueueCallback.prototype.mediaQueueChanged = function () {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.mediaQueueChanged,
            android: this.owner.nativeView
        });
    };
    MediaQueueCallback.prototype.mediaQueueWillChange = function () {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.mediaQueueWillChange,
            android: this.owner.nativeView
        });
    };
    return MediaQueueCallback;
}(com.google.android.gms.cast.framework.media.MediaQueue.Callback));
export { MediaQueueCallback };
//# sourceMappingURL=media-queue-callback.android.js.map