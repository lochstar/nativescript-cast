import { ios } from 'tns-core-modules/utils/utils';
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
const upperFirst = require('lodash/fp/upperFirst');

const METADATA_PREFIX = 'kGCKMetadataKey';
const REPEAT_MODE_PREFIX = 'GCKMediaRepeatMode';

declare const NSObject: any;

declare const GCKUICastButton: any;
declare const GCKDevice: any;
declare const GCKSessionManagerListener: any;
declare const CGRectMake: any;
declare const GCKCastContext: any;
declare const GCKMediaTrackTypeText: any;
declare const GCKMediaTextTrackSubtypeSubtitles: any;
declare const GCKRemoteMediaClientListener: any;
declare const GCKMediaPlayerStateIdle: any;
declare const GCKMediaPlayerStatePlaying: any;
declare const GCKMediaPlayerStatePaused: any;
declare const GCKMediaPlayerStateBuffering: any;
declare const GCKMediaPlayerStateLoading: any;

declare const GCKMediaQueue: any;
declare const GCKMediaQueueDataBuilder: any;
declare const GCKMediaQueueDelegate: any;
declare const GCKMediaLoadRequestData: any;
declare const GCKMediaLoadRequestDataBuilder: any;
// @ts-ignore
class SessionManagerListenerImpl extends NSObject implements GCKSessionManagerListener {
  public static ObjCProtocols = [GCKSessionManagerListener];
  public owner: CastButton;

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  public sessionManagerWillStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarting,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarted,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willStartCastSession');
  }

  public sessionManagerDidStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('didStartCastSession');
  }

  public sessionManagerWillEndSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnding,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidEndSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnded,
      session: session,
      error: error,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillEndCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willEndCastSession');
  }

  public sessionManagerDidEndCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    // console.log('didEndCastSession');
  }

  public sessionManagerDidFailToStartSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStartFailed,
      session: session,
      error: error,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidFailToStartCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    // console.log('didFailToStartCastSession');
  }

  public sessionManagerDidSuspendSessionWithReason(sessionManager: GCKSessionManager, session: GCKSession, reason: GCKConnectionSuspendReason) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionSuspended,
      session: session,
      reason: reason,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidSuspendCastSessionWithReason(sessionManager: GCKSessionManager, session: GCKCastSession, reason: GCKConnectionSuspendReason) {
    // console.log('didSuspendCastSession');
  }

  public sessionManagerWillResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResuming,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResumed,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willResumeCastSession');
  }

  public sessionManagerDidResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('didResumeCastSession');
  }

  public sessionManagerSessionDidUpdateDevice(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice) {
    /*
    const deviceJSON = {
      id: device.uniqueID,
      name: device.friendlyName,
      description: device.statusText,
      address: device.ipAddress,

      deviceType: device.type,
      category: device.category,
      version: device.deviceVersion,
      deviceId: device.deviceID,
      deviceVersion: device.deviceVersion,
      modelName: device.modelName,
      status: device.status,
      statusText: device.statusText,
    };
    */

    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceChanged,
      session: session,
      device: device,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKSession, volume: number) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceVolumeChanged,
      session: session,
      volume: volume,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerCastSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number) {
    // console.log('castSession: didReceiveDeviceVolume');
  }

  public sessionManagerSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKSession, statusText: string) {
    // console.log('didReceiveDeviceStatus');
  }

  public sessionManagerCastSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string) {
    // console.log('castSession: didReceiveDeviceStatus');
  }

  public sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory(sessionManager: GCKSessionManager, category: string) {
    // console.log('didUpdateDefaultSessionOptionsForDeviceCategory');
  }
}
// @ts-ignore
class RemoteMediaClientListenerImpl extends NSObject implements GCKRemoteMediaClientListener {
  public static ObjCProtocols = [GCKRemoteMediaClientListener];
  public owner: CastButton;

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  public remoteMediaClientDidStartMediaSessionWithID(client: GCKRemoteMediaClient, sessionId: number) {
    // console.log('didStartMediaSessionWithID ' + sessionId);
  }

