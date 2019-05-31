import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';
import { CastEvent, CastMediaInfo, CastMediaStatus, CastChannel } from 'nativescript-cast/cast.types';

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public channelConnected: boolean;

  public mediaInfo: CastMediaInfo;
  public mediaStatus: CastMediaStatus;
  public customChannel: CastChannel;

  public mediaInfoString: string;
  public mediaStatusString: string;

  constructor() {
    super();

    this.cast = null;
    this.canCast = false;
    this.channelConnected = false;
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
      duration: undefined,
      metadata: {
        metadataType: 'MOVIE',
        title: 'Tears of Steel',
        subtitle: 'By Blender Foundation',
        description: 'Tears of Steel is licensed as Creative Commons Attribution 3.0.',
        images: [
          {
            url: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/2/24/Space_eSportslogo_square.png?version=1352e7508b7e001da75af441b9221997',
            width: 300,
            height: 300,
          }
        ]
      },
      textTracks: [
        {
          src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt',
          contentType: 'text/vtt',
          name: 'english',
          language: 'en'
        },
        {
          src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt',
          contentType: 'text/vtt',
          name: 'spanish',
          language: 'es'
        }
      ]
    };

    this.cast.loadMedia(media);
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

  handleAddChannelTap() {
    if (!this.customChannel) {
      const channelArgs = {
        namespace: 'urn:x-cast:com.smashedcrab.cast.radio',
        didConnect: () => {
          console.log('channel didConnect');
        },
        didDisconnect: () => {
          console.log('channel didDisconnect');
        },
        didReceiveTextMessage: (message) => {
          console.log('channel didReceiveTextMessage');
          console.log(message);
        },
      };
      this.customChannel = this.cast.addChannel(channelArgs);
      console.log('customChannel');
      console.log(this.customChannel);
      if (this.customChannel) {
        this.set('channelConnected', true);
      }
    }
  }

  handleRemoveChannelTap() {
    const removed = this.cast.removeChannel(this.customChannel);
    if (removed) {
      this.set('channelConnected', false);
      this.customChannel = null;
    }
  }

  handleSendMessageTap() {
    this.cast.sendMessage(this.customChannel, {
      cmd: 'changeBg'
    });
  }
}
