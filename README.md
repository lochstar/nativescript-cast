# nativescript-cast

Chromecast support for Nativescript.

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
<activity android:name="au.com.codelab.cast.CastActivity">
  ...
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

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

| Property | Default | Description |
| --- | --- | --- |
| some property | property default value | property description, default values, etc.. |
| another property | property default value | property description, default values, etc.. |

## License

Apache License Version 2.0, January 2004