  public remoteMediaClientDidUpdateMediaStatus(client: GCKRemoteMediaClient, mediaStatus: GCKMediaStatus) {
    // console.log('updated mediaStatus');
    let info = null;
    let status = null;

    if (mediaStatus) {
      status = this.toCastMediaStatus(mediaStatus);
      const mediaInfo = mediaStatus.mediaInformation;
      if (mediaInfo) {
        info = this.owner.convertMediaInfo(mediaInfo);
      }
    }
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onMediaStatusChanged,
      status,
      info,
      ios: this.owner.nativeView
    });
  }

  public remoteMediaClientDidUpdateMediaMetadata(client: GCKRemoteMediaClient, mediaMetaData: GCKMediaMetadata) {
    // console.log('didUpdateMediaMetadata');
  }

  public remoteMediaClientDidUpdateQueue(client: GCKRemoteMediaClient) {
    console.log('remoteMediaClientDidUpdateQueue');
  }

  public remoteMediaClientDidUpdatePreloadStatus(client: GCKRemoteMediaClient) {
    // console.log('remoteMediaClientDidUpdatePreloadStatus');
  }

  public didReceiveQueueItemIDs(queueItems: number[]) {
    console.log('didReceiveQueueItemIDs');
    console.log(queueItems);
  }

  public didInsertQueueItemsWithIDs(queueItems: number[]) {
    console.log('didInsertQueueItemsWithIDs');
    console.log(queueItems);
  }

  public didUpdateQueueItemsWithIDs(queueItems: number[]) {
    console.log('didInsertQueueItemsWithIDs');
    console.log(queueItems);
  }

  public didRemoveQueueItemsWithIDs(queueItems: number[]) {
    console.log('didInsertQueueItemsWithIDs');
    console.log(queueItems);
  }

  public didReceiveQueueItems(items: GCKMediaQueueItem[]) {
    console.log('didInsertQueueItemsWithIDs');
    console.log(items);
  }

  protected toCastMediaStatus(mediaStatus: GCKMediaStatus): CastMediaStatus {
    let playerState: PlayerState = PlayerState.UNKNOWN;
    switch (mediaStatus.playerState) {
      case GCKMediaPlayerStateIdle:
        playerState = PlayerState.IDLE;
        break;
      case GCKMediaPlayerStatePlaying:
        playerState = PlayerState.PLAYING;
        break;
      case GCKMediaPlayerStatePaused:
        playerState = PlayerState.PAUSED;
        break;
      case GCKMediaPlayerStateBuffering:
        playerState = PlayerState.BUFFERING;
        break;
      case GCKMediaPlayerStateLoading:
        playerState = PlayerState.LOADING;
        break;
    }

    const activeTrackIds = mediaStatus.activeTrackIDs
      ? ios.collections.nsArrayToJSArray(mediaStatus.activeTrackIDs).map((trackId) => +trackId)
      : [];

    return {
      activeTrackIds,
      playerState,

      preloadedItemID: mediaStatus.preloadedItemID,
      loadingItemID: mediaStatus.loadingItemID,
      currentItemID: mediaStatus.currentItemID,
      queueItemCount: mediaStatus.queueItemCount,
    };
  }
}
// @ts-ignore
class MediaQueueDelegate extends NSObject implements GCKMediaQueueDelegate {
  public static ObjCProtocols = [GCKMediaQueueDelegate];
  public owner: CastButton;

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  mediaQueueWillChange(queue: any) {
    console.info('mediaQueueWillChange');
    console.log(queue);
  }
  mediaQueueDidReloadItems(queue: any) {
    console.info('mediaQueueDidReloadItems');
    console.log(queue);
  }
  didInsertItemsInRange(queue: any, range: NSRange) {
    console.info('didInsertItemsInRange');
    console.log(queue);
    console.log(range);
  }
  didUpdateItemsAtIndexes(queue: any, indexes: NSArray<NSNumber>) {
    console.info('didUpdateItemsAtIndexes');
    console.log(queue);
    console.log(indexes);
  }
  didRemoveItemsAtIndexes(queue: any, indexes: NSArray<NSNumber>) {
    console.info('didRemoveItemsAtIndexes');
    console.log(queue);
    console.log(indexes);
  }
  mediaQueueDidChange(queue: any) {
    console.info('mediaQueueDidChange');
    console.log(queue);
  }
}

