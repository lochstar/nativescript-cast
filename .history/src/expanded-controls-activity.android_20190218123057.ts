@JavaProxy('org.nativescript.cast.ExpandedControlsActivity')
class ExpandedControlsActivity extends com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity {

  public onCreate(savedInstanceState: android.os.Bundle): void {
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }
    this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
  }

  public onCreateOptionsMenu(menu): void {
    console.log('onCreateOptionsMenu');
  }

}
