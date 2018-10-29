import * as application from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';
import { View } from 'tns-core-modules/ui/core/view';
//import { testCastFunction } from 'nativescript-cast';

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public onProviderAdded(router, provider): void {
    console.log('onProviderAdded');
    //console.dir(router);
    //console.dir(provider);
  }

  public onProviderChanged(router, provider): void {
    console.log('onProviderChanged');
    //console.dir(router);
    //console.dir(provider);
  }

  public onProviderRemoved(router, provider): void {
    console.log('onProviderRemoved');
  }

  public onRouteAdded(router, route): void {
    console.log('onRouteAdded');
    /*
    if (++mRouteCount == 1) {
      // Show the button when a device is discovered.
      mMediaRouteButton.setVisibility(View.VISIBLE);
    }
    */
  }

  public onRoutePresentationDisplayChanged(router, route): void {
    console.log('onRoutePresentationDisplayChanged');
  }

  public onRouteRemoved(router, route): void {
    console.log('onRouteRemoved');
    /*
    if (--mRouteCount == 0) {
      // Hide the button if there are no devices discovered.
      mMediaRouteButton.setVisibility(View.GONE);
    }
    */
  }

  public onRouteSelected(router, info): void {
    console.log('onRouteSelected');
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
    console.log('onRouteUnselected: info=' + info);
    //mSelectedDevice = null;
  }

  public onRouteVolumeChanged(router, route): void {
    console.log('onRouteVolumeChanged');
  }
}

export class HelloWorldModel extends Observable {
  public count: number;
  public message: string;

  constructor() {
    super();

    this.count = 0;
    this.message = 'hello';

    console.dir(this);

    // Init cast button with APP_ID and a MediaRouter.Callback
    this.initCastButton(new MediaRouterCallback());
  }

  initCastButton(mMediaRouterCallback: object) {
    const context = application.android.context.getApplicationContext();
    const MediaRouter = android.support.v7.media.MediaRouter;
    const MediaRouteSelector = android.support.v7.media.MediaRouteSelector;

    const CastMediaControlIntent = com.google.android.gms.cast.CastMediaControlIntent;

    // Get strings?
    // CastMediaControlIntent.categoryForCast(getResources().getString(R.string.app_id))

    const mMediaRouter = MediaRouter.getInstance(context);

    //const mMediaRouteSelector = new MediaRouteSelector.Builder().addControlCategory(CastMediaControlIntent.categoryForCast(appId)).build();
    const mMediaRouteSelector = new MediaRouteSelector.Builder().build();

    // Add the callback to start device discovery
    mMediaRouter.addCallback(mMediaRouteSelector, mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);

    //const View = android.view.View;
    //MediaRouteButton.setVisibility(View.VISIBLE);
  }

  onTap(args: EventData) {
    this.count++;
    const button = <Button>args.object;
    button.text = `Tapped ${this.count} times`;
  }
}
