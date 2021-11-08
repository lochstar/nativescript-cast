import { View } from '@nativescript/core';
import { Visibility } from '@nativescript/core/ui/styling/style-properties';

export * from './cast.types';

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
}
