import {
  setActivityCallbacks,
  AndroidActivityCallbacks,
} from 'tns-core-modules/ui/frame';

declare const R: any;
const CastButtonFactory = com.google.android.gms.cast.framework.CastButtonFactory;

@JavaProxy('org.nativescript.cast.ExpandedControlsActivity')
class ExpandedControlsActivity extends com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity {
  /*
  private _callbacks: AndroidActivityCallbacks;

  public onCreateOptionsMenu(menu: android.view.Menu): boolean {
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }
    this._callbacks.onCreateOptionsMenu(this, menu, super.onCreateOptionsMenu);
    getMenuInflater().inflate(R.menu.expanded_controller, menu);
    CastButtonFactory.setUpMediaRouteButton(this._context, menu, R.id.media_route_menu_item);
    return true;
  }
  */
}
