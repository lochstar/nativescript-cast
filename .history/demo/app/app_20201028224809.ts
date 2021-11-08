import { Application } from '@nativescript/core';

if (global.isIOS) {
  @NativeClass()
  class MyLoggerDelegateImpl extends NSObject implements GCKLoggerDelegate {
    static ObjCProtocols = [GCKLoggerDelegate];

    static new(): MyLoggerDelegateImpl {
      return <MyLoggerDelegateImpl>super.new();
    }

    logMessageFromFunction(message, fromFunction) {
      console.log(message, fromFunction);
    }
  }

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

Application.run({ moduleName: 'app-root' });
