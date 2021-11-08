var ProgressListenerImpl = /** @class */ (function (_super) {
    __extends(ProgressListenerImpl, _super);
    function ProgressListenerImpl(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        // necessary when extending TypeScript constructors
        return global.__native(_this);
    }
    ProgressListenerImpl.prototype.onProgressUpdated = function (progressMs, durationMs) {
        console.log('onProgressUpdated');
        console.log(progressMs, durationMs);
        /*
        this.owner.sendEvent(CastButtonBase.progressEvent, {
          eventName: CastEvent.onProgressUpdated,
          progressMs: progressMs,
          durationMs: durationMs,
          android: this.owner.nativeView
        });
        */
    };
    ProgressListenerImpl = __decorate([
        Interfaces([com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener])
        // @ts-ignore
    ], ProgressListenerImpl);
    return ProgressListenerImpl;
}(java.lang.Object));
export { ProgressListenerImpl };
//# sourceMappingURL=remote-media-client-progress-listener.android.js.map