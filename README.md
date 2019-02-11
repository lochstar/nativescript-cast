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

### iOS

Set your Application ID.

```xml
<!-- App_Resources/iOS/Info.plist -->
<key>AppID</key>
<string>4F8B3483</string>
```

Add the following before your `application.start()`. This will initialise the `GCKCastContext` with the Application ID from your `Info.plist` file.

```ts
if (application.ios) {

  class MyLoggerDelegateImpl extends NSObject implements GCKLoggerDelegate {
    static ObjCProtocols = [GCKLoggerDelegate];

    static new(): MyLoggerDelegateImpl {
      return <MyLoggerDelegateImpl>super.new();
    }

    logMessageFromFunction(message, fromFunction) {
      console.log(message, fromFunction);
    }
  }

  class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate, GCKLoggerDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
      // AppID value from Info.plist
      const mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
      const appId = mainBundle.infoDictionary.objectForKey('AppID');

      const castOptions = GCKCastOptions.alloc().initWithReceiverApplicationID(appId);
      GCKCastContext.setSharedInstanceWithOptions(castOptions);

      // Optional logger
      const delegate: MyLoggerDelegateImpl = MyLoggerDelegateImpl.new()
      GCKLogger.sharedInstance().delegate = delegate;

      return true;
    }
  }

  application.ios.delegate = MyDelegate;
}
```

Place the `CastButton` in to your view.

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
          id="cast"
          event="{{ handleCastEvent }}"
        />
      </StackLayout>
    </ActionItem>
  </ActionBar>
  <!-- ... -->
</Page>
```

Set up an event handler for all cast [events](#events). The cast instance is available on `event.object`.

```ts
handleCastEvent(event): void {
  console.log('cast: ' + event.object);
  console.log('eventName: ' + event.data.eventName);
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
    title: 'Sintel',
    subtitle: 'By Blender Foundation',
    description: 'Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org',
    images: [
      {
        url: 'https://d1u5p3l4wpay3k.cloudfront.net/lolesports_gamepedia_en/2/24/Space_eSportslogo_square.png?version=1352e7508b7e001da75af441b9221997',
        width: 300,
        height: 300,
      }
    ]
  }
};

cast.loadMedia(mediaInfo);
```

## API

### <a name="events"></a>Events

Event names follow the Android naming structure. iOS events are passed from `GCKSessionManagerListener`. Android events are passed from both `SessionManagerListener` and `MediaRouter.Callback`.

| NativeScript          | Android               | iOS                    |
| --------------------- | --------------------- | ---------------------- |
| onSessionEnded        | onSessionEnded        | didEndSession          |
| onSessionEnding       | onSessionEnding       | willEndSession         |
| onSessionResumed      | onSessionResumed      | didResumeSession       |
| onSessionResuming     | onSessionResuming     | willResumeSession      |
| onSessionStarted      | onSessionStarted      | didStartSession        |
| onSessionStartFailed  | onSessionStartFailed  | didFailToStartSession  |
| onSessionStarting     | onSessionStarting     | willStartSession       |
| onSessionSuspended    | onSessionSuspended    | didSuspendSession      |
| onDeviceVolumeChanged | onRouteVolumeChanged  | didReceiveDeviceVolume |
| onDeviceChanged       | onRouteChanged        | didUpdateDevice        |

All unlisted events are ignored. See related documentation for futher details.

 - Android: [SessionManagerListener](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/SessionManagerListener) & [MediaRouter.Callback](https://developer.android.com/reference/android/support/v7/media/MediaRouter.Callback)
 - iOS: [GCKSessionManagerListener](https://developers.google.com/cast/v3/reference/ios/protocol_g_c_k_session_manager_listener-p)

### Methods

- `loadMedia(mediaInfo, autoplay, position): void`

  Loads the specified media.

- `playMedia(): void`

  Plays the loaded media.

- `pauseMedia(): void`

  Pauses the loaded media.

- `seekMedia(position, resumeState, customData): void`

  Seeks the loaded media to position (seconds).

- `stopMedia(): void`

  Stops the loaded media.

- `getMediaInfo(): void`

  Returns the loaded media info.

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

- NativeScript 5.0 Support
- Angular support.
- Vue support.
- Set Application ID in single location.
- Handle `customData`.
- Handle `mediaTracks`.
- Handle `textTrackStyle`.
- Complete [Cast Reference app](https://developers.google.com/cast/docs/downloads) that adheres to the [Google Cast Design Checklist](https://developers.google.com/cast/docs/design_checklist/sender).
