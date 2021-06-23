import { CastButton } from './cast.android';

@NativeClass()
class RemoteMediaClientCallback extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
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

export { RemoteMediaClientCallback };
