import { ad } from 'tns-core-modules/utils/utils';
import { Color } from 'tns-core-modules/color';
import { CastButtonBase } from './cast.common';
import {
  CastEvent,
  CastMediaInfo,
  CastMediaStatus,
  CastMetadata,
  CastTextTrack,
  PlayerState,
  RepeatMode,
} from './cast.types';

const camelCase = require('lodash/fp/camelCase');
const snakeCase = require('lodash/fp/snakeCase');

const METADATA_PREFIX = 'KEY_';

// @ts-ignore
const ArrayList = java.util.ArrayList;
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

class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    return global.__native(this);
  }

  public onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderAdded,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderChanged,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderRemoved,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteAdded,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    /*
    const d = this.owner.CastDevice.getFromBundle(route.getExtras());
    const address = d.getIpAddress();

    const deviceJSON = {
      id: route.getId(),
      name: route.getName(),
      description: route.getDescription(),
      address: address,

      deviceType: route.getDeviceType(),
      playbackType: route.getPlaybackType(),
      volume: route.getVolume(),
    };
    */

    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceChanged,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRoutePresentationDisplayChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRoutePresentationDisplayChanged,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteRemoved,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteSelected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteUnselected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceVolumeChanged,
      router: router,
      route: route,
      volume: route.getVolume() / 20,  // Android volume is 0-20, change to 0-1
      android: this.owner.nativeView,
    });
  }
}

class RemoteMediaClientCallback extends com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    return global.__native(this);
  }

  public onStatusUpdated() {
    this.owner.onMediaStatusUpdate();
  }

  public onMetadataUpdated() {
  }

  public onQueueStatusUpdated() {
  }

  public onPreloadStatusUpdated() {
  }

  public onSendingRemoteMediaRequest() {
  }

  public onAdBreakStatusUpdated() {
  }
}

interface SessionManagerListener {
  new(owner): com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
}

let SessionManagerListener: SessionManagerListener;

function initSessionManagerListener(): void {
  if (SessionManagerListener) {
    return;
  }

  @Interfaces([com.google.android.gms.cast.framework.SessionManagerListener])
  // @ts-ignore
  class SessionManagerListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session> {
    public owner: CastButton;

    constructor(owner) {
      super();

      this.owner = owner;

      // necessary when extending TypeScript constructors
      return global.__native(this);
    }

    onSessionEnded(session: com.google.android.gms.cast.framework.Session, error: number): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionEnded,
        session: session,
        error: error,
        android: this.owner.nativeView
      });
    }

    onSessionEnding(session: com.google.android.gms.cast.framework.Session): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionEnding,
        session: session,
        android: this.owner.nativeView
      });
    }

    onSessionResumeFailed(session: com.google.android.gms.cast.framework.Session, error: number) {
      /* Ignored due to no iOS equivalent
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: 'onSessionResumeFailed',
        session: session,
        error: error,
        android: this.owner.nativeView
      });
      */
    }

    onSessionResumed(session: com.google.android.gms.cast.framework.Session, wasSuspended: boolean) {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionResumed,
        session: session,
        wasSuspended: wasSuspended,
        android: this.owner.nativeView
      });
    }

    onSessionResuming(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionResuming,
        session: session,
        sessionId: sessionId,
        android: this.owner.nativeView
      });
    }

    onSessionStartFailed(session: com.google.android.gms.cast.framework.Session, error: number): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionStartFailed,
        session: session,
        error: error,
        android: this.owner.nativeView
      });
    }

    onSessionStarted(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionStarted,
        session: session,
        sessionId: sessionId,
        android: this.owner.nativeView
      });
    }

    onSessionStarting(session: com.google.android.gms.cast.framework.Session): void {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionStarting,
        session: session,
        android: this.owner.nativeView
      });
    }

    onSessionSuspended(session: com.google.android.gms.cast.framework.Session, reason: number) {
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onSessionSuspended,
        session: session,
        reason: reason,
        android: this.owner.nativeView
      });
    }
  }

  SessionManagerListener = SessionManagerListenerImpl;
}

export class CastButton extends CastButtonBase {
  public nativeView: androidx.mediarouter.app.MediaRouteButton;

  public CastDevice: com.google.android.gms.cast.CastDevice;

  public mCastContext: com.google.android.gms.cast.framework.CastContext;
  public mSessionManager: com.google.android.gms.cast.framework.SessionManager;
  public mSessionManagerListener: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
  public mRemoteMediaClientCallback: com.google.android.gms.cast.framework.media.RemoteMediaClient.Callback;

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
    // this.mRemoteMediaClientListener = new RemoteMediaClientListener(this);
    this.mRemoteMediaClientCallback = new RemoteMediaClientCallback(this);

