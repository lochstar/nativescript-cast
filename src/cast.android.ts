import { ad } from 'tns-core-modules/utils/utils';
import { CastButtonBase } from './cast.common';

const { MediaRouter, MediaRouteSelector, MediaControlIntent } = android.support.v7.media;
const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    return global.__native(this);
  }

  public onProviderAdded(router, provider): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onProviderAdded',
      object: router,
      provider: provider
    });
  }

  public onProviderChanged(router, provider): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onProviderChanged',
      object: router,
      provider: provider
    });
  }

  public onProviderRemoved(router, provider): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onProviderRemoved',
      object: router,
      provider: provider
    });
  }

  public onRouteAdded(router, route): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteAdded',
      object: router,
      route: route
    });
  }

  public onRouteChanged(router, route): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteChanged',
      object: router,
      route: route
    });
  }

  public onRoutePresentationDisplayChanged(router, route): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onProviderChanged',
      object: router,
      route: route
    });
  }

  public onRouteRemoved(router, route): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteRemoved',
      object: router,
      route: route
    });
  }

  public onRouteSelected(router, info): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteSelected',
      object: router,
      info: info
    });
  }

  public onRouteUnselected(router, info): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteUnselected',
      object: router,
      info: info
    });
  }

  public onRouteVolumeChanged(router, route): void {
    this.owner.notify({
      eventName: CastButtonBase.mediaRouterEventEvent,
      mediaRouterEventName: 'onRouteVolumeChanged',
      object: router,
      route: route
    });
  }
}

export class CastButton extends CastButtonBase {
  nativeView: android.support.v7.app.MediaRouteButton;

  mMediaRouter: android.support.v7.media.MediaRouter;
  mMediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  mMediaRouteSelector: android.support.v7.media.MediaRouteSelector;

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    const appContext = ad.getApplicationContext();

    // Create new instance of MediaRouteButton
    this.nativeView = new android.support.v7.app.MediaRouteButton(this._context);

    // Wire up the MediaRouteButton to the Cast framework
    CastButtonFactory.setUpMediaRouteButton(appContext, this.nativeView);

    return this.nativeView;
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = this;

    this.addCallback();

    super.initNativeView();
  }

  /**
   * Clean up references to the native view and resets nativeView to its original state.
   * If you have changed nativeView in some other way except through setNative callbacks
   * you have a chance here to revert it back to its original state
   * so that it could be reused later.
   */
  disposeNativeView(): void {
    // Remove reference from native view to this instance.
    (<any>this.nativeView).owner = null;

    this.removeCallback();

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  addCallback(): void {
    const appContext = ad.getApplicationContext();
    this.mMediaRouter = MediaRouter.getInstance(appContext);
    this.mMediaRouteSelector = new MediaRouteSelector.Builder()
      .addControlCategory(MediaControlIntent.CATEGORY_LIVE_VIDEO)
      .addControlCategory(MediaControlIntent.CATEGORY_REMOTE_PLAYBACK)
      .build();
    this.mMediaRouterCallback = new MediaRouterCallback(this);

    // Add the callback to start device discovery
    this.mMediaRouter.addCallback(this.mMediaRouteSelector, this.mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);
  }

  removeCallback(): void {
    if (this.mMediaRouter && this.mMediaRouterCallback) {
      this.mMediaRouter.removeCallback(this.mMediaRouterCallback);
    }
  }
}
