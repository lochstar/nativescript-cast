import {
  ad
} from 'tns-core-modules/utils/utils';
import {
  Observable
} from 'tns-core-modules/data/observable';
import {
  EventData
} from 'tns-core-modules/ui/core/view';

const CastContext = com.google.android.gms.cast.framework.CastContext;
const CastDevice = com.google.android.gms.cast.CastDevice;
const MediaInfo = com.google.android.gms.cast.MediaInfo;
const MediaMetadata = com.google.android.gms.cast.MediaMetadata;

export class MainViewModel extends Observable {
  public count: number;
  public message: string;
  public castVisibility: string;
  //public mediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  public mRouteCount: number;

  public mCastContext: any;
  public mSessionManager: any;
  public remoteMediaClient: any;

  constructor() {
    super();

    this.count = 0;
    this.message = 'hello';
    this.castVisibility = 'collapsed'; // mediaRouterCallback sets to visible onRouteAdded
    this.mRouteCount = 0;
    //this.mediaRouterCallback = new MediaRouterCallback(this);

    /*
    const appContext = ad.getApplicationContext();
    this.mCastContext = CastContext.getSharedInstance(appContext);
    this.mSessionManager = this.mCastContext.getSessionManager();

    this.mSessionManager.addSessionManagerListener(new SessionManagerListener());
    */
  }

  handleMediaRouterEvent(event): void {
    switch (event.mediaRouterEventName) {
      case 'onRouteAdded':
        if (++this.mRouteCount == 1) {
          // Show the button when a device is discovered
          this.showButton();
        }
        break;
      case 'onRouteChanged':
        if (++this.mRouteCount == 1) {
          // Show the button when a device is discovered
          this.showButton();
        }
        break;
      case 'onRouteRemoved':
        if (--this.mRouteCount == 0) {
          // Hide the button if there are no devices discovered
          this.hideButton();
        }
        break;
      case 'onRouteSelected':
        // Handle route selection.
        const mSelectedDevice = CastDevice.getFromBundle(event.info.getExtras());
        if (mSelectedDevice) {
          console.log(mSelectedDevice);
          console.log(mSelectedDevice.getIpAddress());
        }
        break;
      case 'onRouteUnselected':
        //mSelectedDevice = null;
        break;
      default:
        console.log('mediaRouterEvent: ' + event.mediaRouterEventName);
        break;
    }
  }

  handleSessionEvent(event): void {
    switch (event.sessionEventName) {
      case 'onSessionStarted':
        const metadata = new MediaMetadata();
        metadata.putString(MediaMetadata.KEY_TITLE, 'doublej');
        metadata.putString(MediaMetadata.KEY_SUBTITLE, 'Double J');

        const contentId = 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8';
        const mediaInfo = new MediaInfo.Builder(contentId)
          .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)
          .setContentType('application/x-mpegurl')
          .setMetadata(metadata)
          //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
          .build();

        const session = event.session;
        this.remoteMediaClient = session.getRemoteMediaClient();
        this.remoteMediaClient.load(mediaInfo);
        break;
      default:
        console.log('sessionEvent: ' + event.sessionEventName);
        break;
    }
  }

  showButton(): void {
    this.set('castVisibility', 'visible');
  }

  hideButton(): void {
    this.set('castVisibility', 'collapsed');
  }

  onTap(args: EventData) {
    this.count++;
    const button = <Button>args.object;
    button.text = `Tapped ${this.count} times`;
  }
}
