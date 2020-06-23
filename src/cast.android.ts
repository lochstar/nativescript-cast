import { ad } from 'tns-core-modules/utils/utils';
import { CastButtonBase } from './cast.common';
import {
  CastEvent,
  CastMediaInfo,
  CastMediaStatus,
  CastMetadata,
  CastTextTrack,
  PlayerState,
  MetadataType,
  StreamType,
  RepeatMode,
  LoadMediaOptions,
  LoadQueueOptions,
  QueueInsertItemOptions,
  QueueInsertItemsOptions,
  QueueUpdateItemsOptions,
  QueueItemOptions,
  QueueType,
} from './cast.types';
import { MediaRouterCallback } from './media-router-callback.android';
import { MediaQueueCallback } from './media-queue-callback.android';
import { RemoteMediaClientCallback } from './remote-media-client-callback.android';
import { SessionManagerListenerImpl } from './session-manager-listener.android';
// import { initProgressListener } from './remote-media-client-progress-listener.android';

declare var android: any;
declare var java: any;

// Session Manager Listener Interface
interface SessionManagerListener {
  new(owner): com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
}

let SessionManagerListener: SessionManagerListener;

function initSessionManagerListener(): void {
  if (SessionManagerListener) {
    return;
  }
  SessionManagerListener = SessionManagerListenerImpl;
}

// Progress Listener Interface
interface ProgressListener {
  new(owner): com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener;
}

let ProgressListener: ProgressListener;

export function initProgressListener(): void {
  if (ProgressListener) {
    return;
  }
}

const camelCase = require('lodash/fp/camelCase');
const snakeCase = require('lodash/fp/snakeCase');

const METADATA_PREFIX = 'KEY_';

// @ts-ignore
const ArrayList = java.util.ArrayList;
// @ts-ignore
const WebImage = com.google.android.gms.common.images.WebImage;

const {
  MediaRouter,
  MediaRouteSelector,
  MediaControlIntent
} = androidx.mediarouter.media;
const {
  CastButtonFactory,
  CastContext,
} = com.google.android.gms.cast.framework;
const {
  MediaInfo,
  MediaLoadRequestData,
  MediaMetadata,
  MediaQueueData,
  MediaQueueItem,
  MediaStatus,
  MediaTrack,
} = com.google.android.gms.cast;

export function metadataTypeEnumToString(metadataType: number): MetadataType {
  switch (metadataType) {
    case MediaMetadata.MEDIA_TYPE_MOVIE:
      return MetadataType.MOVIE;
    case MediaMetadata.MEDIA_TYPE_TV_SHOW:
      return MetadataType.TV_SHOW;
    case MediaMetadata.MEDIA_TYPE_MUSIC_TRACK:
      return MetadataType.MUSIC_TRACK;
    case MediaMetadata.MEDIA_TYPE_PHOTO:
      return MetadataType.PHOTO;
    case MediaMetadata.MEDIA_TYPE_USER:
      return MetadataType.USER;
    case MediaMetadata.MEDIA_TYPE_AUDIOBOOK_CHAPTER:
      return MetadataType.AUDIO_BOOK_CHAPTER;
    default:
      return MetadataType.GENERIC;
  }
}

export function metadataTypeStringToEnum(metadataType: MetadataType): number {
  switch (metadataType) {
    case MetadataType.MOVIE:
      return MediaMetadata.MEDIA_TYPE_MOVIE;
    case MetadataType.TV_SHOW:
      return MediaMetadata.MEDIA_TYPE_TV_SHOW;
    case MetadataType.MUSIC_TRACK:
      return MediaMetadata.MEDIA_TYPE_MUSIC_TRACK;
    case MetadataType.PHOTO:
      return MediaMetadata.MEDIA_TYPE_PHOTO;
    case MetadataType.AUDIO_BOOK_CHAPTER:
      return MediaMetadata.MEDIA_TYPE_AUDIOBOOK_CHAPTER;
    case MetadataType.USER:
      return MediaMetadata.MEDIA_TYPE_USER;
    default:
      return MediaMetadata.MEDIA_TYPE_GENERIC;
  }
}

