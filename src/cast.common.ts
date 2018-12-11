import { CastButton } from './cast';
import { View } from 'tns-core-modules/ui/core/view';
import { Visibility } from "tns-core-modules/ui/styling/style-properties";

export abstract class CastButtonBase extends View implements CastButton {
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

  //public static mediaRouterEventEvent = 'mediaRouterEvent';
  //public static sessionEventEvent = 'sessionEvent';
  public static eventEvent = 'event';
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
      default:
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
}
