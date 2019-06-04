import { ad } from 'tns-core-modules/utils/utils';
import { Color } from 'tns-core-modules/color';
import { CastButtonBase } from './cast.common';
import {
  CastChannel,
  CastEvent,
  CastMediaInfo,
  CastMediaStatus,
  CastMetadata,
  CastTextTrack,
  PlayerState,
} from './cast.types';

const camelCase = require('lodash/fp/camelCase');
const snakeCase = require('lodash/fp/snakeCase');

const {
  MediaRouter,
  MediaRouteSelector,
  MediaControlIntent
} = android.support.v7.media;
const {
  CastButtonFactory,
  CastContext,
} = com.google.android.gms.cast.framework;

// @ts-ignore
const MediaInfo = com.google.android.gms.cast.MediaInfo;
// @ts-ignore
const MediaMetadata = com.google.android.gms.cast.MediaMetadata;
// @ts-ignore
const WebImage = com.google.android.gms.common.images.WebImage;
// @ts-ignore
const MediaTrack = com.google.android.gms.cast.MediaTrack;
// @ts-ignore
const ArrayList = java.util.ArrayList;
// @ts-ignore
const MediaStatus = com.google.android.gms.cast.MediaStatus;

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    return global.__native(this);
  }

  public onProviderAdded(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderAdded,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderChanged(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderChanged,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onProviderRemoved(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onProviderRemoved,
      router: router,
      provider: provider,
      android: this.owner.nativeView
    });
  }

  public onRouteAdded(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteAdded,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
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

  public onRoutePresentationDisplayChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRoutePresentationDisplayChanged,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteRemoved(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteRemoved,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteSelected(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteSelected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteUnselected(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onRouteUnselected,
      router: router,
      route: route,
      android: this.owner.nativeView
    });
  }

  public onRouteVolumeChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceVolumeChanged,
      router: router,
      route: route,
      volume: route.getVolume() / 20,  // Android volume is 0-20, change to 0-1
      android: this.owner.nativeView,
    });
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

interface RemoteMediaClientListener {
  new(owner): com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener;
}

let RemoteMediaClientListener: RemoteMediaClientListener;

