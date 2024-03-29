# nativescript-cast

[![NPM version][npm-image]][npm-url]

[npm-image]:https://badge.fury.io/js/%40codelab%2Fnativescript-cast.svg
[npm-url]:https://npmjs.org/package/@codelab/nativescript-cast

Chromecast support for NativeScript 7+.

## Requirements

You must have a valid Chromecast Application ID. You can obtain one at the [Google Cast Developer Console](https://cast.google.com/publish/).

## Installation

Note: Since NativeScript 7, the package name is now `@codelab/nativescript-cast`.

```bash
# NativeScript 7
ns plugin add @codelab/nativescript-cast

# Nativescript 6
tns plugin add nativescript-cast@0.3.0

# NativeScript 5
tns plugin add nativescript-cast@0.1.2
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

If you are using Webpack, you will need to include `'@codelab/nativescript-cast/cast-options-provider'` in `appComponents`.

To do this, create a [custom webpack configuration](https://docs.nativescript.org/tooling/custom-webpack-configuration). See the [demo](demo/webpack.config.custom.js) for an example.

---

### iOS

Set your Application ID.

```xml
<!-- App_Resources/iOS/Info.plist -->
<key>AppID</key>
<string>4F8B3483</string>
```

You'll need to set up a delegate to initialise the `GCKCastContext` with your `AppID`. See the [demo](demo/app/app.ts) for an example.

```ts
import { Application } from '@nativescript/core';

if (global.isIOS) {
  @NativeClass()
  class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate, GCKLoggerDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
      const appId = NSBundle.mainBundle.objectForInfoDictionaryKey('AppID');
      const castOptions = GCKCastOptions.alloc().initWithReceiverApplicationID(appId);
      GCKCastContext.setSharedInstanceWithOptions(castOptions);

      // Optional logger
      const delegate: MyLoggerDelegateImpl = MyLoggerDelegateImpl.new();
      GCKLogger.sharedInstance().delegate = delegate;

      return true;
    }
  }

  Application.ios.delegate = MyDelegate;
}
```

#### ⚠️ iOS 12+ & Xcode 10 ⚠️

If developing using Xcode 10 and targeting iOS devices running iOS 12 or higher, the "Access WiFi Information" capability is required in order to discover and connect to Cast devices. The plugin comes with an `app.entitlements` which will add this capability to the workspace, however, you must also `Add the Access WiFi information feature to your App ID` .

See [iOS sender setup](https://developers.google.com/cast/docs/ios_sender/) for more info.

#### ⚠️ iOS 13+ & Guest Mode ⚠️

iOS 13+ requires Bluetooth and Microphone permissions in order to use Guest Mode with Chromecast. This plugin sets these permissions in the `Info.plist` file.

See [iOS Guest Mode](https://developers.google.com/cast/docs/guest_mode#ios_guest_mode) for more info.

#### ⚠️ iOS 14+ ⚠️

iOS 14+ has some permission changes. See [iOS Permission Changes](https://developers.google.com/cast/docs/ios_sender/ios_permissions_changes#ios_14) for more info.

Be sure to set `NSBonjourServices` with your `AppID` as explained in the documentation above. See the [demo](demo/app/App_Resources/iOS/Info.plist#L25-32) for an example.

---

### Place `CastButton` in to your view.

#### NativeScript

```xml
<Page
  xmlns="http://schemas.nativescript.org/tns.xsd"
  loaded="pageLoaded"
  class="page"
  xmlns:cast="@codelab/nativescript-cast"
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
import { NativescriptCastModule } from '"@codelab/nativescript-cast/angular';

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
Vue.registerElement('CastButton', () => require('n"@codelab/ativescript-cast').CastButton);
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
| mediaQueueWillChange     | mediaQueueWillChange   | mediaQueueWillChange                         |
| itemsReloaded            | itemsReloaded          | mediaQueueDidReloadItems                     |
| itemsInsertedInRange     | itemsInsertedInRange   | didInsertItemsInRange                        |
| itemsUpdatedAtIndexes    | itemsUpdatedAtIndexes  | didUpdateItemsAtIndexes                      |
| itemsRemovedAtIndexes    | itemsRemovedAtIndexes  | didRemoveItemsAtIndexes                      |
| mediaQueueChanged        | mediaQueueChanged      | mediaQueueDidChange                          |

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

- `showController(): void`

  Show the expanded controller.

- `showCastInstructions(title: string, singleTime: boolean): void`

  Shows the Cast instructions overlay. `title` and `singleTime` arguments are Android-only.

- `showCastDialog(): void`

  Show the Cast destination dialog.

- `getMediaInfo(): CastMediaInfo`

  Returns the loaded media info.

- `setActiveTrackIds([trackIds]): void`

  Pass an array of IDs defined in `textTracks` to show subtitles. Pass an empty array to hide.

- `queueNextItem(): void`

  Play the next item in the queue.

- `queuePreviousItem(): void`

  Play the previous item in the queue.

- `queueSetRepeatMode(repeatMode: RepeatMode): void`

  Set the queue repeat mode.

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

- More queue-related functions.
- Complete [Cast Reference app](https://developers.google.com/cast/docs/downloads) that adheres to the [Google Cast Design Checklist](https://developers.google.com/cast/docs/design_checklist/sender).

## Acknowledgements

- [CodeLab](https://www.codelab.com.au/) - Current employer. Developed this plugin whilst learning NativeScript.
- [loop.tv](https://loop.tv/) - Financed the development of Queue Support.
