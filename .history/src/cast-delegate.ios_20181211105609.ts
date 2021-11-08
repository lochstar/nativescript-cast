import * as utils from 'tns-core-modules/utils/utils';

class CastLoggerDelegateImpl extends NSObject implements GCKLoggerDelegate {
  static ObjCProtocols = [GCKLoggerDelegate];

  static new(): CastLoggerDelegateImpl {
    return <CastLoggerDelegateImpl>super.new();
  }

  logMessageFromFunction(message, fromFunction) {
    //console.log(message);
  }
}

export default class CastDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate, GCKLoggerDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
    console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)

    const mainBundle = utils.ios.getter(NSBundle, NSBundle.mainBundle);
    const appId = mainBundle.infoDictionary.objectForKey('AppID');
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
