import { CastButtonBase } from './cast.common';
import { CastMediaInfo, LoadQueueOptions, MetadataType, QueueInsertItemOptions, QueueInsertItemsOptions, QueueItemOptions, QueueType, QueueUpdateItemsOptions, RepeatMode, ResumeState, StreamType } from './cast.types';
import { MediaQueueDelegate } from './media-queue-delegate.ios';
import { RemoteMediaClientListenerImpl } from './remote-media-client-listener.ios';
import { SessionManagerListenerImpl } from './session-manager-listener.ios';
export declare function metadataTypeEnumToString(metadataType: GCKMediaMetadataType): MetadataType;
export declare function metadataTypeStringToEnum(metadataType: MetadataType): GCKMediaMetadataType;
export declare function streamTypeEnumToString(streamType: GCKMediaStreamType): StreamType;
export declare function streamTypeStringToEnum(streamType: StreamType): GCKMediaStreamType;
export declare function repeatModeStringToEnum(repeatMode: RepeatMode): GCKMediaRepeatMode;
export declare function repeatModeEnumToString(repeatMode: GCKMediaRepeatMode): RepeatMode;
export declare function resumeStateStringToEnum(resumeState: ResumeState): GCKMediaResumeState;
export declare function queueTypeStringToEnum(queueType: QueueType): GCKMediaQueueType;
export declare function queueTypeEnumToString(queueType: GCKMediaQueueType): QueueType;
export declare function convertMediaInfo(mediaInfo: any): CastMediaInfo;
export declare class CastButton extends CastButtonBase {
    nativeView: GCKUICastButton;
    mCastContext: GCKCastContext;
    mSessionManager: GCKSessionManager;
    mSessionManagerListener: SessionManagerListenerImpl;
    mRemoteMediaClientListener: RemoteMediaClientListenerImpl;
    mMediaQueue: GCKMediaQueue;
    mMediaQueueDelegate: MediaQueueDelegate;
    createNativeView(): Object;
    getNativeView(): any;
    initNativeView(): void;
    disposeNativeView(): void;
    addSessionManagerListener(): void;
    removeSessionManagerListener(): void;
    getRemoteMediaClient(): GCKRemoteMediaClient;
    buildMediaInfo(mediaInfo: CastMediaInfo): GCKMediaInformation;
    buildQueueItem(options: QueueItemOptions): GCKMediaQueueItem;
    loadMedia(media: CastMediaInfo, autoplay?: boolean, position?: number): void;
    loadQueue(options: LoadQueueOptions): void;
    showController(): void;
    showCastInstructions(): void;
    showCastDialog(): void;
    getMediaInfo(): CastMediaInfo | {};
    pauseMedia(customData?: any): void;
    playMedia(customData?: any): void;
    seekMedia(position: number, resumeState?: ResumeState, customData?: any): void;
    stopMedia(customData?: any): void;
    setActiveTrackIds(trackIds: number[]): void;
    setTintColor(color: string): void;
    setVolume(volume: number, customData: any): void;
    setMuted(muted: boolean, customData: any): void;
    queueNextItem(): void;
    queuePreviousItem(): void;
    queueSetRepeatMode(repeatMode: RepeatMode): void;
    queueFetchItemIDs(): void;
    queueFetchItemAtIndex(index: number): void;
    queueInsertItem(options: QueueInsertItemOptions): void;
    queueInsertItems(options: QueueInsertItemsOptions): void;
    queueRemoveItems(itemIDs: number[], customData?: any): void;
    queueReorderItems(itemIDs: number[], beforeItemID: number, customData?: any): void;
    queueJumpToItem(itemID: number, playPosition?: number, customData?: any): void;
    queueUpdateItems(options: QueueUpdateItemsOptions): void;
}