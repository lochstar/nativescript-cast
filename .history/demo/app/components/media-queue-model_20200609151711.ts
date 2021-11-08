import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from 'tns-core-modules/data/observable';
import { EventData } from 'tns-core-modules/ui/core/view';
import { CastEvent, CastMediaInfo, CastMediaStatus, PlayerState, RepeatMode } from 'nativescript-cast/cast.types';

export class MediaQueueModal extends Observable {
  public mediaItems: CastMediaInfo[] = [
    {
      contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      contentType: 'video/mp4',
      streamType: 'BUFFERED',
      duration: 596,
      metadata: {
        metadataType: 'MOVIE',
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
    },
  ];

  public selected: number;

  constructor() {
    super();

    this.dataItems = new ObservableArray<DataItem>();

    for (let i = 0; i < 10; i++) {
      this.dataItems.push(new DataItem(i, "Item " + i, "This is item description."));
    }

    this.selected = 0;
  }

  get dataItems(): ObservableArray<DataItem> {
    return this.get("_dataItems");
  }

  set dataItems(value: ObservableArray<DataItem>) {
    this.set("_dataItems", value);
  }

  handlePrevTap(args: EventData) {
    // this.cast.queuePreviousItem();
    console.log('prev');
  }

  handleNextTap(args: EventData) {
    console.log('next');
    // this.cast.queueNextItem();
  }
}

export class DataItem {
  public id: number;
  public itemName;
  public itemDescription;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.itemName = name;
    this.itemDescription = description;
  }
}
