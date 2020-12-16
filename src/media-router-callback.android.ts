import { CastButtonBase } from './cast.common';
import { CastButton } from './cast.android';
import { CastEvent } from './cast.types';

@NativeClass()
class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();
    this.owner = owner;
    return global.__native(this);
  }

  public onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderAdded,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderChanged,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderRemoved,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteAdded,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
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
  }

  public onRoutePresentationDisplayChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRoutePresentationDisplayChanged,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteRemoved,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteSelected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteUnselected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceVolumeChanged,
      router: router,
      route: route,
      volume: route.getVolume() / 20,  // Android volume is 0-20, change to 0-1
      android: this.owner.nativeView,
    });
  }
}

export { MediaRouterCallback };
