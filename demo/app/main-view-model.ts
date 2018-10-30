import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';

const CastDevice = com.google.android.gms.cast.CastDevice;

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public parent: MainViewModel;

  constructor(parent) {
    super();

    this.parent = parent;

    return global.__native(this);
  }

  /*
  public onProviderAdded(router, provider): void {
    console.log('onProviderAdded');
  }

  public onProviderChanged(router, provider): void {
    console.log('onProviderChanged');
  }

  public onProviderRemoved(router, provider): void {
    console.log('onProviderRemoved');
  }
  */

  public onRouteAdded(router, route): void {
    console.log('onRouteAdded');
    if (++this.parent.mRouteCount == 1) {
      // Show the button when a device is discovered
      this.parent.showButton();
    }
  }

  public onRouteChanged(router, route): void {
    console.log('onRouteChanged');
    /*
    if (++this.parent.mRouteCount == 1) {
      // Show the button when a device is discovered
      this.parent.showButton();
    }
    */
  }

  public onRouteRemoved(router, route): void {
    console.log('onRouteRemoved');
    if (--this.parent.mRouteCount == 0) {
      // Hide the button if there are no devices discovered
      this.parent.hideButton();
    }
  }

  public onRouteSelected(router, info): void {
    console.log('onRouteSelected');
    // Handle route selection.
    const mSelectedDevice = CastDevice.getFromBundle(info.getExtras());
    console.log(mSelectedDevice);

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

export class MainViewModel extends Observable {
  public count: number;
  public message: string;
  public castVisibility: string;
  public mediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  public mRouteCount: number;

  constructor() {
    super();

    this.count = 0;
    this.message = 'hello';
    this.castVisibility = 'collapsed';  // mediaRouterCallback sets to visible onRouteAdded
    this.mRouteCount = 0;
    this.mediaRouterCallback = new MediaRouterCallback(this);
  }

  showButton(): void {
    this.set('castVisibility', 'visible');
  }

  hideButton(): void {
    this.set('castVisibility', 'collapsed');
  }

  onTap(args: EventData) {
    this.count++;
    const button = <Button>args.object;
    button.text = `Tapped ${this.count} times`;
  }
}