function initRemoteMediaClientListener(): void {
  if (RemoteMediaClientListener) {
    return;
  }

  @Interfaces([com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener])
  class RemoteMediaClientListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener {
    public owner: CastButton;

    constructor(owner) {
      super();

      this.owner = owner;

      // necessary when extending TypeScript constructors
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

  RemoteMediaClientListener = RemoteMediaClientListenerImpl;
}

/*
interface MessageReceivedCallback {
  new(): com.google.android.gms.cast.Cast.MessageReceivedCallback;
}

let MessageReceivedCallback: MessageReceivedCallback;

function initMessageReceivedCallback(): void {
  if (MessageReceivedCallback) {
    return;
  }

  @Interfaces([com.google.android.gms.cast.Cast.MessageReceivedCallback])
  class MessageReceivedCallbackImpl extends java.lang.Object implements com.google.android.gms.cast.Cast.MessageReceivedCallback {
    constructor() {
      super();

      // necessary when extending TypeScript constructors
      return global.__native(this);
    }

    public onMessageReceived(): void {
      console.log('onMessageReceived');
    }
  }

  MessageReceivedCallback = MessageReceivedCallbackImpl;
}
*/
/*
class MessageReceivedCallback extends com.google.android.gms.cast.Cast.MessageReceivedCallback {
  constructor() {
    super();
    return global.__native(this);
  }

  public getNamespace(): string {
    return 'urn:x-cast:com.smashedcrab.cast.radio';
  }

  public onMessageReceived() {
    console.log('onMessageReceived');
    // didReceiveTextMessage(args);
  }
}
*/

export class CastButton extends CastButtonBase {
  public nativeView: android.support.v7.app.MediaRouteButton;

  public CastDevice: com.google.android.gms.cast.CastDevice;

  public mCastContext: com.google.android.gms.cast.framework.CastContext;
  public mSessionManager: com.google.android.gms.cast.framework.SessionManager;
  public mSessionManagerListener: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
  public mRemoteMediaClientListener: com.google.android.gms.cast.framework.media.RemoteMediaClient.Listener;

  public mMediaRouter: android.support.v7.media.MediaRouter;
  public mMediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  public mMediaRouteSelector: android.support.v7.media.MediaRouteSelector;

  public channels: object;

  constructor() {
    super();

    this.channels = {};
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    const appContext = ad.getApplicationContext();

    initSessionManagerListener();
    initRemoteMediaClientListener();

    // Create new instance of MediaRouteButton
    const button = new android.support.v7.app.MediaRouteButton(this._context);

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
    this.mRemoteMediaClientListener = new RemoteMediaClientListener(this);

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

  loadMedia(mediaInfo: CastMediaInfo, autoplay = true, position?: number) {
    const metadataPrefix = 'KEY_';
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
          const fixedKey = metadataPrefix + snakeCase(key).toUpperCase();
          const value = mediaInfo.metadata[key];
          metadata.putString(MediaMetadata[fixedKey], value);
        }
      });

      // Images
      if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
        mediaInfo.metadata.images.forEach(img => {
          const uri = android.net.Uri.parse(img.url);
          const thumb = new WebImage(uri, img.width, img.height);
          metadata.addImage(thumb);
        });
      }
    }

    // Convert streamType to number value
    const streamType = typeof mediaInfo.streamType === 'string' ? this.streamTypeStringToNumber(mediaInfo.streamType) : mediaInfo.streamType;

    // Build media info
    const builtMediaInfo = new MediaInfo.Builder(mediaInfo.contentId)
      .setContentType(mediaInfo.contentType)
      .setStreamType(MediaInfo[streamType]);

    if (metadata) {
      builtMediaInfo.setMetadata(metadata);
    }

    if (mediaInfo.duration) {
      builtMediaInfo.setStreamDuration(mediaInfo.duration);
    }

    if (mediaInfo.customData) {
      // build a JSONObject to pass to setCustomData
      const customData = new org.json.JSONObject(JSON.stringify(mediaInfo.customData));
      builtMediaInfo.setCustomData(customData);
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

      builtMediaInfo.setMediaTracks(tracks);
    }

    // Load media in to remote client
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.addListener(this.mRemoteMediaClientListener);
    remoteMediaClient.load(builtMediaInfo.build(), autoplay, position);
  }

  showController() {
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
    const castContext = new android.view.ContextThemeWrapper(appContext, android.support.v7.mediarouter.R.style.Theme_MediaRouter);
    const tintColor = new Color(color).android;
    // @ts-ignore
    const a = castContext.obtainStyledAttributes(null, android.support.v7.mediarouter.R.styleable.MediaRouteButton, android.support.v7.mediarouter.R.attr.mediaRouteButtonStyle, 0);
    // @ts-ignore
    const drawable = a.getDrawable(android.support.v7.mediarouter.R.styleable.MediaRouteButton_externalRouteEnabledDrawable);
    a.recycle();

    // @ts-ignore
    android.support.v4.graphics.drawable.DrawableCompat.setTint(drawable, tintColor);
    mRouteButton.setRemoteIndicatorDrawable(drawable);
  }

  addChannel(namespace: string, didReceiveTextMessage: any) {
    if (namespace.indexOf('urn:x-cast:') !== 0) {
      console.log('Namespaces must begin with the prefix "urn:x-cast:"');
      return false;
    }

    const castSession = this.mSessionManager.getCurrentCastSession();

    // Immediately crashes with no error ?
    castSession.setMessageReceivedCallbacks(namespace, new com.google.android.gms.cast.Cast.MessageReceivedCallback({
      onMessageReceived(param0: com.google.android.gms.cast.CastDevice, param1: string, param2: string): void {
        console.log('onMessageReceived');
        // didReceiveTextMessage(args);
      }
    }));

    this.channels[namespace] = true;

    return true;
  }

  removeChannel(namespace) {
    if (!this.channels[namespace]) {
      console.log(`Channel with namespace ${namespace} does not exist`);
      return false;
    }

    const castSession = this.mSessionManager.getCurrentCastSession();
    castSession.removeMessageReceivedCallbacks(namespace);

    this.channels[namespace] = null;

    return true;
  }

  sendMessage(namespace: string, message: string) {
    if (!this.channels[namespace]) {
      console.log(`Channel with namespace ${namespace} does not exist`);
      return false;
    }
    const castSession = this.mSessionManager.getCurrentCastSession();
    castSession.sendMessage(namespace, message);
    return true;
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

      status = {
        playerState,
        activeTrackIds,
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

    const castMetadata: CastMetadata = {
      metadataType: this.metadataTypeNumberToString(metadata.getMediaType()),
      images: [],
    };

    metaDataKeys.forEach(key => {
      const fixedKey = camelCase(key.replace('com.google.android.gms.cast.metadata.', ''));
      castMetadata[fixedKey] = metadata.getString(key);
    });

    for (let index = 0; index < images.size(); index++) {
      const img = images.get(index);
      castMetadata.images.push({
        url: img.getUrl().toString(),
        width: img.getWidth(),
        height: img.getHeight()
      });
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