export class CastButton extends CastButtonBase {
  public nativeView: GCKUICastButton;

  public CastDevice: any;

  public mCastContext: any;
  public mSessionManager: any;
  public mSessionManagerListener: any;
  public mRemoteMediaClientListener: any;

  public mMediaQueueDelegate: any;

  constructor() {
    super();
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    // Create new instance of GCKUICastButton
    const button = GCKUICastButton.alloc().initWithFrame(CGRectMake(0, 0, 24, 24));
    // const button = new GCKUICastButton(CGRectMake(0, 0, 24, 24));

    // Get cast context and session manager
    this.mCastContext = GCKCastContext.sharedInstance();
    this.mCastContext.useDefaultExpandedMediaControls = true;
    this.mSessionManager = this.mCastContext.sessionManager;
    this.mSessionManagerListener = new SessionManagerListenerImpl;
    this.mSessionManagerListener.owner = this;
    this.mRemoteMediaClientListener = new RemoteMediaClientListenerImpl;
    this.mRemoteMediaClientListener.owner = this;

    this.mMediaQueueDelegate = new MediaQueueDelegate;
    this.mMediaQueueDelegate.owner = this;

    this.addSessionManagerListener();

    this.CastDevice = GCKDevice;

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
    // Remove reference from native listener to this instance.
    (<any>this.nativeView).owner = null;

    this.removeSessionManagerListener();

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  addSessionManagerListener(): void {
    this.mSessionManager.addListener(this.mSessionManagerListener);
  }

  removeSessionManagerListener(): void {
    this.mSessionManager.removeListener(this.mSessionManagerListener);
  }

  // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_remote_media_client
  getRemoteMediaClient() {
    return this.mSessionManager.currentCastSession.remoteMediaClient;
  }

  buildMediaInfo(mediaInfo: CastMediaInfo) {
    let metadata;

    // Build metadata
    // https://developers.google.com/cast/v2/reference/ios/interface_g_c_k_media_metadata
    if (mediaInfo.metadata) {
      // Convert metadataType to number value
      const metadataType = typeof mediaInfo.metadata.metadataType === 'string' ? this.metadataTypeStringToNumber(mediaInfo.metadata.metadataType) : mediaInfo.metadata.metadataType;
      metadata = GCKMediaMetadata.alloc().initWithMetadataType(metadataType);

      // Add each valid metadata field
      Object.keys(mediaInfo.metadata).forEach(key => {
        if (CastButtonBase.validMetadataKeys.indexOf(key) > -1) {
          const fixedKey = METADATA_PREFIX + upperFirst(key);
          const value = mediaInfo.metadata[key];
          metadata.setStringForKey(value, fixedKey);
        }
      });

      // Images
      if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
        mediaInfo.metadata.images.forEach(img => {
          const uri = NSURL.URLWithString(img.url);
          metadata.addImage(GCKImage.alloc().initWithURLWidthHeight(uri, img.width, img.height));
        });
      }
    }

    // Include customData if defined
    const customData = mediaInfo.customData || null;

    // TODO: handle textTrackStyle
    const textTrackStyle = null;

    // Handle mediaTracks
    let mediaTracks = null;
    // let mediaTracks = NSArray.arrayWithArray([]);
    if (mediaInfo.textTracks && mediaInfo.textTracks.length > 0) {
      mediaTracks = NSMutableArray.arrayWithCapacity(mediaInfo.textTracks.length);
      mediaInfo.textTracks.forEach((track, index) => {
        mediaTracks.addObject(GCKMediaTrack.alloc().initWithIdentifierContentIdentifierContentTypeTypeTextSubtypeNameLanguageCodeCustomData(
          index + 1, track.src, track.contentType, GCKMediaTrackTypeText, GCKMediaTextTrackSubtypeSubtitles, track.name, track.language, null));
      });
    }

    // Convert streamType to number value
    const streamType = typeof mediaInfo.streamType === 'string' ? this.streamTypeStringToNumber(mediaInfo.streamType) : mediaInfo.streamType;

    // Build media info
    const mediaInformation = GCKMediaInformationBuilder.alloc().initWithContentID(mediaInfo.contentId);
    // mediaInformation.VMAP
    // mediaInformation.adBreakClips
    // mediaInformation.adBreaks
    mediaInformation.contentType = mediaInfo.contentType;
    mediaInformation.customData = mediaInfo.customData;
    mediaInformation.mediaTracks = mediaTracks;
    mediaInformation.metadata = metadata;
    // mediaInformation.startAbsoluteTime = 0;
    mediaInformation.streamDuration =  mediaInfo.duration;
    mediaInformation.streamType = streamType;
    mediaInformation.textTrackStyle = textTrackStyle;

    /* deprecated
    const builtMediaInfo = GCKMediaInformation.alloc().initWithContentIDStreamTypeContentTypeMetadataStreamDurationMediaTracksTextTrackStyleCustomData(
      mediaInfo.contentId,
      streamType,
      mediaInfo.contentType,
      metadata,
      mediaInfo.duration,
      mediaTracks,
      textTrackStyle,
      customData
    );
    */

    return mediaInformation.build();
  }

