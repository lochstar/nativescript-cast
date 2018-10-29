import * as application from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';
import { Page, NavigatedData } from "tns-core-modules/ui/page";
import { ad } from 'tns-core-modules/utils/utils';
import { EventData, View } from 'tns-core-modules/ui/core/view';

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public parent: MainViewModel;

  constructor(parent) {
    super();

    this.parent = parent;

    return global.__native(this);
  }

  public onProviderAdded(router, provider): void {
    console.log('onProviderAdded');
  }

  public onProviderChanged(router, provider): void {
    console.log('onProviderChanged');
    //console.dir(router);
    //console.dir(provider);
    //this.parent.hideButton();
  }

  public onProviderRemoved(router, provider): void {
    console.log('onProviderRemoved');
  }

  public onRouteAdded(router, route): void {
    console.log('onRouteAdded');
    /*
    if (++this.parent.mRouteCount == 1) {
      // Show the button when a device is discovered
      this.parent.showButton();
    }
    */
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

  public onRoutePresentationDisplayChanged(router, route): void {
    console.log('onRoutePresentationDisplayChanged');
  }

  public onRouteRemoved(router, route): void {
    console.log('onRouteRemoved');
    /*
    if (--this.parent.mRouteCount == 0) {
      // Hide the button if there are no devices discovered
      this.parent.hideButton();
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

export class MainViewModel extends Observable {
  public count: number;
  public message: string;
  public castVisibility: string;
  //public mediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  //public mediaRouterCallback: any;
  public mRouteCount: number;

  constructor() {
    super();

    this.count = 0;
    this.message = 'hello';
    this.castVisibility = 'visible';
    this.mRouteCount = 0;

    //this.mediaRouterCallback = new MediaRouterCallback();
    //this.mediaRouterCallback = new MediaRouterCallback(this);
  }

  //public mediaRouterCallback = new MediaRouterCallback()

  mediaRouterCallback() {
    return new MediaRouterCallback(this);
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
    button.text = `Tapped ${this.mRouteCount} times`;

    //const page = button.page;
    //console.log("Page reference from button tap event: ", page);

    this.castVisibility === 'visible' ? this.hideButton() : this.showButton();
  }
}
