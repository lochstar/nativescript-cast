import {
  setActivityCallbacks,
  AndroidActivityCallbacks,
} from 'tns-core-modules/ui/frame';

@JavaProxy('org.nativescript.cast.ExpandedControlsActivity')
class ExpandedControlsActivity extends com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity {

  public onCreateOptionsMenu(menu): void {
    console.log('onCreateOptionsMenu');
  }

}
