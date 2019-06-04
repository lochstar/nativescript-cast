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

The Google Cast design checklist requires a sender app to provide an expanded controller. Include `ExpandedControllerActivity` in your `AndroidManifest.xml`.

```xml
<!-- App_Resources/Android/src/main/res/AndroidManifest.xml -->
<activity android:name="org.nativescript.cast.CastActivity">
  <!-- ... -->
</activity>

<activity
  android:name="com.google.android.gms.cast.framework.media.widget.ExpandedControllerActivity"
  android:label="@string/app_name"
  android:launchMode="singleTask"
  android:screenOrientation="portrait">
  <intent-filter>
    <action android:name="android.intent.action.MAIN"/>
  </intent-filter>
  <meta-data
    android:name="android.support.PARENT_ACTIVITY"
    android:value="org.nativescript.cast.CastActivity"/>
</activity>
```

If you are using Webpack, add `'nativescript-cast/cast-activity'` and `'nativescript-cast/cast-options-provider'` to `appComponents`.

```js
// webpack.config.js
const appComponents = [
  'tns-core-modules/ui/frame',
  'tns-core-modules/ui/frame/activity',
  'nativescript-cast/cast-activity',
  'nativescript-cast/cast-options-provider'
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
        <cast:CastButton cast="{{ handleCastEvent }}" />
      </StackLayout>
    </ActionItem>
  </ActionBar>
  <!-- ... -->
</Page>
```

#### Angular

Add `NativescriptCastModule` in your app's module `imports`, typically in `app.module.ts`.

```ts
import { NativescriptCastModule } from 'nativescript-cast/angular';

@NgModule({
  imports: [
    NativescriptCastModule
  ]
});
```

Include in your template.

```html
<ActionBar [title]="App Name" >
  <ActionItem ios.position="right">
    <StackLayout>
      <CastButton (cast)="handleCastEvent($event)"></CastButton>
    </StackLayout>
  </ActionItem>
</ActionBar>
```

#### Vue

Register the element in your app's main entry point, typically `main.ts`.

```js
Vue.registerElement('CastButton', () => require('nativescript-cast').CastButton);
```

Include in your template.

```xml
<ActionBar title="App Name">
  <ActionItem ios.position="right">
    <StackLayout>
      <CastButton @cast="handleCastEvent" />
    </StackLayout>
  </ActionItem>
</ActionBar>

```

#### Event handler

Set up an event handler for all cast [events](#events). The cast instance is available on `args.object`.

```ts
handleCastEvent(args): void {
  console.log('cast: ' + args.object);
  console.log('eventName: ' + args.data.eventName);
}
```

#### Casting

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
        url: 'http://storage.googleapis.com/gtv-videos-bucket/sample/images_480x270/TearsOfSteel.jpg',
        width: 480,
        height: 270,
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

- `showController(): void`

  Show the expanded controller.

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