    this.addMediaRouterCallback();
    this.addSessionManagerListener();

    // @ts-ignore
    this.CastDevice = com.google.android.gms.cast.CastDevice;

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

  // https://developers.google.com/android/reference/com/google/android/gms/cast/framework/media/RemoteMediaClient
  getRemoteMediaClient() {
    return this.mSessionManager.getCurrentCastSession().getRemoteMediaClient();
  }

  buildMediaInfo(mediaInfo: CastMediaInfo) {
    let metadata;

    // Build metadata
    // https://developers.google.com/android/reference/com/google/android/gms/cast/MediaMetadata
    if (mediaInfo.metadata) {
      // Convert metadataType to number value
      const metadataType = typeof mediaInfo.metadata.metadataType === 'string' ? this.metadataTypeStringToNumber(mediaInfo.metadata.metadataType) : mediaInfo.metadata.metadataType;
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
    const streamType = typeof mediaInfo.streamType === 'string' ? this.streamTypeStringToNumber(mediaInfo.streamType) : mediaInfo.streamType;

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

  loadMedia(mediaInfo: CastMediaInfo, autoplay: boolean, position?: number) {
    const builtMediaInfo = this.buildMediaInfo(mediaInfo);

    // Load media in to remote client
    const remoteMediaClient = this.getRemoteMediaClient();

    const requestData = new MediaLoadRequestData.Builder()
      // .setActiveTrackIds()
      .setAutoplay(new java.lang.Boolean(autoplay))
      // .setCredentials()
      // .setCredentialsType()
      .setCurrentTime(position)
      // .setCustomData()
      .setMediaInfo(builtMediaInfo)
      // .setPlaybackRate()
      .setQueueData(null);

    remoteMediaClient.registerCallback(this.mRemoteMediaClientCallback);
    remoteMediaClient.load(requestData.build());
  }

  loadQueue(mediaInfo: CastMediaInfo[], autoplay: boolean, position?: number, repeatMode?: RepeatMode) {
    console.log('loadQueue');

    // Create queue items
    // const queueItems = [];
    const queueItems = new ArrayList();
    mediaInfo.forEach(mediaInfo => {
      // Build queue item
      const builtMediaInfo = this.buildMediaInfo(mediaInfo);
      const queueItem = new MediaQueueItem.Builder(builtMediaInfo)
        // .setActiveTrackIds()
        // .setAutoplay(autoplay);
        // .setCustomData()
        // .setPlaybackDuration()
        // .setPreloadTime()
        // .setStartTime setStartTimeadTime()

      queueItems.add(queueItem.build());
    });

    const queueData = new MediaQueueData.Builder()
      // .setContainerMetadata()
      // .setEntity()
      .setItems(queueItems)
      .setName('A Test Queue')
      .setQueueId('queue-test-id');
      // .setQueueType()
      // .setRepeatMode()
      // .setStartIndex()
      // .setStartTime()

    const requestData = new MediaLoadRequestData.Builder()
      // .setActiveTrackIds()
      .setAutoplay(new java.lang.Boolean(autoplay))
      // .setCredentials()
      // .setCredentialsType()
      .setCurrentTime(position)
      // .setCustomData()
      // .setPlaybackRate()
      .setQueueData(queueData.build());

    // Load media in to remote client
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.registerCallback(this.mRemoteMediaClientCallback);
    remoteMediaClient.load(requestData.build());
  }

  showController() {
    // @ts-ignore
    const intent = new android.content.Intent(this._context, com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.class);
    this._context.startActivity(intent);
  }

  // https://developers.google.com/android/reference/com/google/android/gms/cast/MediaInfo
  getMediaInfo() {
    const mediaInfo = this.getRemoteMediaClient().getMediaInfo();
    return this.convertMediaInfo(mediaInfo);
  }

  // @ts-ignore
  pauseMedia(customData?: java.lang.Object.JSONObject) {
    this.getRemoteMediaClient().pause(customData);
  }

  // @ts-ignore
  playMedia(customData?: java.lang.Object.JSONObject) {
    this.getRemoteMediaClient().play(customData);
  }

  // @ts-ignore
  seekMedia(position: number, resumeState = 0, customData?: java.lang.Object.JSONObject) {
    // RESUME_STATE_UNCHANGED: 0
    // RESUME_STATE_PLAY: 1
    // RESUME_STATE_PAUSE: 2
    this.getRemoteMediaClient().seek(position * 1000, resumeState, customData);
  }

  // @ts-ignore
  stopMedia(customData?: java.lang.Object.JSONObject) {
    this.getRemoteMediaClient().stop(customData);
  }

  setActiveTrackIds(trackIds: number[]) {
    this.getRemoteMediaClient().setActiveMediaTracks(trackIds);
  }

  setTintColor(color: string) {
    const mRouteButton = this.getNativeView();
    const appContext = ad.getApplicationContext();
    // @ts-ignore
    const castContext = new android.view.ContextThemeWrapper(appContext, androidx.mediarouter.mediarouter.R.style.Theme_MediaRouter);
    const tintColor = new Color(color).android;
    // @ts-ignore
    const a = castContext.obtainStyledAttributes(null, androidx.mediarouter.mediarouter.R.styleable.MediaRouteButton, androidx.mediarouter.mediarouter.R.attr.mediaRouteButtonStyle, 0);
    // @ts-ignore
    const drawable = a.getDrawable(androidx.mediarouter.mediarouter.R.styleable.MediaRouteButton_externalRouteEnabledDrawable);
    a.recycle();

    androidx.core.graphics.drawable.DrawableCompat.setTint(drawable, tintColor);
    mRouteButton.setRemoteIndicatorDrawable(drawable);
  }

  setVolume(volume: number, customData: any) {
    // const remoteMediaClient = this.getRemoteMediaClient();
    // remoteMediaClient.setStreamVolumeCustomData(volume, customData);
  }

  setMuted(muted: boolean, customData: any) {
    // const remoteMediaClient = this.getRemoteMediaClient();
    // remoteMediaClient.setStreamMutedCustomData(muted, customData);
  }

  queueFetchItemIDs() {
    // const remoteMediaClient = this.getRemoteMediaClient();
    // remoteMediaClient.queueFetchItemIDs();
  }

  queueFetchItemsForIDs(queueItemIDs: number[]) {
    // const remoteMediaClient = this.getRemoteMediaClient();
    // @ts-ignore
    // remoteMediaClient.queueFetchItemsForIDs(ios.collections.jsArrayToNSArray(queueItemIDs));
  }

  queueInsertItems(queueItems: CastMediaInfo[], beforeItemID: number, customData: any) {
    console.log('queueInsertItems');
    // this.getRemoteMediaClient().function();
  }

  queueInsertItem(item: CastMediaInfo, beforeItemID: number) {
    console.log('queueInsertItem');
    // this.getRemoteMediaClient().queueInsertItemBeforeItemWithID(mediaQueueItem, beforeItemID || kGCKMediaQueueInvalidItemID);
  }

  queueInsertAndPlayItem(item: CastMediaInfo, beforeItemID: number, playPosition: number, customData: any) {
    console.log('queueInsertAndPlayItem');
    // this.getRemoteMediaClient().function();
  }

  queueUpdateItems(queueItems: CastMediaInfo[], customData: any) {
    console.log('queueUpdateItems');
    // this.getRemoteMediaClient().function();
  }

  queueRemoveItemWithID(itemID: number) {
    console.log('queueRemoveItemWithID');
    // this.getRemoteMediaClient().function();
  }

  queueRemoveItemsWithIDs(itemIDs: number[], customData: any) {
    console.log('queueRemoveItemsWithIDs');
    // this.getRemoteMediaClient().function();
  }

  queueReorderItemsWithIDs(queueItemIDs: number[], beforeItemID: number, customData: any) {
    console.log('queueReorderItemsWithIDs');
    // this.getRemoteMediaClient().function();
  }

  queueMoveItemWithID(itemID: number, beforeItemID: number) {
    console.log('queueMoveItemWithID');
    // this.getRemoteMediaClient().function();
  }

  queueJumpToItemWithID(itemID: number, playPosition: number, customData: any) {
    console.log('queueJumpToItemWithID');
    // this.getRemoteMediaClient().function();
  }

  queueNextItem() {
    this.getRemoteMediaClient().queueNext(null);
  }

  queuePreviousItem() {
    this.getRemoteMediaClient().queuePrev(null);
  }

  onMediaStatusUpdate() {
    const mediaStatus = this.getRemoteMediaClient().getMediaStatus();
    let info = null;
    let status: CastMediaStatus = null;
    if (mediaStatus) {
      const mediaInfo = mediaStatus.getMediaInfo();
      if (mediaInfo) {
        info = this.convertMediaInfo(mediaInfo);
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

        // TODO
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
          // TODO
          // queueType: queueData.getQueueType(),
          // repeatMode: queueData.getRepeatMode(),
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

  convertMediaInfo(mediaInfo: com.google.android.gms.cast.MediaInfo): CastMediaInfo {
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
      metadataType: this.metadataTypeNumberToString(metadata.getMediaType()),
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
      streamType: this.streamTypeNumberToString(mediaInfo.getStreamType()),
      contentType: mediaInfo.getContentType(),
      metadata: castMetadata,
      duration: mediaInfo.getStreamDuration() / 1000,
      textTracks
    };
  }
}
