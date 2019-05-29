# nativescript-cast

Chromecast support for NativeScript.

## Requirements

You must have a valid Chromecast Application ID. You can obtain one at the [Google Cast Developer Console](https://cast.google.com/publish/).

## Installation

```bash
tns plugin add nativescript-cast
```

## Usage

### Android

Set your Application ID.

```xml
<!-- App_Resources/Android/src/main/res/values/strings.xml -->
<string name="app_id">4F8B3483</string>
```

Android requires your main activity to extend from [FragmentActivity](https://developer.android.com/reference/android/support/v4/app/FragmentActivity). You can create your own or use CastActivity provided by this plugin. The Cast Options Provider class is included with this plugin and will be merged to your `AndroidManifest.xml`.

```xml
<!-- App_Resources/Android/src/main/res/AndroidManifest.xml -->
<activity android:name="org.nativescript.cast.CastActivity">
  <!-- ... -->
</activity>
```

The expanded controls also need to be added to the Android Manifest, take this from the demo example and adjust as needed

```xml
<activity android:name="org.nativescript.cast.ExpandedControlsActivity">
  <!-- use as minimum what is in the demo, and adjust to needs -->
</activity>
```

If you are using Webpack, add `'nativescript-cast/cast-activity'`, `'nativescript-cast/cast-options-provider'` and `'nativescript-cast/extended-controller-activity'` to `appComponents`.

```js
// webpack.config.js
const appComponents = [
  'tns-core-modules/ui/frame',
  'tns-core-modules/ui/frame/activity',
  'nativescript-cast/cast-activity',
  'nativescript-cast/cast-options-provider',
  'nativescript-cast/extended-controller-activity'
];
```

### iOS

Set your Application ID.

```xml
<!-- App_Resources/iOS/Info.plist -->
<key>AppID</key>
<string>4F8B3483</string>
```

Add the following before your `application.run()`. This will initialise the `GCKCastContext` with the Application ID from your `Info.plist` file.

```ts
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

application.on(application.launchEvent, (args) => {
  if (args.ios !== undefined) {
    // AppID value from Info.plist
    const mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
    const appId = mainBundle.infoDictionary.objectForKey('AppID');

    const castOptions = GCKCastOptions.alloc().initWithReceiverApplicationID(appId);
    GCKCastContext.setSharedInstanceWithOptions(castOptions);
  }
});
```

Place the `CastButton` in to your view.

#### NativeScript

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  loaded="pageLoaded"
  class="page"
  xmlns:cast="nativescript-cast"
>
  <ActionBar title="App Name">
    <ActionItem ios.position="right">
      <StackLayout>
        <cast:CastButton
          cast="{{ handleCastEvent }}"
        />
      </StackLayout>
    </ActionItem>
  </ActionBar>
  <!-- ... -->
</Page>
```

#### Vue

Register the element.

```js
Vue.registerElement('CastButton', () => require('nativescript-cast').CastButton);
```

Include in your template.

```xml
<CastButton
  @cast="handleCastEvent"
/>
```

Set up an event handler for all cast [events](#events). The cast instance is available on `args.object`.

```ts
handleCastEvent(args): void {
  console.log('cast: ' + args.object);
  console.log('eventName: ' + args.data.eventName);
}
```

When the Cast receiver is ready, you can load your media.

```ts
const mediaInfo = {
  contentId: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  contentType: 'video/mp4',
  streamType: 'BUFFERED',
  duration: undefined,
  metadata: {
    metadataType: 'MOVIE',
    title: 'Tears of Steel',
    subtitle: 'By Blender Foundation',
    description: 'Sintel is an independently produced short film, initiated by the Blender Foundation.',
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
  ],
  customData: {
    anything: 'you like'
  }
};

cast.loadMedia(mediaInfo);
```

## API

### <a name="events"></a>Events

Event names follow the Android naming structure. iOS events are passed from `GCKSessionManagerListener` and `GCKRemoteMediaClientListener`. Android events are passed from `SessionManagerListener` and `MediaRouter.Callback`.

| NativeScript          | Android               | iOS                                          |
| --------------------- | --------------------- | -------------------------------------------- |
| onSessionEnded        | onSessionEnded        | didEndSession                                |
| onSessionEnding       | onSessionEnding       | willEndSession                               |
| onSessionResumed      | onSessionResumed      | didResumeSession                             |
| onSessionResuming     | onSessionResuming     | willResumeSession                            |
| onSessionStarted      | onSessionStarted      | didStartSession                              |
| onSessionStartFailed  | onSessionStartFailed  | didFailToStartSession                        |
| onSessionStarting     | onSessionStarting     | willStartSession                             |
| onSessionSuspended    | onSessionSuspended    | didSuspendSession                            |
| onDeviceVolumeChanged | onRouteVolumeChanged  | didReceiveDeviceVolume                       |
| onDeviceChanged       | onRouteChanged        | didUpdateDevice                              |
| onMediaStatusChanged  | onStatusUpdated       | remoteMediaClientDidUpdateMediaStatus        |

All unlisted events are ignored. See related documentation for futher details.

 - Android: [SessionManagerListener](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/SessionManagerListener) & [MediaRouter.Callback](https://developer.android.com/reference/android/support/v7/media/MediaRouter.Callback)
 - iOS: [GCKSessionManagerListener](https://developers.google.com/cast/v3/reference/ios/protocol_g_c_k_session_manager_listener-p) & [GCKRemoteMediaClientListener](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_remote_media_client_listener-p)

### Methods

- `loadMedia(mediaInfo, autoplay, position): void`

  Loads the specified media.

- `playMedia(customData): void`

  Plays the loaded media.

- `pauseMedia(customData): void`

  Pauses the loaded media.

- `seekMedia(position, resumeState, customData): void`

  Seeks the loaded media to position (seconds).

- `stopMedia(customData): void`

  Stops the loaded media.

- `getMediaInfo(): void`

  Returns the loaded media info.

- `setActiveTrackIds([trackIds]): void`

  Pass an array of IDs defined in `textTracks` to show subtitles. Pass an empty array to hide.

### mediaInfo

Valid `streamType` values.

- NONE
- BUFFERED
- LIVE

Valid `metadata.metadataType` values.

- GENERIC
- MOVIE
- TV_SHOW
- MUSIC_TRACK
- PHOTO
- USER

## TODO

- Angular support.
- Handle `mediaTracks`.
- Handle `textTrackStyle`.
- Complete [Cast Reference app](https://developers.google.com/cast/docs/downloads) that adheres to the [Google Cast Design Checklist](https://developers.google.com/cast/docs/design_checklist/sender).