  loadMedia(media: CastMediaInfo, autoplay = true, position?: number) {
    // Add listeners to RemoteMediaclient
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.addListener(this.mRemoteMediaClientListener);

    // Prepare load request
    const requestData = GCKMediaLoadRequestDataBuilder.alloc().init();

    const builtMediaInfo = this.buildMediaInfo(media);
    requestData.mediaInformation = builtMediaInfo;

    // Set options
    requestData.autoplay = +autoplay;  // 0/1
    requestData.startTime = position;
    // requestData.playbackRate = playbackRate;
    // requestData.activeTrackIDs = activeTrackIDs;
    // requestData.customData = customData;
    remoteMediaClient.loadMediaWithLoadRequestData(requestData);

    // deprecated
    /*
    const options = GCKMediaLoadOptions.alloc().init();
    options.autoplay = autoplay;
    options.playPosition = position;
    remoteMediaClient.loadMediaWithOptions(builtMediaInfo, options);
    */
  }

  loadQueue(media: CastMediaInfo[], autoplay = true, position?: number, repeatMode?: RepeatMode) {
    // Add listeners to RemoteMediaclient
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.addListener(this.mRemoteMediaClientListener);

    // Add queue event listeners
    const mediaQueue = GCKMediaQueue.alloc().initWithRemoteMediaClient(remoteMediaClient);
    mediaQueue.addDelegate(this.mMediaQueueDelegate);

    // Create queue
    // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_queue_data_builder
    // queue types: https://developers.google.com/cast/docs/reference/ios/g_c_k_media_queue_data_8h#a86077ae076b4f939158e54de26ab6b12
    const mediaQueueData = GCKMediaQueueDataBuilder.alloc().init();

    // Queue options
    mediaQueueData.queueID = 'queue-test-id';
    mediaQueueData.name = 'A Test Queue';
    // mediaQueueData.containerMetadata = containerMetadata;
    // mediaQueueData.queueType = queueType;

    // Set repeatMode
    if (repeatMode) {
      mediaQueueData.repeatMode = this.repeatModeStringToEnum(repeatMode);
    }

    // mediaQueueData.startIndex = startIndex;
    // mediaQueueData.startTime = startTime;

    // Create queue items
    const queueItems = [];
    media.forEach(mediaInfo => {
      // Build queue item
      const builtMediaInfo = this.buildMediaInfo(mediaInfo);
      const builder = GCKMediaQueueItemBuilder.alloc().init();
      // builder.activeTrackIDs = activeTrackIDs;
      builder.autoplay = autoplay;
      // builder.customData = customData;
      builder.mediaInformation = builtMediaInfo;
      // builder.playbackDuration = playbackDuration;
      // builder.preloadTime = preloadTime;
      // builder.startTime = startTime;
      queueItems.push(builder.build());
    });

    // Set queue items to queue data
    mediaQueueData.items = NSArray.arrayWithArray(queueItems);

    // Prepare load request and set queueData
    const requestData = GCKMediaLoadRequestDataBuilder.alloc().init();
    requestData.queueData = mediaQueueData.build();
    remoteMediaClient.loadMediaWithLoadRequestData(requestData);
  }

