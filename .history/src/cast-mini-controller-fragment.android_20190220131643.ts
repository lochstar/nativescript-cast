import {
  AndroidFragmentCallbacks,
  setFragmentCallbacks,
} from 'tns-core-modules/ui/frame';

@JavaProxy('org.nativescript.cast.MiniControllerFragment')
class MiniControllerFragment extends com.google.android.gms.cast.framework.media.widget.MiniControllerFragment {
  private _callbacks: AndroidFragmentCallbacks;

  constructor() {
    super();
    return global.__native(this);
  }

  public onStop(): void {
    this._callbacks.onStop(this, super.onStop);
  }

  public onCreate(savedInstanceState: android.os.Bundle) {
    if (!this._callbacks) {
      setFragmentCallbacks(this);
    }
    this._callbacks.onCreate(this, savedInstanceState, super.onCreate);
  }

  public onCreateView(inflater: android.view.LayoutInflater, container: android.view.ViewGroup, savedInstanceState: android.os.Bundle) {
    let result = this._callbacks.onCreateView(this, inflater, container, savedInstanceState, super.onCreateView);
    return result;
  }

  public onCreateOptionsMenu(menu): boolean {
    //super.onCreateOptionsMenu(menu);
    console.log('onCreateOptionsMenu');
    return true;
  }

  public onSaveInstanceState(outState: android.os.Bundle) {
    this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
  }

  public onDestroyView() {
    this._callbacks.onDestroyView(this, super.onDestroyView);
  }

  public onDestroy() {
    this._callbacks.onDestroy(this, super.onDestroy);
  }

  public toString(): string {
    const callbacks = this._callbacks;
    if (callbacks) {
      return callbacks.toStringOverride(this, super.toString);
    } else {
      super.toString();
    }
  }

}
