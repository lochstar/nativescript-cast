export interface CastMediaInfo {
  contentId: string;
  contentType: string;
  streamType?: StreamType;
  metadata?: CastMetadata;
  textTracks?: CastTextTrack[];
  duration?: number;
  customData?: any;

  startAbsoluteTime?: number;
  textTrackStyle?: CastTextTrackStyle;
}

export interface CastMediaStatus {
  activeTrackIds: number[] | null;
  playerState: PlayerState;

  idleReason: number;
  isMuted: boolean;
  playbackRate: number;
  streamPosition: number;
  volume: number;

  currentItemID: any;
  loadingItemID: any;
  preloadedItemID: any;

  queueData: QueueData;
  queueItemCount: number;

  queueHasPreviousItem?: any;
  queueHasNextItem?: any;
}

export interface CastTextTrack {
  id?: number;
  src: string;
  contentType: string;
  name: string;
  language: string;
}

export interface CastTextTrackStyle {
  backgroundColor?: string;
  customData?: any;
  edgeColor?: any;
  edgeType?: any;
  fontFamily?: any;
  fontGenericFamily?: any;
  fontScale?: any;
  fontStyle?: any;
  foregroundColor?: any;
  windowColor?: any;
  windowRoundedCornerRadius?: any;
  windowType?: any;
}

export interface CastMetadata {
  metadataType: MetadataType;
  images?: {url: string, width: number, height: number}[];
  creationDate?: string;
  releaseDate?: string;
  broadcastDate?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  artist?: string;
  albumArtist?: string;
  albumTitle?: string;
  composer?: string;
  discNumber?: string;
  trackNumber?: string;
  seasonNumber?: string;
  episodeNumber?: string;
  seriesTitle?: string;
  studio?: string;
  width?: string;
  height?: string;
  locationName?: string;
  locationLatitude?: string;
  locationLongitude?: string;
}

export enum PlayerState {
  UNKNOWN = 'UNKNOWN',
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  BUFFERING = 'BUFFERING',
  LOADING = 'LOADING'
}

export enum ResumeState {
  UNCHANGED = 'UNCHANGED',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
}

export enum CastEvent {
  onProviderAdded = 'onProviderAdded',
  onProviderChanged = 'onProviderChanged',
  onProviderRemoved = 'onProviderRemoved',
  onRouteAdded = 'onRouteAdded',
  onRoutePresentationDisplayChanged = 'onRoutePresentationDisplayChanged',
  onRouteRemoved = 'onRouteRemoved',
  onRouteSelected = 'onRouteSelected',
  onRouteUnselected = 'onRouteUnselected',
  onSessionEnded = 'onSessionEnded',
  onSessionEnding = 'onSessionEnding',
  onSessionResumed = 'onSessionResumed',
  onSessionResuming = 'onSessionResuming',
  onSessionStarted = 'onSessionStarted',
  onSessionStartFailed = 'onSessionStartFailed',
  onSessionStarting = 'onSessionStarting',
  onSessionSuspended = 'onSessionSuspended',
  onDeviceVolumeChanged = 'onDeviceVolumeChanged',
  onDeviceChanged = 'onDeviceChanged',
  onMediaStatusChanged = 'onMediaStatusChanged',

  mediaQueueWillChange = 'mediaQueueWillChange',
  itemsReloaded = 'itemsReloaded',
  itemsInsertedInRange = 'itemsInsertedInRange',
  itemsUpdatedAtIndexes = 'itemsUpdatedAtIndexes',
  itemsRemovedAtIndexes = 'itemsRemovedAtIndexes',
  mediaQueueChanged = 'mediaQueueChanged',
}

export enum MetadataType {
  MOVIE = 'MOVIE',
  TV_SHOW = 'TV_SHOW',
  MUSIC_TRACK = 'MUSIC_TRACK',
  PHOTO = 'PHOTO',
  USER = 'USER',
  AUDIO_BOOK_CHAPTER = 'AUDIO_BOOK_CHAPTER',
  GENERIC = 'GENERIC',
}

export enum StreamType {
  BUFFERED = 'BUFFERED',
  LIVE = 'LIVE',
  UNKNOWN = 'UNKNOWN',
  NONE = 'NONE',
}

export enum QueueType {
  GENERIC = 'GENERIC',
  ALBUM = 'ALBUM',
  PLAYLIST = 'PLAYLIST',
  AUDIO_BOOK = 'AUDIO_BOOK',
  RADIO_STATION = 'RADIO_STATION',
  PODCAST_SERIES = 'PODCAST_SERIES',
  TV_SERIES = 'TV_SERIES',
  VIDEO_PLAYLIST = 'VIDEO_PLAYLIST',
  LIVE_TV = 'LIVE_TV',
  MOVIE = 'MOVIE',
}

export enum RepeatMode {
  OFF = 'OFF',
  SINGLE = 'SINGLE',
  ALL = 'ALL',
  ALL_AND_SHUFFLE = 'ALL_AND_SHUFFLE',
}

export interface QueueData {
  name?: string|null;
  queueID?: string | number;
  queueType?: QueueType;
  repeatMode?: RepeatMode;
  startIndex?: number;
  startTime?: number;
}

export interface QueueItem {
  mediaInformation: CastMediaInfo;
  itemID: number;
  autoplay: boolean;
  startTime: number;
  playbackDuration: number;
  preloadTime: number;
  activeTrackIds?: number[] | null;
  customData?: any;
}

export interface LoadMediaOptions {
  activeTrackIds?: number[] | null;
  autoplay?: boolean;
  credentials: any;
  credentialsType: any;
  customData?: any;
  startTime: number;
  playbackRate?: number;
}

export interface LoadQueueOptions {
  activeTrackIds?: number[] | null;
  autoplay?: boolean;
  containerMetadata?: QueueContainerMetadata;
  customData?: any;
  items: QueueItemOptions[];
  name?: string;
  playbackDuration?: number;
  preloadTime?: number;
  queueID?: any;
  queueType?: QueueType;
  repeatMode: RepeatMode;
  startIndex?: number;
  startTime: number;
}

export interface QueueContainerMetadata {
  containerType: QueueContainerType;
  title?: string;
  sections?: any[];
  containerDuration?: number;
  containerImages?: {url: string, width: number, height: number}[];
  authors?: string[];
  narrators?: string[];
  publisher?: string;
  releaseDate?: string;
}

export interface QueueContainerType {
  GENERIC: 'GENERIC';
  AUDIO_BOOK: 'AUDIO_BOOK';
}

export interface QueueItemOptions {
  mediaInformation: CastMediaInfo;
  itemID?: number;
  activeTrackIds?: number[] | null;
  autoplay?: boolean;
  customData?: any;
  playbackDuration?: number;
  preloadTime?: number;
  startTime?: number;
}

export interface QueueInsertItemOptions {
  item: QueueItemOptions;
  beforeItemID?: number;
  playPosition?: number;
  customData?: any;
  play?: boolean;
}

export interface QueueInsertItemsOptions {
  items: QueueItemOptions[];
  beforeItemID?: number;
  playPosition?: number;
  customData?: any;
}

export interface QueueUpdateItemsOptions {
  items: QueueItemOptions[];
  customData?: any;
}
