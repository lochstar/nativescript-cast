import * as application from 'tns-core-modules/application';

import {
  setActivityCallbacks,
  //setFragmentCallbacks,
  AndroidActivityCallbacks,
  //AndroidFragmentCallbacks
} from 'tns-core-modules/ui/frame';

// android.app.Activity
// android.support.v4.app.FragmentActivity

declare const com: any;
declare const android: any;

/*
export interface AndroidFragmentActivityCallbacks {
  getRootView(): View;
  resetActivityContent(activity: any): void;

  onCreate(activity: any, savedInstanceState: any, superFunc: Function): void;
  onSaveInstanceState(activity: any, outState: any, superFunc: Function): void;
  onStart(activity: any, superFunc: Function): void;
  onStop(activity: any, superFunc: Function): void;
  onDestroy(activity: any, superFunc: Function): void;
  onBackPressed(activity: any, superFunc: Function): void;
  onRequestPermissionsResult(activity: any, requestCode: number, permissions: Array<String>, grantResults: Array<number>, superFunc: Function): void;
  onActivityResult(activity: any, requestCode: number, resultCode: number, data: any, superFunc: Function);

  onNewIntent(activity: any, superFunc: Function);
  onPause(activity: any, superFunc: Function);
  onPostResume(activity: any, superFunc: Function);
  onResume(activity: any, superFunc: Function);
  onResumeFragments(activity: any, superFunc: Function);
}
*/



//@Interfaces([android.support.v7.media.MediaRouter.Callback])
class MyMediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  //public owner: MyButton;

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

@JavaProxy("org.nativescript.cast.MyNativeScriptActivity")
class MyNativeScriptActivity extends android.support.v4.app.FragmentActivity {
  private _callbacks: AndroidActivityCallbacks;

  public onCreate(savedInstanceState: android.os.Bundle): void {
    console.log('MyNativeScriptActivity: onCreate');
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }


    const MediaRouter = android.support.v7.media.MediaRouter;
    const MediaRouteSelector = android.support.v7.media.MediaRouteSelector;

    const context = application.android.context.getApplicationContext();

    console.log(this.findViewById('activity_main'));

    //MediaRouteButton.setOnClickListener(clickListener);

    //const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;
    //CastButtonFactory.setUpMediaRouteButton(context, mMediaRouteButton);

    // getCastContext
    /*
    const CastContext = com.google.android.gms.cast.framework.CastContext;
    const mCastContext = CastContext.getSharedInstance(context);
    */
    /*
    console.log('mCastContext');
    console.dir(mCastContext);
    */

    // Get strings?
    const CastMediaControlIntent = com.google.android.gms.cast.CastMediaControlIntent;
    // CastMediaControlIntent.categoryForCast(getResources().getString(R.string.app_id))

    const mMediaRouter = MediaRouter.getInstance(context);
    //console.log('mMediaRouter');
    //console.dir(mMediaRouter);
    //const mMediaRouteSelector = new MediaRouteSelector.Builder().addControlCategory('4E0FE981').build();
    const mMediaRouteSelector = new MediaRouteSelector.Builder().addControlCategory(CastMediaControlIntent.categoryForCast('4E0FE981')).build();
    //console.log('mMediaRouteSelector');
    //console.dir(mMediaRouteSelector);
    // Create a MediaRouter callback for discovery events
    const mMediaRouterCallback = new MyMediaRouterCallback();

    // Set the MediaRouteButton selector for device discovery.
    //const mMediaRouteButton = (MediaRouteButton) findViewById(R.id.media_route_button);  // button
    //const mMediaRouteButton = MediaRouteButton;  // button
    //mMediaRouteButton.setRouteSelector(mMediaRouteSelector);

    // Add the callback to start device discovery
    mMediaRouter.addCallback(mMediaRouteSelector, mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);

    //const View = android.view.View;
    //MediaRouteButton.setVisibility(View.VISIBLE);

    this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
  }

  public onSaveInstanceState(outState: android.os.Bundle): void {
    this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
  }

  public onStart(): void {
    this._callbacks.onStart(this, super.onStart);
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop);
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public onBackPressed(): void {
    this._callbacks.onBackPressed(this, super.onBackPressed);
  }

  public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
    this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
  }

  public onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
    this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
  }

  /*
  public onNewIntent(activity, superFunc: Function): void {
    console.log('onNewIntent');
    superFunc.call(activity);
  }
  */

  /*
  public onPause(): void {
    console.log('onPause');
    this._callbacks.onPause(this, super.onPause);
  }

  public onPostResume(): void {
    console.log('onPostResume');
    this._callbacks.onPostResume(this, super.onPostResume);
  }

  public onResume(activity, superFunc: Function) {
    console.log('onResume');
    //superFunc.call(activity);
    //this._callbacks.onResume(this, super.onResume);
  }

  public onResumeFragments(): void {
    console.log('onResumeFragments');
    this._callbacks.onResumeFragments(this, super.onResumeFragments);
  }
  */
}