export function streamTypeEnumToString(streamType: number): StreamType {
  switch (streamType) {
    case MediaInfo.STREAM_TYPE_BUFFERED:
      return StreamType.BUFFERED;
    case MediaInfo.STREAM_TYPE_LIVE:
      return StreamType.LIVE;
    case MediaInfo.STREAM_TYPE_INVALID:
      return StreamType.UNKNOWN;
    default:
      return StreamType.NONE;
  }
}

export function streamTypeStringToEnum(streamType: StreamType): number {
  switch (streamType) {
    case StreamType.BUFFERED:
      return MediaInfo.STREAM_TYPE_BUFFERED;
    case StreamType.LIVE:
      return MediaInfo.STREAM_TYPE_LIVE;
    case StreamType.UNKNOWN:
      return MediaInfo.STREAM_TYPE_INVALID;
    default:
      return MediaInfo.STREAM_TYPE_NONE;
  }
}

export function repeatModeStringToEnum(repeatMode: RepeatMode): number {
  switch (repeatMode) {
    case RepeatMode.OFF:
      return MediaStatus.REPEAT_MODE_REPEAT_OFF;
    case RepeatMode.SINGLE:
      return MediaStatus.REPEAT_MODE_REPEAT_SINGLE;
    case RepeatMode.ALL:
      return MediaStatus.REPEAT_MODE_REPEAT_ALL;
    case RepeatMode.ALL_AND_SHUFFLE:
      return MediaStatus.REPEAT_MODE_REPEAT_ALL_AND_SHUFFLE;
    default:
      return MediaStatus.REPEAT_MODE_REPEAT_OFF;
  }
}

export function repeatModeEnumToString(repeatMode: number): RepeatMode {
  switch (repeatMode) {
    case MediaStatus.REPEAT_MODE_REPEAT_OFF:
      return RepeatMode.OFF;
    case MediaStatus.REPEAT_MODE_REPEAT_SINGLE:
      return RepeatMode.SINGLE;
    case MediaStatus.REPEAT_MODE_REPEAT_ALL:
      return RepeatMode.ALL;
    case MediaStatus.REPEAT_MODE_REPEAT_ALL_AND_SHUFFLE:
      return RepeatMode.ALL_AND_SHUFFLE;
    default:
      return RepeatMode.OFF;
  }
}

export function queueTypeStringToEnum(queueType: QueueType): number {
  switch (queueType) {
    case QueueType.ALBUM:
      return MediaQueueData.MEDIA_QUEUE_TYPE_ALBUM;
    case QueueType.PLAYLIST:
      return MediaQueueData.MEDIA_QUEUE_TYPE_PLAYLIST;
    case QueueType.AUDIO_BOOK:
      return MediaQueueData.MEDIA_QUEUE_TYPE_AUDIO_BOOK;
    case QueueType.RADIO_STATION:
      return MediaQueueData.MEDIA_QUEUE_TYPE_RADIO_STATION;
    case QueueType.PODCAST_SERIES:
      return MediaQueueData.MEDIA_QUEUE_TYPE_PODCAST_SERIES;
    case QueueType.TV_SERIES:
      return MediaQueueData.MEDIA_QUEUE_TYPE_TV_SERIES;
    case QueueType.VIDEO_PLAYLIST:
      return MediaQueueData.MEDIA_QUEUE_TYPE_VIDEO_PLAYLIST;
    case QueueType.LIVE_TV:
      return MediaQueueData.MEDIA_QUEUE_TYPE_LIVE_TV;
    case QueueType.MOVIE:
      return MediaQueueData.MEDIA_QUEUE_TYPE_MOVIE;
    default:
      return MediaQueueData.MEDIA_QUEUE_TYPE_GENERIC;
  }
}

