import { CastButton } from './cast.android';

function setup() {
  @NativeClass()
  export class RemoteMediaClientCallback extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
    public owner: CastButton;

    constructor(owner) {
      super();

      this.owner = owner;

      return global.__native(this);
    }

    public onStatusUpdated() {
      this.owner.onMediaStatusUpdate();
    }

    public onMetadataUpdated() {
    }

    public onQueueStatusUpdated() {
    }

    public onPreloadStatusUpdated() {
    }

    public onSendingRemoteMediaRequest() {
    }

    public onAdBreakStatusUpdated() {
    }
  }
  return RemoteMediaClientCallback;
}

export const RemoteMediaClientCallback = setup();
