import { EventData, Observable, Switch } from '@nativescript/core';
import {
  CastEvent,
  CastMediaInfo,
  CastMediaStatus,
  PlayerState,
  RepeatMode,
  StreamType,
  MetadataType,
} from '@codelab/nativescript-cast/cast.types';

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public hasControl: boolean;

  public autoplay: boolean;
  public beforeItemID: number;
  public itemIDs: string;
  public itemIndex: string;
  public repeatMode: RepeatMode;

  public mediaInfo: CastMediaInfo;
  public mediaStatus: CastMediaStatus;
  public queueItems: any;
  public queueItemIDs: number[];

  public mediaInfoString: string;
  public mediaStatusString: string;
  public queueItemsString: string;

  public mediaItems: CastMediaInfo[] = [
    {
      contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
      contentType: 'application/vnd.ms-sstr+xml',
      streamType: StreamType.BUFFERED,
      duration: 734,
      metadata: {
        metadataType: MetadataType.MOVIE,
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
      ],
      textTrackStyle: {
        foregroundColor: '#0000cc',
        backgroundColor: '#00cc00',
      }
    },
    {
      contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      contentType: 'video/mp4',
      streamType: StreamType.BUFFERED,
      duration: 596,
      metadata: {
        metadataType: MetadataType.MOVIE,
        title: 'Big Buck Bunny',
        subtitle: 'By Blender Foundation',
        description: 'Big Buck Bunny is licensed as Creative Commons Attribution 3.0.',
        images: [
          {
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_480x270/BigBuckBunny.jpg',
            width: 480,
            height: 270,
          },
          {
            url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_780x1200/BigBuckBunny-780x1200.jpg',
            width: 780,
            height: 1200,
          }
        ]
      }
    },
    {
      contentId: 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8',
      contentType: 'video/mp4',
      streamType: StreamType.LIVE,
      duration: Infinity,
      metadata: {
        metadataType: MetadataType.MUSIC_TRACK,
        title: 'Double J',
        subtitle: 'Double J Radio',
        description: '',
        images: [
          {
            url: 'https://www.abc.net.au/cm/rimage/9990024-1x1-large.jpg',
            width: 700,
            height: 700,
          }
        ]
      }
    },
  ];

  constructor() {
    super();

    this.cast = null;
    this.canCast = false;
    this.hasControl = false;

    this.autoplay = true;
    this.beforeItemID = 0;
    this.itemIDs = '';
    this.itemIndex = '0';
    this.repeatMode = RepeatMode.ALL;
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
        const info = args.data.info as CastMediaInfo;
        const status = args.data.status as CastMediaStatus;

        this.set('mediaInfo', info);
        this.set('mediaInfoString', JSON.stringify(info, null, '  '));

        this.set('mediaStatus', status);
        this.set('mediaStatusString', JSON.stringify(status, null, '  '));

        this.set('hasControl', status && status.playerState !== PlayerState.IDLE);
        break;

      /*
      case CastEvent.mediaQueueChanged:
        this.cast.queueFetchItemIDs();
        break;
      case CastEvent.onDidReceiveQueueItemIDs:
        this.set('queueItemIDs', args.data.queueItemIDs);
        break;
      case CastEvent.onDidReceiveQueueItems:
        this.set('queueItems', args.data.queueItems);
        this.set('queueItemsString', JSON.stringify(args.data.queueItems, null, '  '));
        break;
      */
      default:
        break;
    }
  }

  handleCastLoaded(args) {
    console.log('handleCastLoaded');
    console.log(args);
  }

  handleAutoplaySwitchLoaded(args) {
    const mySwitch: Switch = <Switch> args.object;
    mySwitch.on('checkedChange', (args) => {
      const sw: Switch = <Switch> args.object;
      this.set('autoplay', sw.checked);
    });
  }

  handleLoadTap(args: EventData) {
    this.cast.loadMedia(this.mediaItems[2], {
      autoplay: this.autoplay,
      activeTrackIds: [1],
      // playbackRate: 2,
      // startTime: 22,
    });
  }

  handleLoadQueueTap(args: EventData) {
    const items = this.mediaItems.map(item => {
      return {
        mediaInformation: item,
        autoplay: this.autoplay
      };
    });

    this.cast.loadQueue({
      items: items,
      name:  'Demo Queue',
      queueID: 'demp-queue',
      repeatMode: this.repeatMode,
      // startTime: 60,
      // startIndex: 1,
    });
  }

  handleShowControllerTap() {
    this.cast.showController();
  }

  handleShowInstructionsTap() {
    this.cast.showCastInstructions('Touch to cast media to your TV', false);
  }

  handleShowDialogTap() {
    this.cast.showCastDialog();
  }

  handlePlayTap(args: EventData) {
    this.cast.playMedia();
  }

  handlePauseTap(args: EventData) {
    this.cast.pauseMedia();
  }

  handleSeekTap(args: EventData) {
    this.cast.seekMedia(10);
  }

  handleStopTap(args: EventData) {
    this.cast.stopMedia();
  }

  handleSetVolumeTap() {
    this.cast.setVolume(this.mediaStatus.volume === 1 ? 0.5 : 1);
  }

  handleMuteTap() {
    this.cast.setMuted(!this.mediaStatus.isMuted);
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

  handlePrevTap(args: EventData) {
    this.cast.queuePreviousItem();
  }

  handleNextTap(args: EventData) {
    this.cast.queueNextItem();
  }

  handleFetchQueueItemTap() {
    this.cast.queueFetchItemAtIndex(parseInt(this.itemIndex, 10));
  }

  handleInsertQueueItemTap() {
    this.cast.queueInsertItem({
      item: {
        mediaInformation: this.mediaItems[1],
        autoplay: this.autoplay
      },
      beforeItemID: this.beforeItemID,
    });
  }

  handleInsertQueueItemsTap() {
    const items = this.mediaItems.map(item => {
      return {
        mediaInformation: item,
      };
    });

    this.cast.queueInsertItems({
      items: items.slice(0, 2)
    });
  }

  handleRemoveItemsTap() {
    const ids = this.itemIDs.split(',').map(n => parseInt(n));
    this.cast.queueRemoveItems(ids);
  }

  handleReorderItemsTap() {
    const ids = this.itemIDs.split(',').map(n => parseInt(n));
    this.cast.queueReorderItems(ids, this.beforeItemID);
  }

  handleJumpToItem() {
    const ids = this.itemIDs.split(',').map(n => parseInt(n));
    this.cast.queueJumpToItem(ids[0]);
  }
}