export function queueTypeEnumToString(queueType: number): QueueType {
  switch (queueType) {
    case MediaQueueData.MEDIA_QUEUE_TYPE_ALBUM:
      return QueueType.ALBUM;
    case MediaQueueData.MEDIA_QUEUE_TYPE_PLAYLIST:
      return QueueType.PLAYLIST;
    case MediaQueueData.MEDIA_QUEUE_TYPE_AUDIO_BOOK:
      return QueueType.AUDIO_BOOK;
    case MediaQueueData.MEDIA_QUEUE_TYPE_RADIO_STATION:
      return QueueType.RADIO_STATION;
    case MediaQueueData.MEDIA_QUEUE_TYPE_PODCAST_SERIES:
      return QueueType.PODCAST_SERIES;
    case MediaQueueData.MEDIA_QUEUE_TYPE_TV_SERIES:
      return QueueType.TV_SERIES;
    case MediaQueueData.MEDIA_QUEUE_TYPE_VIDEO_PLAYLIST:
      return QueueType.VIDEO_PLAYLIST;
    case MediaQueueData.MEDIA_QUEUE_TYPE_LIVE_TV:
      return QueueType.LIVE_TV;
    case MediaQueueData.MEDIA_QUEUE_TYPE_MOVIE:
      return QueueType.MOVIE;
    default:
      return QueueType.GENERIC;
  }
}

export function convertMediaInfo(mediaInfo: com.google.android.gms.cast.MediaInfo): CastMediaInfo {
  if (!mediaInfo) {
    return null;
  }
  const metadata = mediaInfo.getMetadata();
  const metaDataKeys = ad.collections.stringSetToStringArray(metadata.keySet());
  const images = metadata.getImages();
  const tracks = mediaInfo.getMediaTracks();
  const textTracks: CastTextTrack[] = [];

  if (tracks) {
    for (let i = 0; i < tracks.size(); i++) {
      const track = tracks.get(i);
      if (track.getType() === MediaTrack.TYPE_TEXT) {
        textTracks.push({
          id: track.getId(),
          src: track.getContentId(),
          contentType: track.getContentType(),
          name: track.getName(),
          language: track.getLanguage(),
        });
      }
    }
  }

  const castMetadata: CastMetadata = {
    metadataType: metadataTypeEnumToString(metadata.getMediaType()),
    images: [],
  };

  metaDataKeys.forEach(key => {
    const fixedKey = camelCase(key.replace('com.google.android.gms.cast.metadata.', ''));
    castMetadata[fixedKey] = metadata.getString(key);
  });

  if (images) {
    for (let index = 0; index < images.size(); index++) {
      const img = images.get(index);
      castMetadata.images.push({
        url: img.getUrl().toString(),
        width: img.getWidth(),
        height: img.getHeight()
      });
    }
  }

  return {
    contentId: mediaInfo.getContentId(),
    streamType: streamTypeEnumToString(mediaInfo.getStreamType()),
    contentType: mediaInfo.getContentType(),
    metadata: castMetadata,
    duration: mediaInfo.getStreamDuration() / 1000,
    textTracks
  };
}

export class CastButton extends CastButtonBase {
  public nativeView: androidx.mediarouter.app.MediaRouteButton;

  // public CastDevice: com.google.android.gms.cast.CastDevice;

  public mCastContext: com.google.android.gms.cast.framework.CastContext;
  public mSessionManager: com.google.android.gms.cast.framework.SessionManager;
  public mSessionManagerListener: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
  public mRemoteMediaClientCallback: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback;
  public mRemoteMediaClientProgressListener: com.google.android.gms.cast.framework.media.RemoteMediaClient.ProgressListener;
  public mMediaQeueuCallback: com.google.android.gms.cast.framework.media.MediaQueue.Callback;

  public mMediaRouter: androidx.mediarouter.media.MediaRouter;
  public mMediaRouterCallback: androidx.mediarouter.media.MediaRouter.Callback;
  public mMediaRouteSelector: androidx.mediarouter.media.MediaRouteSelector;

