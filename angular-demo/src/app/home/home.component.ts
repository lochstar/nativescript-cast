import { Component } from '@angular/core';
import { EventData } from 'tns-core-modules/ui/core/view';
import { CastEvent, CastMediaInfo, CastMediaStatus, PlayerState } from 'nativescript-cast/cast.types';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    public cast: any;
    public canCast: boolean;
    public hasControl: boolean;

    public mediaStatus: CastMediaStatus;

    public mediaInfoString: string;
    public mediaStatusString: string;

    public title = 'Cast Demo Angular';

    constructor() {
        this.cast = null;
        this.canCast = false;
        this.hasControl = false;
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
            case CastEvent.onMediaStatusChanged:
                this.mediaStatus = args.data.status;
                this.mediaInfoString = JSON.stringify(args.data.info, null, '  ');
                this.mediaStatusString = JSON.stringify(args.data.status, null, '  ');
                const status = args.data.status as CastMediaStatus;

                this.hasControl = status && status.playerState !== PlayerState.IDLE;
                break;
            default:
                break;
        }
    }

    handleLoadTap() {
        const media: CastMediaInfo = {
            contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
            contentType: 'application/vnd.ms-sstr+xml',
            streamType: 'BUFFERED',
            duration: 734,
            metadata: {
                metadataType: 'MOVIE',
                title: 'Tears of Steel',
                subtitle: 'By Blender Foundation',
                description: 'Tears of Steel is licensed as Creative Commons Attribution 3.0.',
                images: [
                    {
                        url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_480x270/TearsOfSteel.jpg',
                        width: 480,
                        height: 270,
                    },
                    {
                        url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_780x1200/TearsOfSteel-780x1200.jpg',
                        width: 780,
                        height: 1200,
                    }
                ]
            },
            textTracks: [
                {
                    src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-en.vtt',
                    contentType: 'text/vtt',
                    name: 'English',
                    language: 'en'
                },
                {
                    src: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TOS-es.vtt',
                    contentType: 'text/vtt',
                    name: 'Spanish',
                    language: 'es'
                }
            ]
        };

        this.cast.loadMedia(media);
    }

    handleShowControllerTap() {
        this.cast.showController();
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

    handleSwitchTextTrackTap() {
        if (!this.mediaStatus.activeTrackIds.length) {
            this.cast.setActiveTrackIds([1]);
        } else if (this.mediaStatus.activeTrackIds[0] === 1) {
            this.cast.setActiveTrackIds([2]);
        } else {
            this.cast.setActiveTrackIds([]);
        }
    }

    handleGetMediaInfoTap() {
        this.mediaInfoString = JSON.stringify(this.cast.getMediaInfo(), null, '  ');
    }
}

