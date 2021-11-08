export var PlayerState;
(function (PlayerState) {
    PlayerState["UNKNOWN"] = "UNKNOWN";
    PlayerState["IDLE"] = "IDLE";
    PlayerState["PLAYING"] = "PLAYING";
    PlayerState["PAUSED"] = "PAUSED";
    PlayerState["BUFFERING"] = "BUFFERING";
    PlayerState["LOADING"] = "LOADING";
})(PlayerState || (PlayerState = {}));
export var ResumeState;
(function (ResumeState) {
    ResumeState["UNCHANGED"] = "UNCHANGED";
    ResumeState["PLAY"] = "PLAY";
    ResumeState["PAUSE"] = "PAUSE";
})(ResumeState || (ResumeState = {}));
export var CastEvent;
(function (CastEvent) {
    CastEvent["onProviderAdded"] = "onProviderAdded";
    CastEvent["onProviderChanged"] = "onProviderChanged";
    CastEvent["onProviderRemoved"] = "onProviderRemoved";
    CastEvent["onRouteAdded"] = "onRouteAdded";
    CastEvent["onRoutePresentationDisplayChanged"] = "onRoutePresentationDisplayChanged";
    CastEvent["onRouteRemoved"] = "onRouteRemoved";
    CastEvent["onRouteSelected"] = "onRouteSelected";
    CastEvent["onRouteUnselected"] = "onRouteUnselected";
    CastEvent["onSessionEnded"] = "onSessionEnded";
    CastEvent["onSessionEnding"] = "onSessionEnding";
    CastEvent["onSessionResumed"] = "onSessionResumed";
    CastEvent["onSessionResuming"] = "onSessionResuming";
    CastEvent["onSessionStarted"] = "onSessionStarted";
    CastEvent["onSessionStartFailed"] = "onSessionStartFailed";
    CastEvent["onSessionStarting"] = "onSessionStarting";
    CastEvent["onSessionSuspended"] = "onSessionSuspended";
    CastEvent["onDeviceVolumeChanged"] = "onDeviceVolumeChanged";
    CastEvent["onDeviceChanged"] = "onDeviceChanged";
    CastEvent["onMediaStatusChanged"] = "onMediaStatusChanged";
    CastEvent["mediaQueueWillChange"] = "mediaQueueWillChange";
    CastEvent["itemsReloaded"] = "itemsReloaded";
    CastEvent["itemsInsertedInRange"] = "itemsInsertedInRange";
    CastEvent["itemsUpdatedAtIndexes"] = "itemsUpdatedAtIndexes";
    CastEvent["itemsRemovedAtIndexes"] = "itemsRemovedAtIndexes";
    CastEvent["mediaQueueChanged"] = "mediaQueueChanged";
})(CastEvent || (CastEvent = {}));
export var MetadataType;
(function (MetadataType) {
    MetadataType["MOVIE"] = "MOVIE";
    MetadataType["TV_SHOW"] = "TV_SHOW";
    MetadataType["MUSIC_TRACK"] = "MUSIC_TRACK";
    MetadataType["PHOTO"] = "PHOTO";
    MetadataType["USER"] = "USER";
    MetadataType["AUDIO_BOOK_CHAPTER"] = "AUDIO_BOOK_CHAPTER";
    MetadataType["GENERIC"] = "GENERIC";
})(MetadataType || (MetadataType = {}));
export var StreamType;
(function (StreamType) {
    StreamType["BUFFERED"] = "BUFFERED";
    StreamType["LIVE"] = "LIVE";
    StreamType["UNKNOWN"] = "UNKNOWN";
    StreamType["NONE"] = "NONE";
})(StreamType || (StreamType = {}));
export var QueueType;
(function (QueueType) {
    QueueType["GENERIC"] = "GENERIC";
    QueueType["ALBUM"] = "ALBUM";
    QueueType["PLAYLIST"] = "PLAYLIST";
    QueueType["AUDIO_BOOK"] = "AUDIO_BOOK";
    QueueType["RADIO_STATION"] = "RADIO_STATION";
    QueueType["PODCAST_SERIES"] = "PODCAST_SERIES";
    QueueType["TV_SERIES"] = "TV_SERIES";
    QueueType["VIDEO_PLAYLIST"] = "VIDEO_PLAYLIST";
    QueueType["LIVE_TV"] = "LIVE_TV";
    QueueType["MOVIE"] = "MOVIE";
})(QueueType || (QueueType = {}));
export var RepeatMode;
(function (RepeatMode) {
    RepeatMode["OFF"] = "OFF";
    RepeatMode["SINGLE"] = "SINGLE";
    RepeatMode["ALL"] = "ALL";
    RepeatMode["ALL_AND_SHUFFLE"] = "ALL_AND_SHUFFLE";
})(RepeatMode || (RepeatMode = {}));
//# sourceMappingURL=cast.types.js.map