  constructor() {
    super();
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    const appContext = ad.getApplicationContext();

    initSessionManagerListener();
    // initProgressListener();

    // Create new instance of MediaRouteButton
    const button = new androidx.mediarouter.app.MediaRouteButton(this._context);

    // Wire up the MediaRouteButton to the Cast framework
    CastButtonFactory.setUpMediaRouteButton(appContext, button);

    // Create media router
    this.mMediaRouter = MediaRouter.getInstance(appContext);
    this.mMediaRouteSelector = new MediaRouteSelector.Builder()
      .addControlCategory(MediaControlIntent.CATEGORY_LIVE_VIDEO)
      .addControlCategory(MediaControlIntent.CATEGORY_REMOTE_PLAYBACK)
      .build();
    this.mMediaRouterCallback = new MediaRouterCallback(this);

    // Get cast context and session manager
    this.mCastContext = CastContext.getSharedInstance(appContext);
    this.mSessionManager = this.mCastContext.getSessionManager();
    this.mSessionManagerListener = new SessionManagerListener(this);
    this.mRemoteMediaClientCallback = new RemoteMediaClientCallback(this);
    // this.mRemoteMediaClientProgressListener = new ProgressListener(this);
    this.mMediaQeueuCallback = new MediaQueueCallback(this);

    this.addMediaRouterCallback();
    this.addSessionManagerListener();

    // @ts-ignore
    // this.CastDevice = com.google.android.gms.cast.CastDevice;

    return button;
  }

  getNativeView(): any {
    return this.nativeView;
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = this;

    super.initNativeView();
  }

  /**
   * Clean up references to the native view and resets nativeView to its original state.
   * If you have changed nativeView in some other way except through setNative callbacks
   * you have a chance here to revert it back to its original state
   * so that it could be reused later.
   */
  disposeNativeView(): void {
    // Remove reference from native view to this instance.
    (<any>this.nativeView).owner = null;

    // this.removeProgressListener();
    // this.removeRemoteMediaClientCallback();
    this.removeMediaRouterCallback();
    this.removeSessionManagerListener();

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  addMediaRouterCallback(): void {
    this.mMediaRouter.addCallback(this.mMediaRouteSelector, this.mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);
  }

  removeMediaRouterCallback(): void {
    if (this.mMediaRouter && this.mMediaRouterCallback) {
      this.mMediaRouter.removeCallback(this.mMediaRouterCallback);
    }
  }

  addSessionManagerListener(): void {
    this.mSessionManager.addSessionManagerListener(this.mSessionManagerListener);
  }

  removeSessionManagerListener(): void {
    this.mSessionManager.removeSessionManagerListener(this.mSessionManagerListener);
  }

  addRemoteMediaClientCallback(): void {
    this.getRemoteMediaClient().registerCallback(this.mRemoteMediaClientCallback);
  }

  removeRemoteMediaClientCallback(): void {
    this.getRemoteMediaClient().unregisterCallback(this.mRemoteMediaClientCallback);
  }

  addMediaQueueCallback(): void {
    const mediaQueue = this.getRemoteMediaClient().getMediaQueue();
    mediaQueue.registerCallback(this.mMediaQeueuCallback);
  }

  removeMediaQueueCallback(): void {
    const mediaQueue = this.getRemoteMediaClient().getMediaQueue();
    mediaQueue.unregisterCallback(this.mMediaQeueuCallback);
  }

  addProgressListenenr(): void {
    this.getRemoteMediaClient().addProgressListener(this.mRemoteMediaClientProgressListener, 100);
  }

  removeProgressListener(): void {
    this.getRemoteMediaClient().removeProgressListener(this.mRemoteMediaClientProgressListener);
  }

  getRemoteMediaClient() {
    return this.mSessionManager.getCurrentCastSession().getRemoteMediaClient();
  }

  buildMediaInfo(mediaInfo: CastMediaInfo) {
    let metadata;

    // Build metadata
    // https://developers.google.com/android/reference/com/google/android/gms/cast/MediaMetadata
    if (mediaInfo.metadata) {
      const metadataType = metadataTypeStringToEnum(mediaInfo.metadata.metadataType);
      metadata = new MediaMetadata(metadataType);

      // Add each valid metadata field
      Object.keys(mediaInfo.metadata).forEach(key => {
        if (CastButtonBase.validMetadataKeys.indexOf(key) > -1) {
          const fixedKey = METADATA_PREFIX + snakeCase(key).toUpperCase();
          const value = mediaInfo.metadata[key];
          metadata.putString(MediaMetadata[fixedKey], value);
        }
      });

      // Images
      if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
        mediaInfo.metadata.images.forEach(img => {
          // @ts-ignore
          const uri = android.net.Uri.parse(img.url);
          const thumb = new WebImage(uri, img.width, img.height);
          metadata.addImage(thumb);
        });
      }
    }

    // Convert streamType to number value
    const streamType = streamTypeStringToEnum(mediaInfo.streamType);

    // Build media info
    const mediaInformation = new MediaInfo.Builder(mediaInfo.contentId)
      .setContentType(mediaInfo.contentType)
      .setStreamType(MediaInfo[streamType]);

    if (metadata) {
      mediaInformation.setMetadata(metadata);
    }

    if (mediaInfo.duration) {
      mediaInformation.setStreamDuration(mediaInfo.duration);
    }

    if (mediaInfo.customData) {
      // build a JSONObject to pass to setCustomData
      // @ts-ignore
      const customData = new org.json.JSONObject(JSON.stringify(mediaInfo.customData));
      mediaInformation.setCustomData(customData);
    }

    if (mediaInfo.textTracks && mediaInfo.textTracks.length > 0) {
      const tracks = new ArrayList();
      mediaInfo.textTracks.forEach((item, index) => {
        const track = new MediaTrack.Builder(index + 1, MediaTrack.TYPE_TEXT)
          .setContentId(item.src)
          .setContentType(item.contentType)
          .setSubtype(MediaTrack.SUBTYPE_SUBTITLES)
          .setName(item.name)
          .setLanguage(item.language)
          .build();
        tracks.add(track);
      });

      mediaInformation.setMediaTracks(tracks);
    }

    return mediaInformation.build();
  }

