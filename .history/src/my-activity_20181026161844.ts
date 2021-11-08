import {
  setActivityCallbacks,
  setFragmentCallbacks,
  AndroidActivityCallbacks,
  AndroidFragmentCallbacks
} from "ui/frame";

// android.app.Activity
// android.support.v4.app.FragmentActivity

@JavaProxy("org.nativescript.currencyconversion.MyNativeScriptActivity")
class MyNativeScriptActivity extends android.support.v4.app.FragmentActivity {
  private _callbacks: AndroidActivityCallbacks;

  public onCreate(savedInstanceState: android.os.Bundle): void {
    console.log('onCreate');
    if (!this._callbacks) {
      setActivityCallbacks(this);
    }

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

  public onNewIntent(intent): void {
    console.log('onNewIntent');
    //this._callbacks.onNewIntent(this, super.onNewIntent);
  }

  public onNewIntent(activity, superFunc: Function): void {
    superFunc.call(activity);

    const rootView = this._rootView;
    if (rootView && rootView.isLoaded) {
      rootView.callUnloaded();
    }
  }

  /*
  public onPause(): void {
    console.log('onPause');
    //this._callbacks.onPause(this, super.onPause);
  }

  public onPostResume(): void {
    console.log('onPostResume');
    //this._callbacks.onPostResume(this, super.onPostResume);
  }

  public onResume(): void {
    console.log('onResume');
    //this._callbacks.onResume(this, super.onResume);
  }

  public onResumeFragments(): void {
    console.log('onResumeFragments');
    //this._callbacks.onResumeFragments(this, super.onResumeFragments);
  }
  */
}
