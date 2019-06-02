import {Component} from '@angular/core';
import { EventData } from 'tns-core-modules/ui/core/view';
import { CastEvent, CastMediaInfo, CastMediaStatus } from 'nativescript-cast/cast.types';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    public cast: any;
    public canCast: boolean;
    public mediaInfo: string;
    title = 'Cast Demo Angular';

    constructor() {
        this.cast = null;
        this.canCast = false;
    }

    onTap() {
        if (this.canCast) {
            this.startCast();
        }
    }

    handleCastEvent(args): void {
        console.log('event: ' + args.data.eventName);

        if (args.object && !this.cast) {
            this.cast = args.object;
        }

        switch (args.data.eventName) {
            case 'onSessionStarted':
            case 'onSessionResumed':
                this.canCast = true;
                break;
            case 'onSessionEnding':
            case 'onSessionEnded':
                this.canCast = false;
                break;
            case 'onDeviceVolumeChanged':
                console.log('volume: ' + args.data.volume);
                break;
            default:
                break;
        }
    }

    startCast() {
        const media: CastMediaInfo = {
            contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
            contentType: 'application/vnd.ms-sstr+xml',
            streamType: 'BUFFERED',
            duration: undefined,
            metadata: {
                metadataType: 'MOVIE',
                title: 'Tears of Steel',
                subtitle: 'By Blender Foundation',
                description: 'Tears of Steel is licensed as Creative Commons Attribution 3.0.',
                images: [
                    {
                        url: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/2/24/Space_eSportslogo_square.png?version=1352e7508b7e001da75af441b9221997',
                        width: 300,
                        height: 300,
                    }
                ]
            },
            textTracks: [
                {
                    src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt',
                    contentType: 'text/vtt',
                    name: 'english',
                    language: 'en'
                },
                {
                    src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt',
                    contentType: 'text/vtt',
                    name: 'spanish',
                    language: 'es'
                }
            ]
        };
        this.cast.loadMedia(media);
    }

    handlePlayTap(args: EventData) {
        this.cast.playMedia();
    }

    handlePauseTap(args: EventData) {
        this.cast.pauseMedia();
    }

    handleSeekTap(args: EventData) {
        this.cast.seekMedia(23);
    }

    handleStopTap(args: EventData) {
        this.cast.stopMedia();
    }

    handleGetMediaInfoTap() {
        const mediaInfo = this.cast.getMediaInfo();
        this.mediaInfo = JSON.stringify(mediaInfo, null, '  ');
    }
}