  buildQueueItem(options: QueueItemOptions) {
    // Build queue item
    const builtMediaInfo = this.buildMediaInfo(options.mediaInformation);
    const builder = new MediaQueueItem.Builder(builtMediaInfo)
    .setAutoplay(options.autoplay || true)
    .setCustomData(options.customData)
    .setPlaybackDuration(options.playbackDuration || Infinity)
    .setPreloadTime(options.preloadTime)
    .setStartTime(options.startTime || 0);

    // Set active track IDs
    if (options.activeTrackIds && options.activeTrackIds.length) {
      builder.setActiveTrackIds(options.activeTrackIds);
    }

    return builder.build();
  }

  loadMedia(media: CastMediaInfo, options?: LoadMediaOptions) {
    const builtMediaInfo = this.buildMediaInfo(media);
    const requestData = new MediaLoadRequestData.Builder()
      .setAutoplay(new java.lang.Boolean(options.autoplay))
      .setCredentials(options.credentials)
      .setCredentialsType(options.credentialsType)
      .setCurrentTime(options.startTime)
      .setCustomData(options.customData)
      .setMediaInfo(builtMediaInfo)
      .setPlaybackRate(options.playbackRate)
      .setQueueData(null);

    // Set active track IDs
    if (options.activeTrackIds && options.activeTrackIds.length) {
      requestData.setActiveTrackIds(options.activeTrackIds);
    }

    // Add listeners to RemoteMediaclient
    this.addRemoteMediaClientCallback();
    this.addProgressListenenr();

    // Load media in to remote client
    this.getRemoteMediaClient().load(requestData.build());
  }

