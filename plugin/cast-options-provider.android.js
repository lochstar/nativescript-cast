import { Utils } from '@nativescript/core';
var CastOptionsProvider = /** @class */ (function (_super) {
    __extends(CastOptionsProvider, _super);
    function CastOptionsProvider() {
        var _this = _super.call(this) || this;
        return global.__native(_this);
    }
    CastOptionsProvider.prototype.getCastOptions = function (appContext) {
        // Get app_id from strings.xml
        var appStringId = Utils.ad.resources.getStringId('app_id');
        var appId = Utils.ad.getApplication().getString(appStringId);
        var notificationOptions = new com.google.android.gms.cast.framework.media.NotificationOptions.Builder()
            .setTargetActivityClassName('org.nativescript.cast.CastActivity')
            .build();
        var mediaOptions = new com.google.android.gms.cast.framework.media.CastMediaOptions.Builder()
            .setNotificationOptions(notificationOptions)
            .setExpandedControllerActivityClassName('org.nativescript.cast.ExpandedControlsActivity')
            .build();
        return new com.google.android.gms.cast.framework.CastOptions.Builder()
            .setReceiverApplicationId(appId)
            .setCastMediaOptions(mediaOptions)
            .build();
    };
    CastOptionsProvider.prototype.getAdditionalSessionProviders = function (context) {
        return null;
    };
    CastOptionsProvider = __decorate([
        JavaProxy('org.nativescript.cast.OptionsProvider'),
        Interfaces([com.google.android.gms.cast.framework.OptionsProvider])
    ], CastOptionsProvider);
    return CastOptionsProvider;
}(java.lang.Object));
export { CastOptionsProvider };
//# sourceMappingURL=cast-options-provider.android.js.map