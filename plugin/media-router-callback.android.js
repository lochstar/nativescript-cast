import { CastButtonBase } from './cast.common';
import { CastEvent } from './cast.types';
var MediaRouterCallback = /** @class */ (function (_super) {
    __extends(MediaRouterCallback, _super);
    function MediaRouterCallback(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    MediaRouterCallback.prototype.onProviderAdded = function (router, provider) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onProviderAdded,
            router: router,
            provider: provider,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onProviderChanged = function (router, provider) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onProviderChanged,
            router: router,
            provider: provider,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onProviderRemoved = function (router, provider) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onProviderRemoved,
            router: router,
            provider: provider,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteAdded = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onRouteAdded,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteChanged = function (router, route) {
        /*
        const d = this.owner.CastDevice.getFromBundle(route.getExtras());
        const address = d.getIpAddress();
    
        const deviceJSON = {
          id: route.getId(),
          name: route.getName(),
          description: route.getDescription(),
          address: address,
    
          deviceType: route.getDeviceType(),
          playbackType: route.getPlaybackType(),
          volume: route.getVolume(),
        };
        */
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onDeviceChanged,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRoutePresentationDisplayChanged = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onRoutePresentationDisplayChanged,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteRemoved = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onRouteRemoved,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteSelected = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onRouteSelected,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteUnselected = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onRouteUnselected,
            router: router,
            route: route,
            android: this.owner.nativeView
        });
    };
    MediaRouterCallback.prototype.onRouteVolumeChanged = function (router, route) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onDeviceVolumeChanged,
            router: router,
            route: route,
            volume: route.getVolume() / 20,
            android: this.owner.nativeView,
        });
    };
    return MediaRouterCallback;
}(androidx.mediarouter.media.MediaRouter.Callback));
export { MediaRouterCallback };
//# sourceMappingURL=media-router-callback.android.js.map