  loadQueue(options: LoadQueueOptions) {
    // Create queue items
    const queueItems = new ArrayList();
    options.items.forEach(item => {
      const queueItem = this.buildQueueItem(item);

      // Set queue items to queue data
      if (queueItem) {
        queueItems.add(queueItem);
      } else {
        console.log('queue item not built');
        console.log(item);
      }
    });

    // Create queue
    const queueData = new MediaQueueData.Builder();

    // Queue options
    if (options) {
      queueData
      .setName(options.name)
      .setQueueId(options.queueID)
      .setQueueType(queueTypeStringToEnum(options.queueType))
      .setRepeatMode(repeatModeStringToEnum(options.repeatMode))
      .setStartIndex(options.startIndex || 0)
      .setStartTime(options.startTime || 0);
    }

    // TODO: Set metadata
    /*
    if (options.containerMetadata) {
      queueData.setContainerMetadata()
    }
    */

    // Set items to media queue
    queueData.setItems(queueItems);

    // Add listeners to RemoteMediaclient
    this.addRemoteMediaClientCallback();
    this.addMediaQueueCallback();
    // this.addProgressListenenr();

    // Prepare load request and set queueData
    const requestData = new MediaLoadRequestData.Builder()
      // .setActiveTrackIds()
      .setAutoplay(new java.lang.Boolean(options.autoplay || true))
      // .setCredentials()
      // .setCredentialsType()
      // .setCurrentTime(options.position)
      // .setCustomData()
      // .setPlaybackRate()
      .setQueueData(queueData.build());

    this.getRemoteMediaClient().load(requestData.build());
  }

  showController() {
    // @ts-ignore
    const intent = new android.content.Intent(this._context, com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.class);
    this._context.startActivity(intent);
  }

  showCastInstructions(title: string = 'Touch to cast media to your TV', singleTime: boolean = true) {
    const overlay = new com.google.android.gms.cast.framework.IntroductoryOverlay.Builder(this._context, this.getNativeView())
      // .setOnDismissed(onOverlayDismissedListener)
      .setTitleText(title);

    if (singleTime) {
      overlay.setSingleTime();
    }

    overlay.build().show();
  }

  showCastDialog() {
    this.getNativeView().showDialog();
  }

  // https://developers.google.com/android/reference/com/google/android/gms/cast/MediaInfo
  getMediaInfo() {
    const mediaInfo = this.getRemoteMediaClient().getMediaInfo();
    return convertMediaInfo(mediaInfo);
  }

  // @ts-ignore
  pauseMedia(customData?: any) {
    this.getRemoteMediaClient().pause(customData);
  }

  // @ts-ignore
  playMedia(customData?: any) {
    this.getRemoteMediaClient().play(customData);
  }

  // @ts-ignore
  seekMedia(position: number, resumeState = 0, customData?: any) {
    // RESUME_STATE_UNCHANGED: 0
    // RESUME_STATE_PLAY: 1
    // RESUME_STATE_PAUSE: 2
    this.getRemoteMediaClient().seek(position * 1000, resumeState, customData);
  }

  // @ts-ignore
  stopMedia(customData?: any) {
    this.getRemoteMediaClient().stop(customData);
  }

  setActiveTrackIds(trackIds: number[]) {
    this.getRemoteMediaClient().setActiveMediaTracks(trackIds);
  }

  setTintColor(): void {
    console.log('setTintColor not available for Android.');
  }

  setVolume(volume: number, customData: any): void {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.setStreamVolume(volume, customData);
  }

  setMuted(muted: boolean, customData: any): void {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.setStreamMute(muted, customData);
  }

  queueNextItem(): void {
    this.getRemoteMediaClient().queueNext(null);
  }

  queuePreviousItem(): void {
    this.getRemoteMediaClient().queuePrev(null);
  }

  queueSetRepeatMode(repeatMode: RepeatMode): void {
    this.getRemoteMediaClient().queueSetRepeatMode(repeatModeStringToEnum(repeatMode), null);
  }

