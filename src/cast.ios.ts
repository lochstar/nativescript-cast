import { ios } from 'tns-core-modules/utils/utils';
import { Color } from 'tns-core-modules/color';
import { CastButtonBase } from './cast.common';
import {
  CastMediaInfo,
  CastMetadata,
  CastTextTrack,
  CastTextTrackStyle,
  RepeatMode,
  ResumeState,
  QueueType,
  LoadMediaOptions,
  LoadQueueOptions,
  QueueInsertItemOptions,
  QueueInsertItemsOptions,
  QueueUpdateItemsOptions,
  QueueItemOptions,
} from './cast.types';
import { SessionManagerListenerImpl } from './session-manager-listener.ios';
import { RemoteMediaClientListenerImpl } from './remote-media-client-listener.ios';
import { MediaQueueDelegate } from './media-queue-delegate.ios';

const camelCase = require('lodash/fp/camelCase');
const upperFirst = require('lodash/fp/upperFirst');

const METADATA_PREFIX = 'kGCKMetadataKey';
// const REPEAT_MODE_PREFIX = 'GCKMediaRepeatMode';

declare const NSArray: any;
declare const NSURL: any;
declare const NSMutableArray: any;

export function streamTypeNumberToString(streamType: number) {
  switch (streamType) {
    case GCKMediaStreamType.Buffered:
      return 'BUFFERED';
    case GCKMediaStreamType.Live:
      return 'LIVE';
    case GCKMediaStreamType.Unknown:
      return 'UNKNOWN';
    default:
      return 'NONE';
  }
}

export function repeatModeStringToEnum(repeatMode: RepeatMode): GCKMediaRepeatMode {
  switch (repeatMode) {
    case RepeatMode.OFF:
      return GCKMediaRepeatMode.Off;
    case RepeatMode.SINGLE:
      return GCKMediaRepeatMode.Single;
    case RepeatMode.ALL:
      return GCKMediaRepeatMode.All;
    case RepeatMode.ALL_AND_SHUFFLE:
      return GCKMediaRepeatMode.AllAndShuffle;
    default:
      return GCKMediaRepeatMode.Unchanged;
  }
}

export function repeatModeEnumToString(repeatMode: GCKMediaRepeatMode): RepeatMode {
  switch (repeatMode) {
    case GCKMediaRepeatMode.Off:
      return RepeatMode.OFF;
    case GCKMediaRepeatMode.Single:
      return RepeatMode.SINGLE;
    case GCKMediaRepeatMode.All:
      return RepeatMode.ALL;
    case GCKMediaRepeatMode.AllAndShuffle:
      return RepeatMode.ALL_AND_SHUFFLE;
    default:
      return RepeatMode.UNCHANGED;
  }
}

export function resumeStateStringToEnum(resumeState: ResumeState): GCKMediaResumeState {
  switch (resumeState) {
    case ResumeState.PLAY:
      return GCKMediaResumeState.Play;
    case ResumeState.PAUSE:
      return GCKMediaResumeState.Pause;
    default:
      return GCKMediaResumeState.Unchanged;
  }
}

export function queueTypeStringToEnum(queueType: QueueType): GCKMediaQueueType {
  switch (queueType) {
    case QueueType.ALBUM:
      return GCKMediaQueueType.Album;
    case QueueType.PLAYLIST:
      return GCKMediaQueueType.Playlist;
    case QueueType.AUDIO_BOOK:
      return GCKMediaQueueType.AudioBook;
    case QueueType.RADIO_STATION:
      return GCKMediaQueueType.RadioStation;
    case QueueType.PODCAST_SERIES:
      return GCKMediaQueueType.PodcastSeries;
    case QueueType.TV_SERIES:
      return GCKMediaQueueType.TVSeries;
    case QueueType.VIDEO_PLAYLIST:
      return GCKMediaQueueType.VideoPlayList;
    case QueueType.LIVE_TV:
      return GCKMediaQueueType.LiveTV;
    case QueueType.MOVIE:
      return GCKMediaQueueType.Movie;
    default:
      return GCKMediaQueueType.Generic;
  }
}

export function queueTypeEnumToString(queueType: GCKMediaQueueType): QueueType {
  switch (queueType) {
    case GCKMediaQueueType.Album:
      return QueueType.ALBUM;
    case GCKMediaQueueType.Playlist:
      return QueueType.PLAYLIST;
    case GCKMediaQueueType.AudioBook:
      return QueueType.AUDIO_BOOK;
    case GCKMediaQueueType.RadioStation:
      return QueueType.RADIO_STATION;
    case GCKMediaQueueType.PodcastSeries:
      return QueueType.PODCAST_SERIES;
    case GCKMediaQueueType.TVSeries:
      return QueueType.TV_SERIES;
    case GCKMediaQueueType.VideoPlayList:
      return QueueType.VIDEO_PLAYLIST;
    case GCKMediaQueueType.LiveTV:
      return QueueType.LIVE_TV;
    case GCKMediaQueueType.Movie:
      return QueueType.MOVIE;
    default:
      return QueueType.GENERIC;
  }
}

