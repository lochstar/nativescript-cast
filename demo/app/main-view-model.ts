import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';
import {CastEventName} from "nativescript-cast/cast.common";

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public mediaInfo: string;
  public mediaStatus: string;

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
      case CastEventName.onSessionStarted:
        case CastEventName.onSessionResumed:
        this.set('canCast', true);
        break;
      case CastEventName.onSessionEnding:
      case CastEventName.onSessionEnded:
        this.set('canCast', false);
        break;
      case CastEventName.onDeviceVolumeChanged:
        console.log('volume: ' + args.data.volume);
        break;
      case CastEventName.onMediaStatusChanged:
          this.set('mediaInfo', JSON.stringify(args.data.status, null, '  '));
          this.set('mediaStatus', JSON.stringify(args.data.info, null, '  '));
          break;
      default:
        break;
    }
  }

  handleLoadTap(args: EventData) {

    // multi-audio, subtitles not matching audio:
    // amssamples.streaming.mediaservices.windows.net/f1ee994f-fcb8-455f-a15d-07f6f2081a60/Sintel_MultiAudio.ism/manifest

    this.cast.loadMedia({
      contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
      contentType: 'application/vnd.ms-sstr+xml',
      streamType: 'BUFFERED',
      duration: undefined,
      metadata: {
        metadataType: 'MOVIE',
        title: 'TearsOfSteel',
        subtitle: 'By Blender Foundation',
        description: 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
        images: [
          {
            url: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/2/24/Space_eSportslogo_square.png?version=1352e7508b7e001da75af441b9221997',
            width: 300,
            height: 300,
          }
        ]
      },
        textTracks: [{
          src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt',
            contentType: 'text/vtt',
            name: 'english',
            language: 'en'
        },{
            src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt',
            contentType: 'text/vtt',
            name: 'spanish',
            language: 'es'
        }
        ]
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

  handleTest() {
    this.cast.setActiveTrackIds([2]);
  }
}
