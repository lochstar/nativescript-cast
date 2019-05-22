import { View } from 'tns-core-modules/ui/core/view';
import { Visibility } from 'tns-core-modules/ui/styling/style-properties';

export interface CastMediaInfo {
  contentId: string;
  contentType: string;
  streamType: string;
  metadata: any;
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
  id: number;
  src: string;
  contentType: string;
  name: string;
  language: string;
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

export abstract class CastButtonBase extends View {
  public static validMetadataKeys = [
    'creationDate',
    'releaseDate',
    'broadcastDate',
    'title',
    'subtitle',
    'artist',
    'albumArtist',
    'albumTitle',
    'composer',
    'discNumber',
    'trackNumber',
    'seasonNumber',
    'episodeNumber',
    'seriesTitle',
    'studio',
    'width',
    'height',
    'locationName',
    'locationLatitude',
    'locationLongitude',
  ];

  public static castEvent = 'cast';


    visibility: Visibility;

  public sendEvent(eventName: string, data?: any) {
    this.notify({
      eventName,
      object: this,
      data
    });
  }

  public streamTypeStringToNumber(streamType: string) {
    switch (streamType) {
      case 'BUFFERED':
        return 1;
      case 'LIVE':
        return 2;
      default:  // NONE
        return 0;
    }
  }

  public streamTypeNumberToString(streamType: number) {
    switch (streamType) {
      case 1:
        return 'BUFFERED';
      case 2:
        return 'LIVE';
      default:
        return 'NONE';
    }
  }

  public metadataTypeStringToNumber(metadataType: string) {
    switch (metadataType) {
      case 'MOVIE':
        return 1;
      case 'TV_SHOW':
        return 2;
      case 'MUSIC_TRACK':
        return 3;
      case 'PHOTO':
        return 4;
      case 'USER':
        return 100;
      default:  // GENERIC
        return 0;
    }
  }

  public metadataTypeNumberToString(metadataType: number) {
    switch (metadataType) {
      case 1:
        return 'MOVIE';
      case 2:
        return 'TV_SHOW';
      case 3:
        return 'MUSIC_TRACK';
      case 4:
        return 'PHOTO';
      case 5:
        return 'USER';
      default:
        return 'GENERIC';
    }
  }
}