export function convertMediaInfo(mediaInfo): CastMediaInfo {
  if (!mediaInfo) {
    return null;
  }
  const metadata = mediaInfo.metadata;
  const metaDataKeys = ios.collections.nsArrayToJSArray(metadata.allKeys());
  const images = <any[]>ios.collections.nsArrayToJSArray(metadata.images());
  let textTracks: CastTextTrack[] = [];
  let textTrackStyle: CastTextTrackStyle = {};

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

  if (mediaInfo.textTrackStyle) {
    textTrackStyle = {
      foregroundColor: mediaInfo.textTrackStyle.foregroundColor.CSSString(),
      backgroundColor: mediaInfo.textTrackStyle.foregroundColor.CSSString(),
      // edgeType: mediaInfo.textTrackStyle.edgeType,
      edgeColor: mediaInfo.textTrackStyle.edgeColor.CSSString(),
      // windowType: mediaInfo.textTrackStyle.windowType,
      windowColor: mediaInfo.textTrackStyle.windowColor.CSSString(),
      // windowRoundedCornerRadius: mediaInfo.textTrackStyle.windowRoundedCornerRadius,
      fontFamily: mediaInfo.textTrackStyle.fontFamily,
      // fontGenericFamily
      // fontStyle
      customData: mediaInfo.textTrackStyle.customData
    };
  }

  return {
    contentId: mediaInfo.contentID,
    streamType: streamTypeNumberToString(mediaInfo.streamType),
    contentType: mediaInfo.contentType,
    metadata: castMetadata,
    duration: mediaInfo.streamDuration,
    textTracks: textTracks,
    textTrackStyle: textTrackStyle,
  };
}

export class CastButton extends CastButtonBase {
  public nativeView: GCKUICastButton;

  // public CastDevice: any;

  public mCastContext: GCKCastContext;
  public mSessionManager: GCKSessionManager;
  public mSessionManagerListener: SessionManagerListenerImpl;
  public mRemoteMediaClientListener: RemoteMediaClientListenerImpl;

  public mMediaQueueDelegate: MediaQueueDelegate;

