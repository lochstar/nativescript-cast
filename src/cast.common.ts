import { CastButton } from './cast';
import { View, Property, isIOS } from 'tns-core-modules/ui/core/view';
import { ViewBase } from 'tns-core-modules/ui/core/view-base';
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

  public static mediaRouterEventEvent = 'mediaRouterEvent';
  public static sessionEventEvent = 'sessionEvent';
  visibility: Visibility;

  public sendEvent(eventName: string, data?: any) {
    this.notify({
      eventName,
      object: this,
      data
    });
  }
}
