import camelCase from 'lodash/fp/camelCase';
import snakeCase from 'lodash/fp/snakeCase';
import { Utils } from '@nativescript/core';
import { CastButtonBase } from './cast.common';
import { CastEvent, MetadataType, PlayerState, QueueType, RepeatMode, StreamType, } from './cast.types';
import { MediaQueueCallback } from './media-queue-callback.android';
import { MediaRouterCallback } from './media-router-callback.android';
import { RemoteMediaClientCallback } from './remote-media-client-callback.android';
import { SessionManagerListenerImpl } from './session-manager-listener.android';
const { MediaRouter, MediaRouteSelector, MediaControlIntent } = androidx.mediarouter.media;
const { CastButtonFactory, CastContext, } = com.google.android.gms.cast.framework;
const { MediaInfo, MediaLoadRequestData, MediaMetadata, MediaQueueData, MediaQueueItem, MediaStatus, MediaTrack, } = com.google.android.gms.cast;
const METADATA_PREFIX = 'KEY_';
const ArrayList = java.util.ArrayList;
const WebImage = com.google.android.gms.common.images.WebImage;
let SessionManagerListener;
function initSessionManagerListener() {
    if (SessionManagerListener) {
        return;
    }
    SessionManagerListener = SessionManagerListenerImpl;
}
let ProgressListener;
function initProgressListener() {
    if (ProgressListener) {
        return;
    }
}
export function metadataTypeEnumToString(metadataType) {
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
export function metadataTypeStringToEnum(metadataType) {
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
export function streamTypeEnumToString(streamType) {
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
export function streamTypeStringToEnum(streamType) {
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
export function repeatModeStringToEnum(repeatMode) {
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
export function repeatModeEnumToString(repeatMode) {
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
export function queueTypeStringToEnum(queueType) {
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
export function queueTypeEnumToString(queueType) {
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
export function convertMediaInfo(mediaInfo) {
    if (!mediaInfo) {
        return null;
    }
    const metadata = mediaInfo.getMetadata();
    const metaDataKeys = Utils.ad.collections.stringSetToStringArray(metadata.keySet());
    const images = metadata.getImages();
    const tracks = mediaInfo.getMediaTracks();
    const textTracks = [];
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
    const castMetadata = {
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
    constructor() {
        super();
    }
    createNativeView() {
        const appContext = Utils.ad.getApplicationContext();
        initSessionManagerListener();
        const button = new androidx.mediarouter.app.MediaRouteButton(this._context);
        CastButtonFactory.setUpMediaRouteButton(appContext, button);
        this.mMediaRouter = MediaRouter.getInstance(appContext);
        this.mMediaRouteSelector = new MediaRouteSelector.Builder()
            .addControlCategory(MediaControlIntent.CATEGORY_LIVE_VIDEO)
            .addControlCategory(MediaControlIntent.CATEGORY_REMOTE_PLAYBACK)
            .build();
        this.mMediaRouterCallback = new MediaRouterCallback(this);
        this.mCastContext = CastContext.getSharedInstance(appContext);
        this.mSessionManager = this.mCastContext.getSessionManager();
        this.mSessionManagerListener = new SessionManagerListener(this);
        this.mRemoteMediaClientCallback = new RemoteMediaClientCallback(this);
        this.mMediaQeueuCallback = new MediaQueueCallback(this);
        this.addMediaRouterCallback();
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
        this.removeMediaRouterCallback();
        this.removeSessionManagerListener();
        super.disposeNativeView();
    }
    addMediaRouterCallback() {
        this.mMediaRouter.addCallback(this.mMediaRouteSelector, this.mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);
    }
    removeMediaRouterCallback() {
        if (this.mMediaRouter && this.mMediaRouterCallback) {
            this.mMediaRouter.removeCallback(this.mMediaRouterCallback);
        }
    }
    addSessionManagerListener() {
        this.mSessionManager.addSessionManagerListener(this.mSessionManagerListener);
    }
    removeSessionManagerListener() {
        this.mSessionManager.removeSessionManagerListener(this.mSessionManagerListener);
    }
    addRemoteMediaClientCallback() {
        this.getRemoteMediaClient().registerCallback(this.mRemoteMediaClientCallback);
    }
    removeRemoteMediaClientCallback() {
        this.getRemoteMediaClient().unregisterCallback(this.mRemoteMediaClientCallback);
    }
    addMediaQueueCallback() {
        const mediaQueue = this.getRemoteMediaClient().getMediaQueue();
        mediaQueue.registerCallback(this.mMediaQeueuCallback);
    }
    removeMediaQueueCallback() {
        const mediaQueue = this.getRemoteMediaClient().getMediaQueue();
        mediaQueue.unregisterCallback(this.mMediaQeueuCallback);
    }
    addProgressListenenr() {
        this.getRemoteMediaClient().addProgressListener(this.mRemoteMediaClientProgressListener, 100);
    }
    removeProgressListener() {
        this.getRemoteMediaClient().removeProgressListener(this.mRemoteMediaClientProgressListener);
    }
    getRemoteMediaClient() {
        return this.mSessionManager.getCurrentCastSession().getRemoteMediaClient();
    }
    buildMediaInfo(mediaInfo) {
        let metadata;
        if (mediaInfo.metadata) {
            const metadataType = metadataTypeStringToEnum(mediaInfo.metadata.metadataType);
            metadata = new MediaMetadata(metadataType);
            Object.keys(mediaInfo.metadata).forEach(key => {
                if (CastButtonBase.validMetadataKeys.indexOf(key) > -1) {
                    const fixedKey = METADATA_PREFIX + snakeCase(key).toUpperCase();
                    const value = mediaInfo.metadata[key];
                    metadata.putString(MediaMetadata[fixedKey], value);
                }
            });
            if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
                mediaInfo.metadata.images.forEach(img => {
                    const uri = android.net.Uri.parse(img.url);
                    const thumb = new WebImage(uri, img.width, img.height);
                    metadata.addImage(thumb);
                });
            }
        }
        const streamType = streamTypeStringToEnum(mediaInfo.streamType);
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
    buildQueueItem(options) {
        const builtMediaInfo = this.buildMediaInfo(options.mediaInformation);
        const builder = new MediaQueueItem.Builder(builtMediaInfo)
            .setAutoplay(options.autoplay || true)
            .setCustomData(options.customData)
            .setPlaybackDuration(options.playbackDuration || Infinity)
            .setPreloadTime(options.preloadTime)
            .setStartTime(options.startTime || 0);
        if (options.activeTrackIds && options.activeTrackIds.length) {
            builder.setActiveTrackIds(options.activeTrackIds);
        }
        return builder.build();
    }
    loadMedia(media, options) {
        const builtMediaInfo = this.buildMediaInfo(media);
        const requestData = new MediaLoadRequestData.Builder()
            .setAutoplay(new java.lang.Boolean(options.autoplay))
            .setCredentials(options.credentials)
            .setCredentialsType(options.credentialsType)
            .setCurrentTime(options.startTime)
            .setCustomData(options.customData)
            .setMediaInfo(builtMediaInfo)
            .setPlaybackRate(options.playbackRate || 1)
            .setQueueData(null);
        if (options.activeTrackIds && options.activeTrackIds.length) {
            requestData.setActiveTrackIds(options.activeTrackIds);
        }
        this.addRemoteMediaClientCallback();
        this.addProgressListenenr();
        this.getRemoteMediaClient().load(requestData.build());
    }
    loadQueue(options) {
        const queueItems = new ArrayList();
        options.items.forEach(item => {
            const queueItem = this.buildQueueItem(item);
            if (queueItem) {
                queueItems.add(queueItem);
            }
            else {
                console.log('queue item not built');
                console.log(item);
            }
        });
        const queueData = new MediaQueueData.Builder();
        if (options) {
            queueData
                .setName(options.name)
                .setQueueId(options.queueID)
                .setQueueType(queueTypeStringToEnum(options.queueType))
                .setRepeatMode(repeatModeStringToEnum(options.repeatMode))
                .setStartIndex(options.startIndex || 0)
                .setStartTime(options.startTime || 0);
        }
        queueData.setItems(queueItems);
        this.addRemoteMediaClientCallback();
        this.addMediaQueueCallback();
        const requestData = new MediaLoadRequestData.Builder()
            .setAutoplay(new java.lang.Boolean(options.autoplay || true))
            .setQueueData(queueData.build());
        this.getRemoteMediaClient().load(requestData.build());
    }
    showController() {
        const intent = new android.content.Intent(this._context, com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity.class);
        this._context.startActivity(intent);
    }
    showCastInstructions(title = 'Touch to cast media to your TV', singleTime = true) {
        const overlay = new com.google.android.gms.cast.framework.IntroductoryOverlay.Builder(this._context, this.getNativeView())
            .setTitleText(title);
        if (singleTime) {
            overlay.setSingleTime();
        }
        overlay.build().show();
    }
    showCastDialog() {
        this.getNativeView().showDialog();
    }
    getMediaInfo() {
        const mediaInfo = this.getRemoteMediaClient().getMediaInfo();
        return convertMediaInfo(mediaInfo);
    }
    pauseMedia(customData) {
        this.getRemoteMediaClient().pause(customData);
    }
    playMedia(customData) {
        this.getRemoteMediaClient().play(customData);
    }
    seekMedia(position, resumeState = 0, customData) {
        this.getRemoteMediaClient().seek(position * 1000, resumeState, customData);
    }
    stopMedia(customData) {
        this.getRemoteMediaClient().stop(customData);
    }
    setActiveTrackIds(trackIds) {
        this.getRemoteMediaClient().setActiveMediaTracks(trackIds);
    }
    setTintColor() {
        console.log('setTintColor not available for Android.');
    }
    setVolume(volume, customData) {
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.setStreamVolume(volume, customData);
    }
    setMuted(muted, customData) {
        const remoteMediaClient = this.getRemoteMediaClient();
        remoteMediaClient.setStreamMute(muted, customData);
    }
    queueNextItem() {
        this.getRemoteMediaClient().queueNext(null);
    }
    queuePreviousItem() {
        this.getRemoteMediaClient().queuePrev(null);
    }
    queueSetRepeatMode(repeatMode) {
        this.getRemoteMediaClient().queueSetRepeatMode(repeatModeStringToEnum(repeatMode), null);
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
            this.getRemoteMediaClient().queueInsertAndPlayItem(queueItem, options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID, options.playPosition || 0, options.customData);
        }
        else {
            this.getRemoteMediaClient().queueInsertItems([queueItem], options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID, options.customData);
        }
    }
    queueInsertItems(options) {
        const queueItems = [];
        options.items.forEach(item => {
            const queueItem = this.buildQueueItem(item);
            queueItems.push(queueItem);
        });
        this.getRemoteMediaClient().queueInsertItems(queueItems, options.beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID, options.customData);
    }
    queueRemoveItems(itemIDs, customData) {
        this.getRemoteMediaClient().queueRemoveItems(itemIDs, customData);
    }
    queueReorderItems(itemIDs, beforeItemID, customData) {
        this.getRemoteMediaClient().queueReorderItems(itemIDs, beforeItemID || com.google.android.gms.cast.MediaQueueItem.INVALID_ITEM_ID, customData);
    }
    queueJumpToItem(itemID, playPosition, customData) {
        this.getRemoteMediaClient().queueJumpToItem(itemID, playPosition, customData);
    }
    queueUpdateItems(options) {
        console.log('queueUpdateItems not implemented');
    }
    onMediaStatusUpdate() {
        const mediaStatus = this.getRemoteMediaClient().getMediaStatus();
        let info = null;
        let status = null;
        if (mediaStatus) {
            const mediaInfo = mediaStatus.getMediaInfo();
            if (mediaInfo) {
                info = convertMediaInfo(mediaInfo);
            }
            let playerState = PlayerState.UNKNOWN;
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
                queueData: {},
                queueItemCount: mediaStatus.getQueueItemCount(),
            };
            if (queueData) {
                status.queueData = {
                    name: queueData.getName(),
                    queueID: queueData.getQueueId(),
                    queueType: queueTypeEnumToString(queueData.getQueueType()),
                    repeatMode: repeatModeEnumToString(queueData.getRepeatMode()),
                    startIndex: queueData.getStartIndex(),
                    startTime: queueData.getStartTime(),
                };
            }
        }
        this.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onMediaStatusChanged,
            status,
            info,
            android: this.nativeView
        });
    }
}
//# sourceMappingURL=cast.android.js.map