  queueFetchItemIDs(): void {
    const remoteMediaClient = this.getRemoteMediaClient();
    const mediaQueue = remoteMediaClient.getMediaQueue();
    const queueItemIDs = Array.from(mediaQueue.getItemIds());

    this.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDidReceiveQueueItemIDs,
      queueItemIDs: queueItemIDs,
      android: this.nativeView
    });
  }

  queueFetchItemAtIndex(index: number): any {
    const remoteMediaClient = this.getRemoteMediaClient();
    const mediaQueue = remoteMediaClient.getMediaQueue();
    const item = mediaQueue.getItemAtIndex(index, true);
    return item;
  }

  queueInsertItem(options: QueueInsertItemOptions): void {
    const queueItem = this.buildQueueItem(options.item);

    if (options.play) {
      this.getRemoteMediaClient().queueInsertAndPlayItem(
        queueItem,
        options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID,
        options.playPosition || 0,
        options.customData
      );
    } else {
      this.getRemoteMediaClient().queueInsertItems(
        [queueItem],
        options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID,
        options.customData
      );
    }
  }

  queueInsertItems(options: QueueInsertItemsOptions): void {
    // Create queue items
    const queueItems = [];
    options.items.forEach(item => {
      const queueItem = this.buildQueueItem(item);
      queueItems.push(queueItem);
    });

    this.getRemoteMediaClient(). queueInsertItems(
      queueItems,
      options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID,
      options.customData
    );
  }

  queueRemoveItems(itemIDs: number[], customData: any): void {
    this.getRemoteMediaClient().queueRemoveItems(
      itemIDs,
      customData
    );
  }

  queueReorderItems(itemIDs: number[], beforeItemID: number, customData: any): void {
    this.getRemoteMediaClient().queueReorderItems(
      itemIDs,
      beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID,
      customData
    );
  }

  queueJumpToItem(itemID: number, playPosition: number, customData: any): void {
    this.getRemoteMediaClient().queueJumpToItem(
      itemID,
      playPosition,
      customData
    );
  }

  queueUpdateItems(options: QueueUpdateItemsOptions): void {
    console.log('queueUpdateItems not implemented');
  }

  onMediaStatusUpdate(): void {
    const mediaStatus = this.getRemoteMediaClient().getMediaStatus();
    let info = null;
    let status: CastMediaStatus = null;
    if (mediaStatus) {
      const mediaInfo = mediaStatus.getMediaInfo();
      if (mediaInfo) {
        info = convertMediaInfo(mediaInfo);
      }
      let playerState: PlayerState = PlayerState.UNKNOWN;
      const trackIds = mediaStatus.getActiveTrackIds();
      const activeTrackIds = [];
      if (trackIds) {
        for (let i = 0; i < trackIds.length; i++) {
          activeTrackIds.push(trackIds[i]);
        }
      }
      switch (mediaStatus.getPlayerState()) {
        case MediaStatus.PLAYER_STATE_IDLE:
          playerState = PlayerState.IDLE;
          break;
        case MediaStatus.PLAYER_STATE_PLAYING:
          playerState = PlayerState.PLAYING;
          break;
        case MediaStatus.PLAYER_STATE_PAUSED:
          playerState = PlayerState.PAUSED;
          break;
        case MediaStatus.PLAYER_STATE_BUFFERING:
          playerState = PlayerState.BUFFERING;
          break;
      }

      const queueData = mediaStatus.getQueueData();

      status = {
        activeTrackIds,
        playerState,

        idleReason: mediaStatus.getIdleReason(),
        isMuted: mediaStatus.isMute(),
        playbackRate: mediaStatus.getPlaybackRate(),
        streamPosition: mediaStatus.getStreamPosition(),
        volume: mediaStatus.getStreamVolume(),

        currentItemID: mediaStatus.getCurrentItemId(),
        loadingItemID: mediaStatus.getLoadingItemId(),
        preloadedItemID: mediaStatus.getPreloadedItemId(),

        queueData: {
          name: queueData.getName(),
          queueID: queueData.getQueueId(),
          queueType: queueTypeEnumToString(queueData.getQueueType()),
          repeatMode: repeatModeEnumToString(queueData.getRepeatMode()),
          // TODO
          // containerMetadata: getContainerMetadata(),
          startIndex: queueData.getStartIndex(),
          startTime: queueData.getStartTime(),
        },
        queueItemCount: mediaStatus.getQueueItemCount(),
      };
    }
    this.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onMediaStatusChanged,
      status,
      info,
      android: this.nativeView
    });
  }
}
