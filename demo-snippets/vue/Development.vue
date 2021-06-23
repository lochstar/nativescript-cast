<template>
    <Page>
        <ActionBar>
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
            <Label text="Cast Development Demo" />
        </ActionBar>

        <StackLayout>
            <Label text="This is the nativescript-cast development demo..." />
            <CastButton @cast="handleCastEvent" />

            <Button @tap="handleLoadTap">Load Media</Button>
            <Button @tap="handleAddChannelTap">Add Channel</Button>
        </StackLayout>
    </Page>
</template>

<script>
import {
  CastEvent,
  CastMediaInfo,
  CastMediaStatus,
  PlayerState,
  RepeatMode,
  StreamType,
  MetadataType,
} from '@codelab/nativescript-cast/cast.types';

export default {
    data() {
        return {
            cast: null,
            canCast: false,
            autoplay: true,
            mediaInfo: null,
            mediaStatus: null,
            hasControl: false,

            mediaItems: [
               {
                contentId: 'https://amssamples.streaming.mediaservices.windows.net/bc57e088-27ec-44e0-ac20-a85ccbcd50da/TearsOfSteel.ism/manifest',
                contentType: 'application/vnd.ms-sstr+xml',
                streamType: StreamType.BUFFERED,
                duration: 734,
                metadata: {
                    metadataType: MetadataType.MOVIE,
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
                ],
                    textTrackStyle: {
                        foregroundColor: '#0000cc',
                        backgroundColor: '#00cc00',
                    }
                },
                {
                    contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    contentType: 'video/mp4',
                    streamType: StreamType.BUFFERED,
                    duration: 596,
                    metadata: {
                        metadataType: MetadataType.MOVIE,
                        title: 'Big Buck Bunny',
                        subtitle: 'By Blender Foundation',
                        description: 'Big Buck Bunny is licensed as Creative Commons Attribution 3.0.',
                        images: [
                            {
                                url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_480x270/BigBuckBunny.jpg',
                                width: 480,
                                height: 270,
                            },
                            {
                                url: 'https://storage.googleapis.com/gtv-videos-bucket/sample/images_780x1200/BigBuckBunny-780x1200.jpg',
                                width: 780,
                                height: 1200,
                            }
                        ]
                    }
                },
                {
                    contentId: 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8',
                    contentType: 'video/mp4',
                    streamType: StreamType.LIVE,
                    duration: Infinity,
                    metadata: {
                        metadataType: MetadataType.MUSIC_TRACK,
                        title: 'Double J',
                        subtitle: 'Double J Radio',
                        description: '',
                        images: [
                            {
                                url: 'https://www.abc.net.au/cm/rimage/9990024-1x1-large.jpg',
                                width: 700,
                                height: 700,
                            }
                        ]
                    }
                },
            ]
        }
    },
    methods: {
        handleCastEvent(args) {
            console.log(`event: ${args.data.eventName}`);

            if (args.object && !this.cast) {
                this.cast = args.object;
            }

            switch (args.data.eventName) {
                case CastEvent.onSessionStarted:
                case CastEvent.onSessionResumed:
                    this.canCast = true;
                    break;
                case CastEvent.onSessionEnding:
                case CastEvent.onSessionEnded:
                    this.canCast = false;
                    break;
                case CastEvent.onDeviceVolumeChanged:
                    console.log('volume: ' + args.data.volume);
                    break;
                case CastEvent.onMediaStatusChanged:
                    const info = args.data.info;
                    const status = args.data.status;

                    this.mediaInfo = info;
                    this.mediaStatus = status;
                    this.hasControl = status && status.playerState !== PlayerState.IDLE;
                    break;
                /*
                case CastEvent.mediaQueueChanged:
                    this.cast.queueFetchItemIDs();
                    break;
                case CastEvent.onDidReceiveQueueItemIDs:
                    this.queueItemIDs = args.data.queueItemIDs;
                    break;
                case CastEvent.onDidReceiveQueueItems:
                    this.queueItems = args.data.queueItems;
                    break;
                */
                default:
                    break;
            }
        },

        handleLoadTap(args) {
            this.cast.loadMedia(this.mediaItems[0], {
                autoplay: this.autoplay,
                // activeTrackIds: [1],
                // playbackRate: 2,
                // startTime: 22,
            });
        },

        handleAddChannelTap() {
            this.cast.addChannel('urn:x-cast:test', (msg) => {
                console.log(msg)
            })
        },
    }
};
</script>

<style lang="scss" scoped></style>
