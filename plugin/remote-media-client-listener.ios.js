import { Utils } from '@nativescript/core';
import { CastButtonBase } from './cast.common';
import { convertMediaInfo, queueTypeEnumToString, repeatModeEnumToString, } from './cast.ios';
import { CastEvent, PlayerState, } from './cast.types';
var RemoteMediaClientListenerImpl = /** @class */ (function (_super) {
    __extends(RemoteMediaClientListenerImpl, _super);
    function RemoteMediaClientListenerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidStartMediaSessionWithID = function (client, sessionId) {
        // console.log('didStartMediaSessionWithID ' + sessionId);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidUpdateMediaStatus = function (client, mediaStatus) {
        // console.log('updated mediaStatus');
        var info = null;
        var status = null;
        if (mediaStatus) {
            status = this.toCastMediaStatus(mediaStatus);
            var mediaInfo = mediaStatus.mediaInformation;
            if (mediaInfo) {
                info = convertMediaInfo(mediaInfo);
            }
        }
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onMediaStatusChanged,
            status: status,
            info: info,
            ios: this.owner.nativeView
        });
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID = function (client, queueItemIDs, beforeItemID) {
        // console.log('remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID');
        // console.log(queueItemIDs);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidReceiveQueueItemIDs = function (client, queueItemIDs) {
        /*
        let parsedQueueItemIDs = [];
    
        if (queueItemIDs.count > 0) {
          parsedQueueItemIDs = Utils.ios.collections.nsArrayToJSArray(queueItemIDs);
        }
    
        this.owner.sendEvent(CastButtonBase.castEvent, {
          eventName: CastEvent.onDidReceiveQueueItemIDs,
          queueItemIDs: parsedQueueItemIDs,
          ios: this.owner.nativeView
        });
        */
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidReceiveQueueItems = function (client, queueItems) {
        /*
        const parsedQueueItems = [];
    
        if (queueItems.count > 0) {
          const arr = Utils.ios.collections.nsArrayToJSArray(queueItems);
    
          arr.forEach((item: any) => {
            const activeTrackIds = item.activeTrackIDs
              ? Utils.ios.collections.nsArrayToJSArray(item.activeTrackIDs).map((trackId) => +trackId)
              : [];
    
            const queueItem: QueueItem = {
              mediaInformation: convertMediaInfo(item.mediaInformation),
              itemID: item.itemID,
              autoplay: item.autoplay,
              startTime: item.startTime,
              playbackDuration: item.playbackDuration,
              preloadTime: item.preloadTime,
              activeTrackIds: activeTrackIds,
              customData: item.customData,
            };
            parsedQueueItems.push(queueItem);
          });
        }
    
        this.owner.sendEvent(CastButtonBase.castEvent, {
          eventName: CastEvent.onDidReceiveQueueItems,
          queueItems: parsedQueueItems,
          ios: this.owner.nativeView
        });
        */
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidRemoveQueueItemsWithIDs = function (client, queueItems) {
        // console.log('remoteMediaClientDidRemoveQueueItemsWithIDs');
        // console.log(queueItems);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidInsertQueueItemsWithIDs = function (queueItems) {
        // console.log('didInremoteMediaClientDidInsertQueueItemsWithIDssertQueueItemsWithIDs');
        // console.log(queueItems);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidUpdateQueue = function (client) {
        // console.log('remoteMediaClientDidUpdateQueue');
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidUpdateQueueItemsWithIDs = function (client, queueItems) {
        // console.log('remoteMediaClientDidUpdateQueueItemsWithIDs');
        // console.log(queueItems);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidUpdateMediaMetadata = function (client, mediaMetaData) {
        // console.log('remoteMediaClientDidUpdateMediaMetadata');
        // console.log(mediaMetaData);
    };
    RemoteMediaClientListenerImpl.prototype.remoteMediaClientDidUpdatePreloadStatus = function (client) {
        // console.log('remoteMediaClientDidUpdatePreloadStatus');
    };
    RemoteMediaClientListenerImpl.prototype.toCastMediaStatus = function (mediaStatus) {
        var playerState = PlayerState.UNKNOWN;
        switch (mediaStatus.playerState) {
            case GCKMediaPlayerState.Idle:
                playerState = PlayerState.IDLE;
                break;
            case GCKMediaPlayerState.Playing:
                playerState = PlayerState.PLAYING;
                break;
            case GCKMediaPlayerState.Paused:
                playerState = PlayerState.PAUSED;
                break;
            case GCKMediaPlayerState.Buffering:
                playerState = PlayerState.BUFFERING;
                break;
            case GCKMediaPlayerState.Loading:
                playerState = PlayerState.LOADING;
                break;
            default:
                playerState = PlayerState.UNKNOWN;
                break;
        }
        var activeTrackIds = mediaStatus.activeTrackIDs
            ? Utils.ios.collections.nsArrayToJSArray(mediaStatus.activeTrackIDs).map(function (trackId) { return +trackId; })
            : [];
        var queueData = null;
        if (mediaStatus.queueData) {
            queueData = {
                name: mediaStatus.queueData.name,
                queueID: mediaStatus.queueData.queueID,
                queueType: queueTypeEnumToString(mediaStatus.queueData.queueType),
                repeatMode: repeatModeEnumToString(mediaStatus.queueData.repeatMode),
                // containerMetadata
                startIndex: mediaStatus.queueData.startIndex,
                startTime: mediaStatus.queueData.startTime,
            };
        }
        return {
            activeTrackIds: activeTrackIds,
            playerState: playerState,
            idleReason: mediaStatus.idleReason,
            isMuted: mediaStatus.isMuted,
            playbackRate: mediaStatus.playbackRate,
            streamPosition: mediaStatus.streamPosition,
            volume: mediaStatus.volume,
            currentItemID: mediaStatus.currentItemID,
            loadingItemID: mediaStatus.loadingItemID,
            preloadedItemID: mediaStatus.preloadedItemID,
            queueData: queueData,
            queueItemCount: mediaStatus.queueItemCount,
            // BUG: always returning false?
            // causing prev/next buttons to not work on media controller?
            queueHasPreviousItem: mediaStatus.queueHasPreviousItem,
            queueHasNextItem: mediaStatus.queueHasNextItem,
        };
    };
    RemoteMediaClientListenerImpl.ObjCProtocols = [GCKRemoteMediaClientListener];
    return RemoteMediaClientListenerImpl;
}(NSObject));
export { RemoteMediaClientListenerImpl };
//# sourceMappingURL=remote-media-client-listener.ios.js.map