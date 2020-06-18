import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';
import { Switch } from 'tns-core-modules/ui/switch';
import {
  CastEvent, CastMediaInfo, CastMediaStatus, PlayerState, RepeatMode,
  // LoadQueueOptions,
} from 'nativescript-cast/cast.types';

export class MainViewModel extends Observable {
  public cast: any;
  public canCast: boolean;
  public hasCast: boolean;
  public hasControl: boolean;

  public autoplay: boolean;
  public beforeItemID: number;
  public itemIDs: string;
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
      contentId: 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8',
      contentType: 'video/mp4',
      streamType: 'LIVE',
      duration: Infinity,
      metadata: {
        metadataType: 'MUSIC_TRACK',
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
    {
      contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      contentType: 'video/mp4',
      streamType: 'BUFFERED',
      duration: 596,
      metadata: {
        metadataType: 'MOVIE',
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
      ],
      textTrackStyle: {
        foregroundColor: '#0000cc',
        backgroundColor: '#00cc00',
      }
    },
  ];

  constructor() {
    super();

    this.cast = null;
    this.canCast = false;
    this.hasCast = false;
    this.hasControl = false;

    this.autoplay = true;
    this.beforeItemID = 0;
    this.itemIDs = '';
    this.repeatMode = RepeatMode.ALL;
  }

  handleCastEvent(args): void {
    console.log('event: ' + args.data.eventName);

    if (args.object && !this.cast) {
      this.cast = args.object;
    }

    switch (args.data.eventName) {
      case CastEvent.onProviderAdded:
        this.set('hasCast', true);
        this.cast.setTintColor('#ffffff');
        break;

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
      case CastEvent.onDidReceiveQueueItemIDs:
        this.set('queueItemIDs', args.data.queueItemIDs);
        break;
      case CastEvent.onDidReceiveQueueItems:
        this.set('queueItems', args.data.queueItems);
        this.set('queueItemsString', JSON.stringify(args.data.queueItems, null, '  '));
        break;
      case CastEvent.onDidUpdateQueue:
        this.cast.queueFetchItemIDs();
        break;
      default:
        break;
    }
  }

  handleAutoplaySwitchLoaded(argsloaded) {
    const mySwitch: Switch = <Switch> argsloaded.object;
    mySwitch.on('checkedChange', (args) => {
      const sw: Switch = <Switch> args.object;
      this.set('autoplay', sw.checked);
    });
  }

  handleLoadTap(args: EventData) {
    /*
    this.cast.loadMedia(this.mediaItems[2], {
      autoplay: this.autoplay,
      activeTrackIds: [1],
      // playbackRate: 2,
      startTime: 22,
    });
    */

    const items = this.mediaItems.map(item => {
      return {
        mediaInformation: item,
        autoplay: this.autoplay
      };
    });

    this.cast.loadQueue({
      // clientCacheSize: 25,
      // maxFetchCount: 25,

      items: items,
      // name:  'Demo Queue',
      // queueID: 'demp-queue',
      // repeatMode: this.repeatMode,
      // startTime: 60,
      // startIndex: 1,
    });
  }

  handleShowControllerTap() {
    this.cast.showController();
  }

  handleShowInstructionsTap() {
    this.cast.showCastInstructions();
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
    this.cast.seekMedia(23);
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

  handleQueueSetRepeatMode() {
    const newRepeat = this.mediaStatus.queueData.repeatMode === RepeatMode.ALL ? RepeatMode.ALL_AND_SHUFFLE : RepeatMode.ALL;
    this.cast.queueSetRepeatMode(newRepeat);
  }

  handleGetQueueItemsTap(args: EventData) {
    this.cast.queueFetchItemsForIDs(this.queueItemIDs);
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
    this.cast.queueRemoveItemsWithIDs(ids);
  }

  handleReorderItemsTap() {
    const ids = this.itemIDs.split(',').map(n => parseInt(n));
    this.cast.queueReorderItemsWithIDs(ids, this.beforeItemID);
  }

  handleJumpToItemWithID() {
    const ids = this.itemIDs.split(',').map(n => parseInt(n));
    this.cast.queueJumpToItemWithID(ids);
  }

  // TODO
  handleQueueUpdateItems() {
    const updatedItems = this.queueItems.map(item => {
      return {
        ...item,
        mediaInformation: {
          ...item.mediaInformation,
          metadata: {
            ...item.mediaInformation.metadata,
            title: `${item.mediaInformation.metadata.title} Updated`
          }
        },
      };
    });

    this.cast.queueUpdateItems({
      items: updatedItems
    });
  }

}
