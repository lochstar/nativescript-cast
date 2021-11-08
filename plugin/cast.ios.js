import camelCase from 'lodash/fp/camelCase';
import upperFirst from 'lodash/fp/upperFirst';
import { Utils, Color } from '@nativescript/core';
import { CastButtonBase } from './cast.common';
import { MetadataType, QueueType, RepeatMode, ResumeState, StreamType, } from './cast.types';
import { MediaQueueDelegate } from './media-queue-delegate.ios';
import { RemoteMediaClientListenerImpl } from './remote-media-client-listener.ios';
import { SessionManagerListenerImpl } from './session-manager-listener.ios';
const METADATA_PREFIX = 'kGCKMetadataKey';
export function metadataTypeEnumToString(metadataType) {
    switch (metadataType) {
        case 1:
            return MetadataType.MOVIE;
        case 2:
            return MetadataType.TV_SHOW;
        case 3:
            return MetadataType.MUSIC_TRACK;
        case 4:
            return MetadataType.PHOTO;
        case 5:
            return MetadataType.USER;
        case 100:
            return MetadataType.USER;
        default:
            return MetadataType.GENERIC;
    }
}
export function metadataTypeStringToEnum(metadataType) {
    switch (metadataType) {
        case MetadataType.MOVIE:
            return 1;
        case MetadataType.TV_SHOW:
            return 2;
        case MetadataType.MUSIC_TRACK:
            return 3;
        case MetadataType.PHOTO:
            return 4;
        case MetadataType.AUDIO_BOOK_CHAPTER:
            return 5;
        case MetadataType.USER:
            return 100;
        default:
            return 0;
    }
}
export function streamTypeEnumToString(streamType) {
    switch (streamType) {
        case 1:
            return StreamType.BUFFERED;
        case 2:
            return StreamType.LIVE;
        case 99:
            return StreamType.UNKNOWN;
        default:
            return StreamType.NONE;
    }
}
export function streamTypeStringToEnum(streamType) {
    switch (streamType) {
        case StreamType.BUFFERED:
            return 1;
        case StreamType.LIVE:
            return 2;
        case StreamType.UNKNOWN:
            return 99;
        default:
            return 0;
    }
}
export function repeatModeStringToEnum(repeatMode) {
    switch (repeatMode) {
        case RepeatMode.OFF:
            return 1;
        case RepeatMode.SINGLE:
            return 2;
        case RepeatMode.ALL:
            return 3;
        case RepeatMode.ALL_AND_SHUFFLE:
            return 4;
        default:
            return 1;
    }
}
export function repeatModeEnumToString(repeatMode) {
    switch (repeatMode) {
        case 1:
            return RepeatMode.OFF;
        case 2:
            return RepeatMode.SINGLE;
        case 3:
            return RepeatMode.ALL;
        case 4:
            return RepeatMode.ALL_AND_SHUFFLE;
        default:
            return RepeatMode.OFF;
    }
}
export function resumeStateStringToEnum(resumeState) {
    switch (resumeState) {
        case ResumeState.PLAY:
            return 1;
        case ResumeState.PAUSE:
            return 2;
        default:
            return 0;
    }
}
export function queueTypeStringToEnum(queueType) {
    switch (queueType) {
        case QueueType.ALBUM:
            return 1;
        case QueueType.PLAYLIST:
            return 2;
        case QueueType.AUDIO_BOOK:
            return 3;
        case QueueType.RADIO_STATION:
            return 4;
        case QueueType.PODCAST_SERIES:
            return 5;
        case QueueType.TV_SERIES:
            return 6;
        case QueueType.VIDEO_PLAYLIST:
            return 7;
        case QueueType.LIVE_TV:
            return 8;
        case QueueType.MOVIE:
            return 9;
        default:
            return 0;
    }
}
export function queueTypeEnumToString(queueType) {
    switch (queueType) {
        case 1:
            return QueueType.ALBUM;
        case 2:
            return QueueType.PLAYLIST;
        case 3:
            return QueueType.AUDIO_BOOK;
        case 4:
            return QueueType.RADIO_STATION;
        case 5:
            return QueueType.PODCAST_SERIES;
        case 6:
            return QueueType.TV_SERIES;
        case 7:
            return QueueType.VIDEO_PLAYLIST;
        case 8:
            return QueueType.LIVE_TV;
        case 9:
            return QueueType.MOVIE;
        default:
            return QueueType.GENERIC;
    }
}
export function convertMediaInfo(mediaInfo) {
    if (!mediaInfo) {
        return null;
    }
    const metadata = mediaInfo.metadata;
    const metaDataKeys = Utils.ios.collections.nsArrayToJSArray(metadata.allKeys());
    const images = Utils.ios.collections.nsArrayToJSArray(metadata.images());
    let textTracks = [];
    let textTrackStyle = {};
    const castMetadata = {
        metadataType: metadataTypeEnumToString(metadata.metadataType),
        images: [],
    };
    metaDataKeys.forEach((key) => {
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
        const tracks = Utils.ios.collections.nsArrayToJSArray(mediaInfo.mediaTracks);
        textTracks = tracks
            .filter((track) => track.type === 1)
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
            edgeColor: mediaInfo.textTrackStyle.edgeColor.CSSString(),
            windowColor: mediaInfo.textTrackStyle.windowColor.CSSString(),
            fontFamily: mediaInfo.textTrackStyle.fontFamily,
            customData: mediaInfo.textTrackStyle.customData
        };
    }
    return {
        contentId: mediaInfo.contentID,
        streamType: streamTypeEnumToString(mediaInfo.streamType),
        contentType: mediaInfo.contentType,
        metadata: castMetadata,
        duration: mediaInfo.streamDuration,
        textTracks: textTracks,
        textTrackStyle: textTrackStyle,
    };
}
export class CastButton extends CastButtonBase {
    createNativeView() {
        const button = new GCKUICastButton();
        this.mCastContext = GCKCastContext.sharedInstance();
        this.mCastContext.useDefaultExpandedMediaControls = true;
        this.mSessionManager = this.mCastContext.sessionManager;
        this.mSessionManagerListener = new SessionManagerListenerImpl();
        this.mSessionManagerListener.owner = this;
        this.mRemoteMediaClientListener = new RemoteMediaClientListenerImpl();
        this.mRemoteMediaClientListener.owner = this;
        this.mMediaQueueDelegate = new MediaQueueDelegate();
        this.mMediaQueueDelegate.owner = this;
        this.addSessionManagerListener();
        return button;
    }
    getNativeView() {
        return this.nativeView;
    }
    initNativeView() {
        this.nativeView.owner = this;
        super.initNativeView();
    }
    disposeNativeView() {
        this.nativeView.owner = null;
        this.removeSessionManagerListener();
        super.disposeNativeView();
    }
    addSessionManagerListener() {
        this.mSessionManager.addListener(this.mSessionManagerListener);
    }
    removeSessionManagerListener() {
        this.mSessionManager.removeListener(this.mSessionManagerListener);
    }
    getRemoteMediaClient() {
        return this.mSessionManager.currentCastSession.remoteMediaClient;
    }
    buildMediaInfo(mediaInfo) {
        let metadata;
        if (mediaInfo.metadata) {
            const metadataType = metadataTypeStringToEnum(mediaInfo.metadata.metadataType);
            metadata = GCKMediaMetadata.alloc().initWithMetadataType(metadataType);
            Object.keys(mediaInfo.metadata).forEach(key => {
                if (CastButtonBase.validMetadataKeys.indexOf(key) > -1) {
                    const fixedKey = METADATA_PREFIX + upperFirst(key);
                    const value = mediaInfo.metadata[key];
                    metadata.setStringForKey(value, fixedKey);
                }
            });
            if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
                mediaInfo.metadata.images.forEach(img => {
                    const uri = NSURL.URLWithString(img.url);
                    metadata.addImage(GCKImage.alloc().initWithURLWidthHeight(uri, img.width, img.height));
                });
            }
        }
        let mediaTracks = null;
        if (mediaInfo.textTracks && mediaInfo.textTracks.length > 0) {
            mediaTracks = NSMutableArray.arrayWithCapacity(mediaInfo.textTracks.length);
            mediaInfo.textTracks.forEach((track, index) => {
                mediaTracks.addObject(GCKMediaTrack.alloc().initWithIdentifierContentIdentifierContentTypeTypeTextSubtypeNameLanguageCodeCustomData(index + 1, track.src, track.contentType, 1, 1, track.name, track.language, null));
            });
        }
        let textTrackStyle = null;
        if (mediaInfo.textTrackStyle) {
            textTrackStyle = GCKMediaTextTrackStyle.new();
            textTrackStyle.foregroundColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.foregroundColor);
            textTrackStyle.backgroundColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.backgroundColor);
            textTrackStyle.edgeColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.edgeColor);
            textTrackStyle.windowColor = GCKColor.alloc().initWithCSSString(mediaInfo.textTrackStyle.windowColor);
            textTrackStyle.fontFamily = mediaInfo.textTrackStyle.fontFamily;
            textTrackStyle.customData = mediaInfo.textTrackStyle.customData;
        }
        const streamType = typeof mediaInfo.streamType === 'string' ? streamTypeStringToEnum(mediaInfo.streamType) : mediaInfo.streamType;
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
    buildQueueItem(options) {
        const builtMediaInfo = this.buildMediaInfo(options.mediaInformation);
        const builder = GCKMediaQueueItemBuilder.new();
        builder.mediaInformation = builtMediaInfo;
        if (options) {
            builder.autoplay = options.autoplay || true;
            builder.customData = options.customData;
            builder.playbackDuration = options.playbackDuration || Infinity;
            builder.preloadTime = options.preloadTime;
            builder.startTime = options.startTime || 0;
            if (options.activeTrackIds && options.activeTrackIds.length) {
                builder.activeTrackIDs = NSArray.arrayWithArray(options.activeTrackIds);
            }
        }
        return builder.build();
    }
    loadMedia(media, autoplay = true, position = 0) {
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.addListener(this.mRemoteMediaClientListener);
        const builtMediaInfo = this.buildMediaInfo(media);
        const requestData = GCKMediaLoadRequestDataBuilder.new();
        requestData.mediaInformation = builtMediaInfo;
        requestData.autoplay = +autoplay;
        requestData.startTime = position;
        remoteMediaClient.loadMediaWithLoadRequestData(requestData.build());
    }
    loadQueue(options) {
        const queueItems = [];
        options.items.forEach(item => {
            const queueItem = this.buildQueueItem(item);
            if (queueItem) {
                queueItems.push(queueItem);
            }
            else {
                console.log('queue item not built');
                console.log(item);
            }
        });
        const mediaQueueData = GCKMediaQueueDataBuilder.new();
        if (options) {
            mediaQueueData.queueID = options.queueID;
            mediaQueueData.name = options.name;
            mediaQueueData.queueType = queueTypeStringToEnum(options.queueType);
            mediaQueueData.startIndex = options.startIndex || 0;
            mediaQueueData.startTime = options.startTime || 0;
            if (options.repeatMode) {
                mediaQueueData.repeatMode = repeatModeStringToEnum(options.repeatMode);
            }
        }
        mediaQueueData.items = NSArray.arrayWithArray(queueItems);
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.addListener(this.mRemoteMediaClientListener);
        this.mMediaQueue = GCKMediaQueue.alloc().initWithRemoteMediaClient(remoteMediaClient);
        this.mMediaQueue.addDelegate(this.mMediaQueueDelegate);
        this.mCastContext.defaultExpandedMediaControlsViewController.setButtonTypeAtIndex(3, 1);
        this.mCastContext.defaultExpandedMediaControlsViewController.setButtonTypeAtIndex(2, 2);
        const requestData = GCKMediaLoadRequestDataBuilder.new();
        requestData.queueData = mediaQueueData.build();
        remoteMediaClient.loadMediaWithLoadRequestData(requestData.build());
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
    getMediaInfo() {
        const remoteMediaClient = this.getRemoteMediaClient();
        if (!remoteMediaClient) {
            return {};
        }
        const mediaInfo = remoteMediaClient.mediaStatus.mediaInformation;
        return convertMediaInfo(mediaInfo);
    }
    pauseMedia(customData) {
        this.getRemoteMediaClient().pauseWithCustomData(customData);
    }
    playMedia(customData) {
        this.getRemoteMediaClient().playWithCustomData(customData);
    }
    seekMedia(position, resumeState, customData) {
        this.getRemoteMediaClient().seekToTimeIntervalResumeStateCustomData(position, resumeStateStringToEnum(resumeState), customData);
    }
    stopMedia(customData) {
        this.getRemoteMediaClient().stopWithCustomData(customData);
    }
    setActiveTrackIds(trackIds) {
        this.getRemoteMediaClient().setActiveTrackIDs(trackIds);
    }
    setTintColor(color) {
        const mRouteButton = this.getNativeView();
        mRouteButton.tintColor = new Color(color).ios;
    }
    setVolume(volume, customData) {
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.setStreamVolumeCustomData(volume, customData);
    }
    setMuted(muted, customData) {
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.setStreamMutedCustomData(muted, customData);
    }
    queueNextItem() {
        this.getRemoteMediaClient().queueNextItem();
    }
    queuePreviousItem() {
        this.getRemoteMediaClient().queuePreviousItem();
    }
    queueSetRepeatMode(repeatMode) {
        this.getRemoteMediaClient().queueSetRepeatMode(repeatModeStringToEnum(repeatMode));
    }
    queueFetchItemIDs() {
        console.log('queueFetchItemIDs not implemented');
    }
    queueFetchItemAtIndex(index) {
        console.log('queueFetchItemAtIndex not implemented');
    }
    queueInsertItem(options) {
        const queueItem = this.buildQueueItem(options.item);
        if (options.play) {
            this.getRemoteMediaClient().queueInsertAndPlayItemBeforeItemWithIDPlayPositionCustomData(queueItem, options.beforeItemID || kGCKMediaQueueInvalidItemID, options.playPosition || 0, options.customData);
        }
        else {
            this.getRemoteMediaClient().queueInsertItemBeforeItemWithID(queueItem, options.beforeItemID || kGCKMediaQueueInvalidItemID);
        }
    }
    queueInsertItems(options) {
        const queueItems = [];
        options.items.forEach(item => {
            const queueItem = this.buildQueueItem(item);
            queueItems.push(queueItem);
        });
        this.getRemoteMediaClient().queueInsertItemsBeforeItemWithIDCustomData(queueItems, options.beforeItemID || kGCKMediaQueueInvalidItemID, options.customData);
    }
    queueRemoveItems(itemIDs, customData) {
        this.getRemoteMediaClient().queueRemoveItemsWithIDsCustomData(itemIDs, customData);
    }
    queueReorderItems(itemIDs, beforeItemID, customData) {
        this.getRemoteMediaClient().queueReorderItemsWithIDsInsertBeforeItemWithIDCustomData(itemIDs, beforeItemID || kGCKMediaQueueInvalidItemID, customData);
    }
    queueJumpToItem(itemID, playPosition, customData) {
        this.getRemoteMediaClient().queueJumpToItemWithIDPlayPositionCustomData(itemID, playPosition, customData);
    }
    queueUpdateItems(options) {
        console.log('queueUpdateItems not implemented');
    }
}
//# sourceMappingURL=cast.ios.js.map