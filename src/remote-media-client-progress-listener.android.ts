// import { CastButtonBase } from './cast.common';
import { CastButton } from './cast.android';
// import { CastEvent } from './cast.types';

@Interfaces([com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener])
// @ts-ignore
export class ProgressListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  onProgressUpdated(progressMs: number, durationMs: number): void {
    console.log('onProgressUpdated');
    console.log(progressMs, durationMs);
    /*
    this.owner.sendEvent(CastButtonBase.progressEvent, {
      eventName: CastEvent.onProgressUpdated,
      progressMs: progressMs,
      durationMs: durationMs,
      android: this.owner.nativeView
    });
    */
  }
}
