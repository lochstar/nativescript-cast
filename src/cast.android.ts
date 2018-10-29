import * as application from 'tns-core-modules/application';
import { CastButtonBase } from './cast.common';

declare const com: any;
declare const android: any;

let clickListener: android.view.View.OnClickListener;

// NOTE: ClickListenerImpl is in function instead of directly in the module because we
// want this file to be compatible with V8 snapshot. When V8 snapshot is created
// JS is loaded into memory, compiled & saved as binary file which is later loaded by
// android runtime. Thus when snapshot is created we don't have android runtime and
// we don't have access to native types.
function initializeClickListener(): void {
  // Define ClickListener class only once.
  if (clickListener) {
    return;
  }

  // Interfaces decorator with implemented interfaces on this class
  @Interfaces([android.view.View.OnClickListener])
  class ClickListener extends java.lang.Object implements android.view.View.OnClickListener {
    public owner: CastButton;

    constructor() {
      super();
      // Required by android runtime when native class is extended through TypeScript.
      return global.__native(this);
    }

    public onClick(v: android.view.View): void {
      // When native button is clicked we raise 'tap' event.
      const owner = (<any>v).owner;
      if (owner) {
        owner.notify({
          eventName: CastButtonBase.tapEvent,
          object: owner
        });
      }
    }
  }

  clickListener = new ClickListener();
}

export class CastButton extends CastButtonBase {

  //nativeView: android.support.v7.app.MediaRouteButton;
  context: any;
  nativeView: any;

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    this.context = application.android.context.getApplicationContext();

    // Initialize ClickListener.
    initializeClickListener();

    // Create new instance of android.support.v7.app.MediaRouteButton
    this.nativeView = new android.support.v7.app.MediaRouteButton(this._context);
    const mMediaRouteButton = this.nativeView;

    // TODO: remove listener
    mMediaRouteButton.setOnClickListener(clickListener);

    const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;
    CastButtonFactory.setUpMediaRouteButton(this.context, this.nativeView);

    return mMediaRouteButton;
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
}
