import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';

export class MainViewModel extends Observable {
  public count: number;
  public message: string;
  public textData: string;
  public castVisibility: string;

  public cast: any;
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

    this.cast = null;
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
    if (event.object && !this.cast) {
      this.cast = event.object;
    }

    switch (event.data.sessionEventName) {
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

  onLoadTap(args: EventData) {
    this.cast.loadMedia({
      contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      contentType: 'video/mp4',
      streamType: 'BUFFERED',  // LIVE, NONE
      duration: undefined,
      metadata: {
        metadataType: 1,
        title: 'Sintel',
        subtitle: 'By Blender Foundation',
        description: 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
        images: [
          {
            url: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/2/24/Space_eSportslogo_square.png?version=1352e7508b7e001da75af441b9221997',
            width: 300,
            height: 300,
          }
        ]
      }
    });
  }

  onPlayTap(args: EventData) {
    this.cast.playMedia();
  }

  onPauseTap(args: EventData) {
    this.cast.pauseMedia();
  }

  onSeekTap(args: EventData) {
    this.cast.seekMedia(23);
  }

  onStopTap(args: EventData) {
    this.cast.stopMedia();
  }

  onGetMediaInfoTap() {
    const mediaInfo = this.cast.getMediaInfo();
    this.set('textData', JSON.stringify(mediaInfo, null, '  '));
  }
}
