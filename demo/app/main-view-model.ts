import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';
import { CastEvent, CastMediaInfo, CastMediaStatus, PlayerState } from 'nativescript-cast/cast.types';

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public hasControl: boolean;

  public mediaInfo: CastMediaInfo;
  public mediaStatus: CastMediaStatus;

  public mediaInfoString: string;
  public mediaStatusString: string;

  constructor() {
    super();

    this.cast = null;
    this.canCast = false;
    this.hasControl = false;
  }

  handleCastEvent(args): void {
    console.log('event: ' + args.data.eventName);

    if (args.object && !this.cast) {
      this.cast = args.object;
    }

    switch (args.data.eventName) {
      case CastEvent.onSessionStarted:
        case CastEvent.onSessionResumed:
        this.set('canCast', true);
        break;
      case CastEvent.onSessionEnding:
      case CastEvent.onSessionEnded:
        this.set('canCast', false);
        break;
      case CastEvent.onDeviceVolumeChanged:
        console.log('volume: ' + args.data.volume);
        break;
      case CastEvent.onMediaStatusChanged:
        this.set('mediaInfo', args.data.info);
        this.set('mediaStatus', args.data.status);
        this.set('mediaInfoString', JSON.stringify(args.data.info, null, '  '));
        this.set('mediaStatusString', JSON.stringify(args.data.status, null, '  '));
        const status = args.data.status as CastMediaStatus;

        this.set('hasControl', status && status.playerState !== PlayerState.IDLE);
        break;
      default:
        break;
    }
  }

  handleLoadTap(args: EventData) {
    // multi-audio, subtitles not matching audio:
    // amssamples.streaming.mediaservices.windows.net/f1ee994f-fcb8-455f-a15d-07f6f2081a60/Sintel_MultiAudio.ism/manifest

    const media: CastMediaInfo = {
      contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
      contentType: 'application/vnd.ms-sstr+xml',
      streamType: 'BUFFERED',
      duration: 734,
      metadata: {
        metadataType: 'MOVIE',
        title: 'Tears of Steel',
        subtitle: 'By Blender Foundation',
        description: 'Tears of Steel is licensed as Creative Commons Attribution 3.0.',
        images: [
          {
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_480x270/TearsOfSteel.jpg',
            width: 480,
            height: 270,
          },
          {
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_780x1200/TearsOfSteel-780x1200.jpg',
            width: 780,
            height: 1200,
          }
        ]
      },
      textTracks: [
        {
          src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt',
          contentType: 'text/vtt',
          name: 'English',
          language: 'en'
        },
        {
          src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt',
          contentType: 'text/vtt',
          name: 'Spanish',
          language: 'es'
        }
      ]
    };

    this.cast.loadMedia(media);
  }

  handleShowControllerTap() {
    this.cast.showController();
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

  handleSwitchTextTrackTap() {
    if (!this.mediaStatus.activeTrackIds.length) {
      this.cast.setActiveTrackIds([1]);
    } else if (this.mediaStatus.activeTrackIds[0] === 1) {
      this.cast.setActiveTrackIds([2]);
    } else {
      this.cast.setActiveTrackIds([]);
    }
  }
}
