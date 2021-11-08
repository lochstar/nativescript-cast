import {
  setActivityCallbacks,
  AndroidActivityCallbacks,
} from 'tns-core-modules/ui/frame';

@JavaProxy('org.nativescript.cast.ExpandedControlsActivity')
class ExpandedControlsActivity extends com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity {
  private _callbacks: AndroidActivityCallbacks;

  public onCreate(savedInstanceState: android.os.Bundle): void {
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }
    this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
  }

  public onCreateOptionsMenu(menu): boolean {
    //super.onCreateOptionsMenu(menu);
    console.log('onCreateOptionsMenu');

    return true;
  }

  public onDestroy(): void {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public onRequestPermissionsResult(requestCode: number, permissions: Array<string>, grantResults: Array<number>): void {
    this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
  }

}
