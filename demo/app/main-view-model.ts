import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public mediaInfo: string;

  constructor() {
    super();

    this.cast = null;
    this.canCast = false;
  }

  handleCastEvent(args): void {
    console.log('event: ' + args.data.eventName);

    if (args.object && !this.cast) {
      this.cast = args.object;
    }

    switch (args.data.eventName) {
      case 'onSessionStarted':
      case 'onSessionResumed':
        this.set('canCast', true);
        break;
      case 'onSessionEnding':
      case 'onSessionEnded':
        this.set('canCast', false);
        break;
      case 'onDeviceVolumeChanged':
        console.log('volume: ' + args.data.volume);
        break;
      default:
        break;
    }
  }

  handleLoadTap(args: EventData) {
    this.cast.loadMedia({
      contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      contentType: 'video/mp4',
      streamType: 'BUFFERED',
      duration: undefined,
      metadata: {
        metadataType: 'MOVIE',
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

  handlePlayTap(args: EventData) {
    this.cast.playMedia();
  }

  handlePauseTap(args: EventData) {
    this.cast.pauseMedia();
  }

  handleSeekTap(args: EventData) {
    this.cast.seekMedia(23);
  }

  handleStopTap(args: EventData) {
    this.cast.stopMedia();
  }

  handleGetMediaInfoTap() {
    const mediaInfo = this.cast.getMediaInfo();
    this.set('mediaInfo', JSON.stringify(mediaInfo, null, '  '));
  }
}
