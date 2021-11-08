var RemoteMediaClientCallback = /** @class */ (function (_super) {
    __extends(RemoteMediaClientCallback, _super);
    function RemoteMediaClientCallback(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    RemoteMediaClientCallback.prototype.onStatusUpdated = function () {
        this.owner.onMediaStatusUpdate();
    };
    RemoteMediaClientCallback.prototype.onMetadataUpdated = function () {
    };
    RemoteMediaClientCallback.prototype.onQueueStatusUpdated = function () {
    };
    RemoteMediaClientCallback.prototype.onPreloadStatusUpdated = function () {
    };
    RemoteMediaClientCallback.prototype.onSendingRemoteMediaRequest = function () {
    };
    RemoteMediaClientCallback.prototype.onAdBreakStatusUpdated = function () {
    };
    return RemoteMediaClientCallback;
}(com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback));
export { RemoteMediaClientCallback };
//# sourceMappingURL=remote-media-client-callback.android.js.map