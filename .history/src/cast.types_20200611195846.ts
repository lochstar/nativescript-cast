export interface CastMediaInfo {
  contentId: string;
  contentType: string;
  streamType: string;
  metadata: CastMetadata;
  textTracks?: CastTextTrack[];
  duration?: number;
  customData?: any;
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
}

export interface CastTextTrack {
  id?: number;
  src: string;
  contentType: string;
  name: string;
  language: string;
}

export interface CastMetadata {
  metadataType: 'MOVIE' | 'TV_SHOW' | 'MUSIC_TRACK' | 'PHOTO' | 'USER' | 'GENERIC';
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

  onDidReceiveQueueItemIDs = 'onDidReceiveQueueItemIDs',
  onDidReceiveQueueItems = 'onDidReceiveQueueItems',

  onDidUpdateQueue = 'onDidUpdateQueue',
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
  UNCHANGED = 'UNCHANGED',
  OFF = 'OFF',
  SINGLE = 'SINGLE',
  ALL = 'ALL',
  ALL_AND_SHUFFLE = 'ALL_AND_SHUFFLE',
}

export interface QueueData {
  name: string;
  queueID: string | number;
  queueType: QueueType;
  repeatMode: RepeatMode;
  startIndex: number;
  startTime: number;
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

export interface LoadQueueOptions {
  activeTrackIds?: number[] | null;
  autoplay: boolean;
  containerMetadata?: any;
  customData?: any;
  name: string;
  playbackDuration: number;
  preloadTime: number;
  queueID?: any;
  queueType?: QueueType;
  repeatMode: RepeatMode;
  startIndex?: number;
  startTime: number;
}
