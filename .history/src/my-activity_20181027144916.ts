import {
  setActivityCallbacks,
  setFragmentCallbacks,
  AndroidActivityCallbacks,
  AndroidFragmentCallbacks
} from "ui/frame";
import { View } from "ui/page";

// android.app.Activity
// android.support.v4.app.FragmentActivity

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

  /*
  onNewIntent(activity: any, superFunc: Function);
  onPause(activity: any, superFunc: Function);
  onPostResume(activity: any, superFunc: Function);
  onResume(activity: any, superFunc: Function);
  onResumeFragments(activity: any, superFunc: Function);
  */
}

@JavaProxy("org.nativescript.cast.MyNativeScriptActivity")
class MyNativeScriptActivity extends android.support.v4.app.FragmentActivity {
  private _callbacks: AndroidActivityCallbacks;

  public onCreate(savedInstanceState: android.os.Bundle): void {
    console.log('onCreate');
    if (!this._callbacks) {
      console.log('setting callbacks');
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
