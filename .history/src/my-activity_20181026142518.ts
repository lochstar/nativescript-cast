import * as application from 'tns-core-modules/application';
import {
  MyButtonBase,
  textProperty,
  myOpacityProperty
} from "./cast.common";

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
    public owner: MyButton;

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
          eventName: MyButtonBase.tapEvent,
          object: owner
        });
      }
    }
  }

  clickListener = new ClickListener();
}

declare const com: any;
declare const android: any;


//@Interfaces([android.support.v7.media.MediaRouter.Callback])
class MyMediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public owner: MyButton;

  /*
  constructor() {
    super();
    // Required by android runtime when native class is extended through TypeScript.
    return global.__native(this);
  }
  */

  public onProviderAdded(router, provider): void {
    console.log("onProviderAdded");
    //console.dir(router);
    //console.dir(provider);
  }

  public onProviderChanged(router, provider): void {
    console.log("onProviderChanged");
    //console.dir(router);
    //console.dir(provider);
  }

  public onProviderRemoved(router, provider): void {
    console.log("onProviderRemoved");
  }

  public onRouteAdded(router, route): void {
    console.log("onRouteAdded");
    /*
    if (++mRouteCount == 1) {
      // Show the button when a device is discovered.
      mMediaRouteButton.setVisibility(View.VISIBLE);
    }
    */
  }

  public onRoutePresentationDisplayChanged(router, route): void {
    console.log("onRoutePresentationDisplayChanged");
  }

  public onRouteRemoved(router, route): void {
    console.log("onRouteRemoved");
    /*
    if (--mRouteCount == 0) {
      // Hide the button if there are no devices discovered.
      mMediaRouteButton.setVisibility(View.GONE);
    }
    */
  }

  public onRouteSelected(router, info): void {
    console.log("onRouteSelected");
    // Handle route selection.
    //mSelectedDevice = CastDevice.getFromBundle(info.getExtras());

    // Just display a message for now; In a real app this would be the
    // hook to connect to the selected device and launch the receiver
    // app
    /*
    Toast.makeText(MediaRouterButtonActivity.this,
      getString(R.string.todo_connect), Toast.LENGTH_LONG).show();
    */
  }

  public onRouteUnselected(router, info): void {
    console.log("onRouteUnselected: info=" + info);
    //mSelectedDevice = null;
  }

  public onRouteVolumeChanged(router, route): void {
    console.log("onRouteVolumeChanged");
  }
}


//@Interfaces([android.support.v7.app.MediaRouteActionProvider])
export class MyButton extends MyButtonBase {

  // added for TypeScript intellisense.
  //nativeView: android.support.v7.app.MediaRouteButton;

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    // Initialize ClickListener.
    initializeClickListener();

    // Create new instance of android.widget.Button.
    //const button = new android.widget.Button(this._context);

    // set onClickListener on the nativeView.
    //button.setOnClickListener(clickListener);

    const context = application.android.context.getApplicationContext();

    const MediaRouter = android.support.v7.media.MediaRouter;
    const MediaRouteButton = new android.support.v7.app.MediaRouteButton(this._context);
    const MediaRouteSelector = android.support.v7.media.MediaRouteSelector;

    const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;
    CastButtonFactory.setUpMediaRouteButton(context, MediaRouteButton);

    // getCastContext
    /*
    const CastContext = com.google.android.gms.cast.framework.CastContext;
    const mCastContext = com.google.android.gms.cast.framework.CastContext.getSharedInstance(context);
    console.log('mCastContext');
    console.dir(mCastContext);
    */

    // Get strings?
    // const CastMediaControlIntent = com.google.android.gms.cast.CastMediaControlIntent;
    // CastMediaControlIntent.categoryForCast(getResources().getString(R.string.app_id))

    const mMediaRouter = MediaRouter.getInstance(context);
    //console.log('mMediaRouter');
    //console.dir(mMediaRouter);
    const mMediaRouteSelector = new MediaRouteSelector.Builder().addControlCategory('APP_ID').build();
    //console.log('mMediaRouteSelector');
    //console.dir(mMediaRouteSelector);
    // Create a MediaRouter callback for discovery events
    const mMediaRouterCallback = new MyMediaRouterCallback();

    // Set the MediaRouteButton selector for device discovery.
    //const mMediaRouteButton = (MediaRouteButton) findViewById(R.id.media_route_button);  // button
    //const mMediaRouteButton = MediaRouteButton;  // button
    MediaRouteButton.setRouteSelector(mMediaRouteSelector);

    // Add the callback to start device discovery
    mMediaRouter.addCallback(mMediaRouteSelector, mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);

    //const View = android.view.View;
    //MediaRouteButton.setVisibility(View.VISIBLE);

    return MediaRouteButton;
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

  // transfer JS text value to nativeView.
  /*
  [textProperty.setNative](value: string) {
    this.nativeView.setText(value);
  }
  */

  // gets the default native value for opacity property.
  // Alpha could be controlled from Android theme.
  // Thus we take the default native value from the nativeView.
  // If view is recycled the value returned from this method
  // will be passed to [myOppacityProperty.setNative]
  [myOpacityProperty.getDefault](): number {
    return this.nativeView.getAlpha()
  }

  // set opacity to the native view.
  [myOpacityProperty.setNative](value: number) {
    return this.nativeView.setAlpha(value);
  }
}
