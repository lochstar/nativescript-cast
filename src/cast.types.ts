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
  position: number;
}

export interface CastTextTrack {
  id?: number;
  src: string;
  contentType: string;
  name: string;
  language: string;
}

export interface CastMetadata {
  metadataType: 'MOVIE' | 'TV_SHOW' | 'MUSIC_TRACK' | 'PHOTO' | 'USER';
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
  UNKNOWN = "UNKNOWN",
  IDLE = "IDLE",
  PLAYING = "PLAYING",
  PAUSED = "PAUSED",
  BUFFERING = "BUFFERING",
  LOADING = "LOADING"
}

export enum CastEventName {
  onProviderAdded = "onProviderAdded",
  onProviderChanged = "onProviderChanged",
  onProviderRemoved = "onProviderRemoved",
  onRouteAdded = "onRouteAdded",
  onRoutePresentationDisplayChanged = "onRoutePresentationDisplayChanged",
  onRouteRemoved = "onRouteRemoved",
  onRouteSelected = "onRouteSelected",
  onRouteUnselected = "onRouteUnselected",
  onSessionEnded = "onSessionEnded",
  onSessionEnding = "onSessionEnding",
  onSessionResumed = "onSessionResumed",
  onSessionResuming = "onSessionResuming",
  onSessionStarted = "onSessionStarted",
  onSessionStartFailed = "onSessionStartFailed",
  onSessionStarting = "onSessionStarting",
  onSessionSuspended = "onSessionSuspended",
  onDeviceVolumeChanged = "onDeviceVolumeChanged",
  onDeviceChanged = "onDeviceChanged",
  onMediaStatusChanged = "onMediaStatusChanged",
}
