import { View } from '@nativescript/core';
export * from './cast';
export class CastButtonBase extends View {
    constructor() {
        super();
    }
    sendEvent(eventName, data) {
        this.notify({
            eventName,
            object: this,
            data
        });
    }
}
CastButtonBase.validMetadataKeys = [
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
CastButtonBase.castEvent = 'cast';
//# sourceMappingURL=cast.common.js.map