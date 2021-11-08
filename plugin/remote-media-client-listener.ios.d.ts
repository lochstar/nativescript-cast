import { CastButton } from './cast.ios';
import { CastMediaStatus } from './cast.types';
declare class RemoteMediaClientListenerImpl extends NSObject implements GCKRemoteMediaClientListener {
    static ObjCProtocols: {
        prototype: GCKRemoteMediaClientListener;
    }[];
    owner: CastButton;
    remoteMediaClientDidStartMediaSessionWithID(client: GCKRemoteMediaClient, sessionId: number): void;
    remoteMediaClientDidUpdateMediaStatus(client: GCKRemoteMediaClient, mediaStatus: GCKMediaStatus): void;
    remoteMediaClientDidInsertQueueItemsWithIDsBeforeItemWithID?(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number>, beforeItemID: number): void;
    remoteMediaClientDidReceiveQueueItemIDs(client: GCKRemoteMediaClient, queueItemIDs: NSArray<number>): void;
    remoteMediaClientDidReceiveQueueItems(client: GCKRemoteMediaClient, queueItems: NSArray<GCKMediaQueueItem>): void;
    remoteMediaClientDidRemoveQueueItemsWithIDs(client: GCKRemoteMediaClient, queueItems: number[]): void;
    remoteMediaClientDidInsertQueueItemsWithIDs(queueItems: number[]): void;
    remoteMediaClientDidUpdateQueue(client: GCKRemoteMediaClient): void;
    remoteMediaClientDidUpdateQueueItemsWithIDs(client: GCKRemoteMediaClient, queueItems: number[]): void;
    remoteMediaClientDidUpdateMediaMetadata(client: GCKRemoteMediaClient, mediaMetaData: GCKMediaMetadata): void;
    remoteMediaClientDidUpdatePreloadStatus(client: GCKRemoteMediaClient): void;
    protected toCastMediaStatus(mediaStatus: GCKMediaStatus): CastMediaStatus;
}
export { RemoteMediaClientListenerImpl };
