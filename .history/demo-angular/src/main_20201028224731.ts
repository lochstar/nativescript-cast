import { platformNativeScriptDynamic } from '@nativescript/angular';
import { Application } from '@nativescript/core';
import { AppModule } from './app/app.module';

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
      //console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)
      const appId = NSBundle.mainBundle.objectForInfoDictionaryKey('AppID');
      const castOptions = GCKCastOptions.alloc().initWithReceiverApplicationID(appId);
      GCKCastContext.setSharedInstanceWithOptions(castOptions);

      // Optional logger
      const delegate: MyLoggerDelegateImpl = MyLoggerDelegateImpl.new()
      GCKLogger.sharedInstance().delegate = delegate;

      return true;
    }

    /*
    applicationDidBecomeActive(application: UIApplication): void {
      console.log('applicationDidBecomeActive: ' + application)
    }
    */
  }

  Application.ios.delegate = MyDelegate;
}

// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
platformNativeScriptDynamic().bootstrapModule(AppModule);