  constructor() {
    super();
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    // Create new instance of GCKUICastButton
    // @ts-ignore
    const button = GCKUICastButton.alloc().initWithFrame(CGRectMake(0, 0, 24, 24));

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

    // this.CastDevice = GCKDevice;

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
    // @ts-ignore
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
    // @ts-ignore
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

    // Handle mediaTracks
    let mediaTracks = null;
    // let mediaTracks = NSArray.arrayWithArray([]);
    if (mediaInfo.textTracks && mediaInfo.textTracks.length > 0) {
      mediaTracks = NSMutableArray.arrayWithCapacity(mediaInfo.textTracks.length);
      mediaInfo.textTracks.forEach((track, index) => {
        mediaTracks.addObject(GCKMediaTrack.alloc().initWithIdentifierContentIdentifierContentTypeTypeTextSubtypeNameLanguageCodeCustomData(
          index + 1, track.src, track.contentType, GCKMediaTrackType.Text, GCKMediaTextTrackSubtype.Subtitles, track.name, track.language, null));
      });
    }

    // Handle textTrackStyle
    let textTrackStyle = null;
    if (mediaInfo.textTrackStyle) {
      textTrackStyle = GCKMediaTextTrackStyle.new();
      textTrackStyle.foregroundColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.foregroundColor);
      textTrackStyle.backgroundColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.backgroundColor);
      // textTrackStyle.edgeType = GCKMediaTextTrackStyleEdgeType.DropShadow;
      textTrackStyle.edgeColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.edgeColor);
      // textTrackStyle.windowType = GCKMediaTextTrackStyleWindowType.RoundedCorners;
      textTrackStyle.windowColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.windowColor);
      // textTrackStyle.windowRoundedCornerRadius
      textTrackStyle.fontFamily = mediaInfo.textTrackStyle.fontFamily;
      // textTrackStyle.fontGenericFamily = GCKMediaTextTrackStyleFontGenericFamily.SansSerif;
      // textTrackStyle.fontStyle = GCKMediaTextTrackStyleFontStyle.Bold;
      textTrackStyle.customData = mediaInfo.textTrackStyle.customData;
    }

    // Convert streamType to number value
    const streamType = typeof mediaInfo.streamType === 'string' ? this.streamTypeStringToNumber(mediaInfo.streamType) : mediaInfo.streamType;

    // Build media info
    const mediaInformation = GCKMediaInformationBuilder.alloc().initWithContentID(mediaInfo.contentId);
    mediaInformation.contentType = mediaInfo.contentType;
    mediaInformation.customData = mediaInfo.customData;
    mediaInformation.mediaTracks = mediaTracks;
    mediaInformation.metadata = metadata;
    mediaInformation.startAbsoluteTime = mediaInfo.startAbsoluteTime;
    mediaInformation.streamDuration = mediaInfo.duration;
    mediaInformation.streamType = streamType;
    mediaInformation.textTrackStyle = textTrackStyle;

    return mediaInformation.build();
  }

  buildQueueItem(options: QueueItemOptions) {
    // Build queue item
    const builtMediaInfo = this.buildMediaInfo(options.mediaInformation);
    const builder = GCKMediaQueueItemBuilder.new();
    builder.mediaInformation = builtMediaInfo;

    // Options
    if (options) {
      builder.autoplay = options.autoplay || true;
      builder.customData = options.customData;
      builder.playbackDuration = options.playbackDuration || Infinity;
      builder.preloadTime = options.preloadTime;
      builder.startTime = options.startTime || 0;

      // Set active track IDs
      if (options.activeTrackIds && options.activeTrackIds.length) {
        builder.activeTrackIDs = NSArray.arrayWithArray(options.activeTrackIds);
      }
    }

    return builder.build();
  }

  loadMedia(media: CastMediaInfo, options?: LoadMediaOptions) {
    // Add listeners to RemoteMediaclient
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.addListener(this.mRemoteMediaClientListener);

    // Set media information
    const builtMediaInfo = this.buildMediaInfo(media);

    // Prepare load request
    const requestData = GCKMediaLoadRequestDataBuilder.new();
    requestData.mediaInformation = builtMediaInfo;

    // Set other options
    if (options) {
      requestData.autoplay = +options.autoplay;  // 0/1
      requestData.credentials = options.credentials;
      requestData.credentialsType = options.credentialsType;
      requestData.customData = options.customData;
      requestData.playbackRate = options.playbackRate;
      requestData.startTime = options.startTime || 0;

      // Set active track IDs
      if (options.activeTrackIds && options.activeTrackIds.length) {
        requestData.activeTrackIDs = NSArray.arrayWithArray(options.activeTrackIds);
      }
    }

    // Load request
    remoteMediaClient.loadMediaWithLoadRequestData(requestData.build());
  }

  loadQueue(options: LoadQueueOptions) {
    // Create queue items
    const queueItems = [];
    options.items.forEach(item => {
      const queueItem = this.buildQueueItem(item);

      // Set queue items to queue data
      if (queueItem) {
        queueItems.push(queueItem);
      } else {
        console.log('queue item not built');
        console.log(item);
      }
    });

    // Create queue
    // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_queue_data_builder
    const mediaQueueData = GCKMediaQueueDataBuilder.new();

    // Queue options
    if (options) {
      mediaQueueData.queueID = options.queueID;
      mediaQueueData.name = options.name;
      mediaQueueData.queueType = queueTypeStringToEnum(options.queueType);
      mediaQueueData.startIndex = options.startIndex || 0;
      mediaQueueData.startTime = options.startTime || 0;

      // Set repeatMode
      if (options.repeatMode) {
        mediaQueueData.repeatMode = repeatModeStringToEnum(options.repeatMode);
      }

      // TODO: Set metadata
      /*
      if (options.containerMetadata) {
        const containerMetadata = GCKMediaQueueContainerMetadataBuilder.new();
        containerMetadata.containerType = options.containerMetadata.containerType;
        containerMetadata.title = options.containerMetadata.title;
        containerMetadata.sections = options.containerMetadata.sections;
        containerMetadata.containerDuration = options.containerMetadata.containerDuration;
        containerMetadata.containerImages = options.containerMetadata.containerImages;
        containerMetadata.authors = options.containerMetadata.authors;
        containerMetadata.narrators = options.containerMetadata.narrators;
        containerMetadata.publisher = options.containerMetadata.publisher;
        containerMetadata.releaseDate = options.containerMetadata.releaseDate;
        mediaQueueData.containerMetadata = containerMetadata.build();
      }
      */
    }

    // Set items to media queue
    mediaQueueData.items = NSArray.arrayWithArray(queueItems);

    // Add listeners to RemoteMediaclient
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.addListener(this.mRemoteMediaClientListener);

    // Add queue event listeners
    const mediaQueue = GCKMediaQueue.alloc().initWithRemoteMediaClientCacheSizeMaxFetchCount(remoteMediaClient, options.clientCacheSize, options.maxFetchCount);
    mediaQueue.addDelegate(this.mMediaQueueDelegate);

    // Prepare load request and set queueData
    const requestData = GCKMediaLoadRequestDataBuilder.new();
    requestData.queueData = mediaQueueData.build();
    remoteMediaClient.loadMediaWithLoadRequestData(requestData.build());

    // Add prev/next buttons to ExpandedMediaControls
    this.mCastContext.defaultExpandedMediaControlsViewController.setButtonTypeAtIndex(GCKUIMediaButtonType.SkipPrevious, 1);
    this.mCastContext.defaultExpandedMediaControlsViewController.setButtonTypeAtIndex(GCKUIMediaButtonType.SkipNext, 2);
  }

  showController() {
    this.mCastContext.presentDefaultExpandedMediaControls();
  }

  showCastInstructions() {
    this.mCastContext.presentCastInstructionsViewControllerOnceWithCastButton(this.nativeView);
  }

  showCastDialog() {
    this.mCastContext.presentCastDialog();
  }

  // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_information
  getMediaInfo() {
    const remoteMediaClient = this.getRemoteMediaClient();
    if (!remoteMediaClient) {
      return {};
    }
    const mediaInfo = remoteMediaClient.mediaStatus.mediaInformation;
    return convertMediaInfo(mediaInfo);
  }

  pauseMedia(customData?: any) {
    this.getRemoteMediaClient().pauseWithCustomData(customData);
  }

  playMedia(customData?: any) {
    this.getRemoteMediaClient().playWithCustomData(customData);
  }

  seekMedia(position: number, resumeState?: ResumeState, customData?: any) {
    this.getRemoteMediaClient().seekToTimeIntervalResumeStateCustomData(position, resumeStateStringToEnum(resumeState), customData);
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

  setVolume(volume: number, customData: any) {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.setStreamVolumeCustomData(volume, customData);
  }

  setMuted(muted: boolean, customData: any) {
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.setStreamMutedCustomData(muted, customData);
  }

  queueNextItem() {
    this.getRemoteMediaClient().queueNextItem();
  }

  queuePreviousItem() {
    this.getRemoteMediaClient().queuePreviousItem();
  }

  queueSetRepeatMode(repeatMode: RepeatMode) {
    this.getRemoteMediaClient().queueSetRepeatMode(repeatModeStringToEnum(repeatMode));
  }

  queueFetchItemIDs() {
    this.getRemoteMediaClient().queueFetchItemIDs();
  }

  queueFetchItemsForIDs(queueItemIDs: number[]) {
    // @ts-ignore
    this.getRemoteMediaClient().queueFetchItemsForIDs(ios.collections.jsArrayToNSArray(queueItemIDs));
  }

  queueInsertItem(options: QueueInsertItemOptions) {
    const queueItem = this.buildQueueItem(options.item);

    if (options.play) {
      this.getRemoteMediaClient().queueInsertAndPlayItemBeforeItemWithIDPlayPositionCustomData(
        queueItem,
        options.beforeItemID || kGCKMediaQueueInvalidItemID,
        options.playPosition || 0,
        options.customData
      );
    } else {
      this.getRemoteMediaClient().queueInsertItemBeforeItemWithID(
        queueItem,
        options.beforeItemID || kGCKMediaQueueInvalidItemID
      );
    }
  }

  queueInsertItems(options: QueueInsertItemsOptions) {
    // Create queue items
    const queueItems = [];
    options.items.forEach(item => {
      const queueItem = this.buildQueueItem(item);
      queueItems.push(queueItem);
    });

    this.getRemoteMediaClient().queueInsertItemsBeforeItemWithIDCustomData(
      queueItems,
      options.beforeItemID || kGCKMediaQueueInvalidItemID,
      options.customData
    );
  }

  queueRemoveItemsWithIDs(itemIDs: number[], customData?: any) {
    this.getRemoteMediaClient().queueRemoveItemsWithIDsCustomData(
      itemIDs,
      customData
    );
  }

  queueReorderItemsWithIDs(itemIDs: number[], beforeItemID: number, customData?: any) {
    this.getRemoteMediaClient().queueReorderItemsWithIDsInsertBeforeItemWithIDCustomData(
      itemIDs,
      beforeItemID || kGCKMediaQueueInvalidItemID,
      customData
    );
  }

  queueJumpToItemWithID(itemID: number, playPosition?: number, customData?: any) {
    this.getRemoteMediaClient().queueJumpToItemWithIDPlayPositionCustomData(
      itemID,
      playPosition,
      customData
    );
  }

  queueUpdateItems(options: QueueUpdateItemsOptions) {
    console.log('queueUpdateItems not implemented');
    /*
    const queueItems = [];
    options.items.forEach(item => {
      const queueItem = this.buildQueueItem(item);
      queueItems.push(queueItem);
    });

    this.getRemoteMediaClient().queueUpdateItemsCustomData(
      queueItems,
      options.customData
    );
    */
  }
}
