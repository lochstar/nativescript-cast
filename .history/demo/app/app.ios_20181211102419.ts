import * as application from 'tns-core-modules/application';
import { ios } from 'tns-core-modules/application';

class CastLoggerDelegateImpl extends NSObject implements GCKLoggerDelegate {
  static ObjCProtocols = [GCKLoggerDelegate];

  static new(): CastLoggerDelegateImpl {
    return <CastLoggerDelegateImpl>super.new();
  }

  logMessageFromFunction(message, fromFunction) {
    //console.log(message);
  }
}

class CastDelegate extends UIResponder implements UIApplicationDelegate {
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
    let delegate: CastLoggerDelegateImpl = CastLoggerDelegateImpl.new()
    GCKLogger.sharedInstance().delegate = delegate;

    return true;
  }

  applicationDidBecomeActive(application: UIApplication): void {
    console.log('applicationDidBecomeActive: ' + application)
  }
}

ios.delegate = CastDelegate;

application.start({ moduleName: 'main-page' });
