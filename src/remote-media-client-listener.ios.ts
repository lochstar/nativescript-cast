import { Utils } from '@nativescript/core';
import { CastButtonBase } from './cast.common';
import {
  CastButton,
  convertMediaInfo,
  queueTypeEnumToString,
  repeatModeEnumToString,
} from './cast.ios';
import {
  CastEvent,
  PlayerState,
  CastMediaStatus,
} from './cast.types';

function setup() {
  @NativeClass()
  class RemoteMediaClientListenerImpl extends NSObject implements GCKRemoteMediaClientListener {
    public static ObjCProtocols = [GCKRemoteMediaClientListener];
    public owner: CastButton;

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
          info = convertMediaInfo(mediaInfo);
        }
      }
      this.owner.sendEvent(CastButtonBase.castEvent, {
        eventName: CastEvent.onMediaStatusChanged,
        status,
        info,
        ios: this.owner.nativeView
      });
    }

    public remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number>, beforeItemID: number): void {
      // console.log('remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID');
      // console.log(queueItemIDs);
    }

    public remoteMediaClientDidReceiveQueueItemIDs(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number>): void {
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
    }

    public remoteMediaClientDidReceiveQueueItems(client: GCKRemoteMediaClient, queueItems: NSArray<GCKMediaQueueItem>): void {
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
    }

    public remoteMediaClientDidRemoveQueueItemsWithIDs(client: GCKRemoteMediaClient, queueItems: number[]) {
      // console.log('remoteMediaClientDidRemoveQueueItemsWithIDs');
      // console.log(queueItems);
    }

    public remoteMediaClientDidInsertQueueItemsWithIDs(queueItems: number[]) {
      // console.log('didInremoteMediaClientDidInsertQueueItemsWithIDssertQueueItemsWithIDs');
      // console.log(queueItems);
    }

    public remoteMediaClientDidUpdateQueue(client: GCKRemoteMediaClient): void {
      // console.log('remoteMediaClientDidUpdateQueue');
    }

    public remoteMediaClientDidUpdateQueueItemsWithIDs(client: GCKRemoteMediaClient, queueItems: number[]) {
      // console.log('remoteMediaClientDidUpdateQueueItemsWithIDs');
      // console.log(queueItems);
    }

    public remoteMediaClientDidUpdateMediaMetadata(client: GCKRemoteMediaClient, mediaMetaData: GCKMediaMetadata): void {
      // console.log('remoteMediaClientDidUpdateMediaMetadata');
      // console.log(mediaMetaData);
    }

    public remoteMediaClientDidUpdatePreloadStatus(client: GCKRemoteMediaClient): void {
      // console.log('remoteMediaClientDidUpdatePreloadStatus');
    }

    protected toCastMediaStatus(mediaStatus: GCKMediaStatus): CastMediaStatus {
      let playerState: PlayerState = PlayerState.UNKNOWN;
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

      const activeTrackIds = mediaStatus.activeTrackIDs
        ? Utils.ios.collections.nsArrayToJSArray(mediaStatus.activeTrackIDs).map((trackId) => +trackId)
        : [];

      let queueData = null;
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
        activeTrackIds,
        playerState,

        idleReason: mediaStatus.idleReason,
        isMuted: mediaStatus.isMuted,
        playbackRate: mediaStatus.playbackRate,
        streamPosition: mediaStatus.streamPosition,
        volume: mediaStatus.volume,  // not working?

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
    }
  }
}

export const RemoteMediaClientListenerImpl = setup();
