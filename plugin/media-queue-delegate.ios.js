import { CastButtonBase } from './cast.common';
import { CastEvent } from './cast.types';
// @ts-ignore
var MediaQueueDelegate = /** @class */ (function (_super) {
    __extends(MediaQueueDelegate, _super);
    function MediaQueueDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaQueueDelegate.new = function () {
        return _super.new.call(this);
    };
    MediaQueueDelegate.prototype.mediaQueueDidReloadItems = function (queue) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsReloaded,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.prototype.didInsertItemsInRange = function (queue, range) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsInsertedInRange,
            insertIndex: range.location,
            insertCount: range.length,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.prototype.didUpdateItemsAtIndexes = function (queue, indexes) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsUpdatedAtIndexes,
            indexes: indexes,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.prototype.didRemoveItemsAtIndexes = function (queue, indexes) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.itemsRemovedAtIndexes,
            indexes: indexes,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.prototype.mediaQueueWillChange = function (queue) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.mediaQueueChanged,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.prototype.mediaQueueDidChange = function (queue) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.mediaQueueWillChange,
            ios: this.owner.nativeView
        });
    };
    MediaQueueDelegate.ObjCProtocols = [GCKMediaQueueDelegate];
    return MediaQueueDelegate;
}(NSObject));
export { MediaQueueDelegate };
//# sourceMappingURL=media-queue-delegate.ios.js.map