import * as application from 'tns-core-modules/application';
import { ad } from 'tns-core-modules/utils/utils';
import {
  CastButtonBase,
  textProperty,
  mediaRouterCallbackProperty
} from './cast.common';

declare const com: any;
declare const android: any;

export class CastButton extends CastButtonBase {

  //nativeView: android.support.v7.app.MediaRouteButton;
  nativeView: any;

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    const appContext = application.android.context.getApplicationContext();
    const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;

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

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  [textProperty.setNative](value: string) {
    this.nativeView.setText(value);
  }

  [mediaRouterCallbackProperty.setNative](value: any) {
    const context = ad.getApplicationContext();
    const { MediaRouter, MediaRouteSelector } = android.support.v7.media;
    const mMediaRouter = MediaRouter.getInstance(context);
    const mMediaRouteSelector = new MediaRouteSelector.Builder().build();
    const mMediaRouterCallback = value();

    // Add the callback to start device discovery
    mMediaRouter.addCallback(mMediaRouteSelector, mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);
  }
}
