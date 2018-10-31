import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';

const CastDevice = com.google.android.gms.cast.CastDevice;
const MediaInfo = com.google.android.gms.cast.MediaInfo;
const MediaMetadata = com.google.android.gms.cast.MediaMetadata;
const WebImage = com.google.android.gms.common.images.WebImage;

export class MainViewModel extends Observable {
  public count: number;
  public message: string;
  public castVisibility: string;

  public mRouteCount: number;
  public remoteMediaClient: any;
  public mSelectedDevice: any;
  public mSelectedDeviceName: string;
  public mSelectedDeviceIp: string;

  constructor() {
    super();

    this.count = 0;
    this.message = 'hello';
    this.castVisibility = 'collapsed';

    this.mRouteCount = 0;
    this.mSelectedDevice = null;
    this.mSelectedDeviceName = '';
    this.mSelectedDeviceIp = '';
  }

  handleMediaRouterEvent(event): void {
    switch (event.data.mediaRouterEventName) {
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
        this.mSelectedDevice = CastDevice.getFromBundle(event.data.route.getExtras());
        if (this.mSelectedDevice) {
          this.set('mSelectedDeviceName', this.mSelectedDevice.getFriendlyName());
          this.set('mSelectedDeviceIp', this.mSelectedDevice.getIpAddress());
        }
        break;
      case 'onRouteUnselected':
        this.mSelectedDevice = null;
        break;
      default:
        console.log('mediaRouterEvent: ' + event.data.mediaRouterEventName);
        break;
    }
  }

  handleSessionEvent(event): void {
    switch (event.data.sessionEventName) {
      case 'onSessionStarted':
        const metadata = new MediaMetadata();
        metadata.putString(MediaMetadata.KEY_TITLE, 'Big Buck Bunny');
        metadata.putString(MediaMetadata.KEY_SUBTITLE, 'By Blender Foundation');

        const uri = android.net.Uri.parse('https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg')
        const thumbnail = new WebImage(uri, 768, 1158);
        metadata.addImage(thumbnail);

        const contentId = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        const mediaInfo = new MediaInfo.Builder(contentId)
          .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)
          .setContentType('video/mp4')
          .setMetadata(metadata)
          .build();
        /*
        const contentId = 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8';
        const mediaInfo = new MediaInfo.Builder(contentId)
          .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)  // STREAM_TYPE_LIVE ?
          .setContentType('application/x-mpegurl')
          .setMetadata(metadata)
          //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
          .build();
        */

        const session = event.data.session;
        this.remoteMediaClient = session.getRemoteMediaClient();
        this.remoteMediaClient.load(mediaInfo);
        break;
      default:
        console.log('sessionEvent: ' + event.data.sessionEventName);
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
