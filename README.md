# nativescript-cast

Chromecast support for NativeScript 6.

## Requirements

You must have a valid Chromecast Application ID. You can obtain one at the [Google Cast Developer Console](https://cast.google.com/publish/).

NativeScript 6 or higher. For lower versions, you can use an older version of this plugin `0.1.2`.

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

The Google Cast design checklist requires a sender app to provide an expanded controller. Include `ExpandedControllerActivity` in your `AndroidManifest.xml`.

```xml
<!-- App_Resources/Android/src/main/res/AndroidManifest.xml -->
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
    android:value="com.tns.NativeScriptActivity"/>
</activity>
```

If you are using Webpack, add `'nativescript-cast/cast-options-provider'` to `appComponents`. You will have to repeat this step after performing a `tns update`.

```js
// webpack.config.js
const appComponents = [
  'tns-core-modules/ui/frame',
  'tns-core-modules/ui/frame/activity',
  'nativescript-cast/cast-options-provider'
];
```

Alternatively you can create a [custom webpack configuration](https://docs.nativescript.org/tooling/custom-webpack-configuration). See the [demo](demo/webpack.config.custom.js) for an example.

---

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

#### ⚠️ iOS 12+ & Xcode 10 ⚠️

If developing using Xcode 10 and targeting iOS devices running iOS 12 or higher, the "Access WiFi Information" capability is required in order to discover and connect to Cast devices. The plugin comes with an `app.entitlements` which will add this capability to the workspace, however, you must also `Add the Access WiFi information feature to your App ID` .

See [iOS sender setup](https://developers.google.com/cast/docs/ios_sender/) for more info.

#### ⚠️ iOS 13+ & Guest Mode ⚠️

iOS 13+ requires Bluetooth and Microphone permissions in order to use Guest Mode with Chromecast. This plugin sets these permissions in the `Info.plist` file.

See [iOS Guest Mode](https://developers.google.com/cast/docs/guest_mode#ios_guest_mode) for more info.

---

### Place `CastButton` in to your view.

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
  textTrackStyle: {
    foregroundColor: '#0000cc',
    backgroundColor: '#00cc00',
  },
  customData: {
    anything: 'you like'
  }
};

cast.loadMedia(mediaInfo);
```

## API

### <a name="events"></a>Events

Event names follow the Android naming structure.
iOS events are passed from `GCKSessionManagerListener`, `GCKRemoteMediaClientListener` and `GCKMediaQueueDelegate`.
Android events are passed from `SessionManagerListener`, `MediaRouter.Callback` and `MediaQueue.Callback`.

| NativeScript             | Android                | iOS                                          |
| ------------------------ | ---------------------- | -------------------------------------------- |
| onSessionEnded           | onSessionEnded         | didEndSession                                |
| onSessionEnding          | onSessionEnding        | willEndSession                               |
| onSessionResumed         | onSessionResumed       | didResumeSession                             |
| onSessionResuming        | onSessionResuming      | willResumeSession                            |
| onSessionStarted         | onSessionStarted       | didStartSession                              |
| onSessionStartFailed     | onSessionStartFailed   | didFailToStartSession                        |
| onSessionStarting        | onSessionStarting      | willStartSession                             |
| onSessionSuspended       | onSessionSuspended     | didSuspendSession                            |
| onDeviceVolumeChanged    | onRouteVolumeChanged   | didReceiveDeviceVolume                       |
| onDeviceChanged          | onRouteChanged         | didUpdateDevice                              |
| onMediaStatusChanged     | onStatusUpdated        | remoteMediaClientDidUpdateMediaStatus        |

| mediaQueueWillChange     | mediaQueueWillChange   | mediaQueueWillChange       |
| itemsReloaded            | itemsReloaded          | mediaQueueDidReloadItems   |
| itemsInsertedInRange     | itemsInsertedInRange   | didInsertItemsInRange      |
| itemsUpdatedAtIndexes    | itemsUpdatedAtIndexes  | didUpdateItemsAtIndexes    |
| itemsRemovedAtIndexes    | itemsRemovedAtIndexes  | didRemoveItemsAtIndexes    |
| mediaQueueChanged        | mediaQueueChanged      | mediaQueueDidChange        |

| onDidReceiveQueueItemIDs | ---                    | remoteMediaClientDidReceiveQueueItemIDs

All unlisted events are ignored. See related documentation for futher details.

#### Android

  - [SessionManagerListener](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/SessionManagerListener)
  - [MediaRouter.Callback](https://developer.android.com/reference/androidx/mediarouter/media/MediaRouter.Callback?hl=id)
  - [MediaQueue.Callback](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/media/MediaQueue.Callback)

### iOS

  - [GCKSessionManagerListener](https://developers.google.com/cast/v3/reference/ios/protocol_g_c_k_session_manager_listener-p)
  - [GCKRemoteMediaClientListener](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_remote_media_client_listener-p)
  - [GCKMediaQueueDelegate](https://developers.google.com/cast/docs/reference/ios/protocol_g_c_k_media_queue_delegate-p)

### Methods

See [cast.types](src/cast.types.ts) for method options.

- `loadMedia(media: CastMediaInfo, options?: LoadMediaOptions): void`

  Loads the specified media.

- `loadQueue(options: LoadQueueOptions): void`

  Loads a queue of media items.

- `playMedia(customData? any): void`

  Plays the loaded media.

- `pauseMedia(customData? any): void`

  Pauses the loaded media.

- `seekMedia(position: number, resumeState?: ResumeState , customData?: any): void`

  Seeks the loaded media to position (seconds).

- `stopMedia(customData? any): void`

  Stops the loaded media.

- `getMediaInfo(): void`

  Returns the loaded media info.

- `setActiveTrackIds([trackIds]): void`

  Pass an array of IDs defined in `textTracks` to show subtitles. Pass an empty array to hide.

- `showController(): void`

  Show the expanded controller.

- `showCastInstructions(title: string, singleTime: boolean): void`

  Shows the Cast instructions overlay.

- `showCastDialog(): void`

  Show the Cast destination dialog.

- `queueNextItem(): void`

  Play the next item in the queue.

- `queuePreviousItem(): void`

  Play the previous item in the queue.

- `queueSetRepeatMode(repeatMode: RepeatMode): void`

  Set the queue repeat mode.

- `queueFetchItemIDs(): void`

  Fetch queue item IDs. The response is returned by the event `onDidReceiveQueueItemIDs`.

- `queueFetchItemAtIndex(index: number): void`

  Fetch queue item data by index. The response is returned by the event `onDidReceiveQueueItems`.

- `queueInsertItem(options: QueueInsertItemOptions): void`

  Insert a single queue item.

- `queueInsertItems(options: QueueInsertItemsOptions): void`

  Insert multiple queue items.

- `queueRemoveItems(itemIDs: number[], customData?: any): void`

  Remove queue items by ID.

- `queueReorderItems(itemIDs: number[], beforeItemID: number, customData?: any): void`

  Reorder queue items by ID.

- `queueJumpToItem(itemID: number, playPosition?: number, customData? any): void`

  Jump to queue item by ID.

## TODO

- Complete [Cast Reference app](https://developers.google.com/cast/docs/downloads) that adheres to the [Google Cast Design Checklist](https://developers.google.com/cast/docs/design_checklist/sender).

## Acknowledgements

- [CodeLab](https://www.codelab.com.au/) - Current employer. Developed this plugin whilst learning NativeScript.
- [loop.tv](https://loop.tv/) - Financed the development of Queue Support.