  queueNextItem() {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.queueNextItem();
  }

  queuePreviousItem() {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.queuePreviousItem();
  }

  showController() {
    this.mCastContext.presentDefaultExpandedMediaControls();
  }

  // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_information
  getMediaInfo() {
    const remoteMediaClient = this.getRemoteMediaClient();
    if (!remoteMediaClient) {
      return {};
    }
    const mediaInfo = remoteMediaClient.mediaStatus.mediaInformation;
    return this.convertMediaInfo(mediaInfo);
  }

  pauseMedia(customData?: any) {
    this.getRemoteMediaClient().pauseWithCustomData(customData);
  }

  playMedia(customData?: any) {
    this.getRemoteMediaClient().playWithCustomData(customData);
  }

  seekMedia(position: number, resumeState = 0, customData?: any) {
    // GCKMediaControlChannelResumeState.Unchanged: 0
    // GCKMediaControlChannelResumeState.Play: 1
    // GCKMediaControlChannelResumeState.Pause: 2
    this.getRemoteMediaClient().seekToTimeIntervalResumeStateCustomData(position, resumeState, customData);
  }

  stopMedia(customData?: any) {
    this.getRemoteMediaClient().stopWithCustomData(customData);
  }

  setActiveTrackIds(trackIds: number[]) {
    this.getRemoteMediaClient().setActiveTrackIDs(trackIds);
  }

  setTintColor(color: string) {
    const mRouteButton = this.getNativeView();
    mRouteButton.tintColor = new Color(color).ios;
  }

  convertMediaInfo(mediaInfo): CastMediaInfo {
    if (!mediaInfo) {
      return null;
    }
    const metadata = mediaInfo.metadata;
    const metaDataKeys = ios.collections.nsArrayToJSArray(metadata.allKeys());
    const images = <any[]>ios.collections.nsArrayToJSArray(metadata.images());
    let textTracks: CastTextTrack[] = [];

    const castMetadata: CastMetadata = {
      metadataType: metadata.metadataType,
      images: [],
    };

    metaDataKeys.forEach(key => {
      const fixedKey = camelCase(key.replace('kGCKMetadataKey', ''));
      castMetadata[fixedKey] = metadata.objectForKey(key);
    });

    images.forEach(img => {
      castMetadata.images.push({
        url: img.URL.absoluteString,
        width: img.width,
        height: img.height
      });
    });

    if (mediaInfo.mediaTracks) {
      const tracks = <any[]>ios.collections.nsArrayToJSArray(mediaInfo.mediaTracks);
      textTracks = tracks
        .filter((track: any) => track.type === GCKMediaTrackType.Text)
        .map((track) => {
          return {
            id: track.identifier,
            src: track.contentIdentifier,
            contentType: track.contentType,
            name: track.name,
            language: track.languageCode,
          };
        });
    }

    return {
      contentId: mediaInfo.contentID,
      streamType: this.streamTypeNumberToString(mediaInfo.streamType),
      contentType: mediaInfo.contentType,
      metadata: castMetadata,
      duration: mediaInfo.streamDuration,
      textTracks
    };
  }

  repeatModeStringToEnum(repeatMode: string) {
    switch (repeatMode) {
      case 'OFF':
        return GCKMediaRepeatMode.Off;
      case 'SINGLE':
        return GCKMediaRepeatMode.Single;
      case 'ALL':
        return GCKMediaRepeatMode.All;
      case 'ALL_AND_SHUFFLE':
        return GCKMediaRepeatMode.AllAndShuffle;
      default:
        return GCKMediaRepeatMode.Unchanged;
    }
  }
}
