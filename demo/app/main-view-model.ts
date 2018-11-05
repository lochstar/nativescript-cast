import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';

/*
const CastDevice = com.google.android.gms.cast.CastDevice;
const MediaInfo = com.google.android.gms.cast.MediaInfo;
const MediaMetadata = com.google.android.gms.cast.MediaMetadata;
const WebImage = com.google.android.gms.common.images.WebImage;
*/

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
    //this.castVisibility = 'collapsed';
    //this.castVisibility = 'visible';

    this.mRouteCount = 0;
    this.mSelectedDevice = null;
    this.mSelectedDeviceName = '';
    this.mSelectedDeviceIp = '';
  }

  handleMediaRouterEvent(event): void {
    switch (event.data.mediaRouterEventName) {
      case 'onRouteSelected':
        // Handle route selection.
        console.log('onRouteSelected');
        //this.mSelectedDevice = event.object.mSelectedDevice;
        this.mSelectedDevice = event.object.CastDevice.getFromBundle(event.data.route.getExtras());
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
        console.log('onSessionStarted');

        event.object.loadMedia({
          contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          contentType: 'video/mp4',
          streamType: 1,
          duration: undefined,
          metadata: {
            metadataType: 1,
            //albumName: stations[station].name,
            //albumArtist: artist,
            //artist: artist,
            title: 'Big Buck Bunny',
            subtitle: 'By Blender Foundation',
            images: [
              {
                url: 'https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg',
                width: 768,
                height: 1158,
              }
            ]
          }
        });

        /*
        const metadata = new MediaMetadata(MediaMetadata.MEDIA_TYPE_MOVIE);
        metadata.putString(MediaMetadata.KEY_TITLE, 'Big Buck Bunny');
        metadata.putString(MediaMetadata.KEY_SUBTITLE, 'By Blender Foundation');

        const uri = android.net.Uri.parse('https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg')
        const thumbnail = new WebImage(uri, 768, 1158);
        metadata.addImage(thumbnail);

        const contentId = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        const mediaInfo = new MediaInfo.Builder(contentId)
          .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)
          .setContentType('videos/mp4')
          .setMetadata(metadata)
          //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
          .build();
        */

        /*
        const contentId = 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8';
        const mediaInfo = new MediaInfo.Builder(contentId)
          .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)  // STREAM_TYPE_LIVE ?
          .setContentType('application/x-mpegurl')
          .setMetadata(metadata)
          //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
          .build();
        */

        /*
        const autoPlay = true;
        const position = 0;
        const session = event.data.session;
        this.remoteMediaClient = session.getRemoteMediaClient();
        this.remoteMediaClient.load(mediaInfo, autoPlay, position);
        */
        break;
      default:
        console.log('sessionEvent: ' + event.data.sessionEventName);
        break;
    }
  }

  onTap(args: EventData) {
    this.count++;
    const button = <Button>args.object;
    button.text = `Tapped ${this.count} times`;
  }
}
