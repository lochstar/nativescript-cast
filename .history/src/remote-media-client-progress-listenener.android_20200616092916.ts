import { CastButton } from './cast.android';

interface ProgressListener {
  new(owner): com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener;
}

let ProgressListener: ProgressListener;

export function initProgressListener(): void {
  if (ProgressListener) {
    return;
  }

  @Interfaces([com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener])
  // @ts-ignore
  class ProgressListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener {
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
    }
  }

  ProgressListener = ProgressListenerImpl;
}
