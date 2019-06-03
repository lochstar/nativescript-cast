import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

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
      //console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)
      const mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
      //const appId = mainBundle.infoDictionary.objectForKey('AppID');
      const appId = '4E0FE981';
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

  application.ios.delegate = MyDelegate;
}

application.run({ moduleName: 'app-root' });
