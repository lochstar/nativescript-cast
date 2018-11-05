import * as application from 'tns-core-modules/application';
import { ios } from 'tns-core-modules/application';

class MyLoggerDelegateImpl extends NSObject implements GCKLoggerDelegate {
  static ObjCProtocols = [GCKLoggerDelegate];

  static new(): MyLoggerDelegateImpl {
    return <MyLoggerDelegateImpl>super.new();
  }

  logMessageFromFunction(message, fromFunction) {
    //console.log(message);
  }
}

class MyDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate, GCKLoggerDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
    console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)

    const appId = '4F8B3483';
    const castOptions = GCKCastOptions.alloc().initWithReceiverApplicationID(appId);
    GCKCastContext.setSharedInstanceWithOptions(castOptions);

    //let logFilter = new GCKLoggerFilter();
    //let classesToLog = ["GCKDeviceScanner", "GCKDeviceProvider", "GCKDiscoveryManager", "GCKCastChannel", "GCKMediaControlChannel", "GCKUICastButton", "GCKUIMediaController", "NSMutableDictionary"];
    //logFilter.setLoggingLevel({ forClasses: classesToLog });
    //GCKLogger.sharedInstance().filter = logFilter;
    let delegate: MyLoggerDelegateImpl = MyLoggerDelegateImpl.new()
    GCKLogger.sharedInstance().delegate = delegate;

    return true;
  }

  applicationDidBecomeActive(application: UIApplication): void {
    console.log('applicationDidBecomeActive: ' + application)
  }
}

ios.delegate = MyDelegate;

application.start({ moduleName: 'main-page' });
