import { CastButtonBase } from './cast.common';

declare let GCKUICastButton: any;
declare let GCKSession: any;
declare let GCKCastSession: any;
declare let GCKSessionManager: any;
declare let GCKDevice: any;
declare let GCKSessionManagerListener: any;
declare let CGRectMake: any;
declare let CGRect: any;
declare let GCKCastContext: any;
declare let CGRectZero: any;
declare let GCKMediaStreamTypeBuffered: any;

class SessionManagerListenerImpl extends NSObject implements GCKSessionManagerListener  {
  public static ObjCProtocols = [GCKSessionManagerListener];

  owner: any;

  public sessionManagerWillStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    console.log('willStartSession');
    if (!this.owner) {
      return;
    }
    this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
      sessionEventName: 'onSessionStarting',
      session: session
    });
  }
  public sessionManagerDidStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    console.log('didStartSession');
    if (!this.owner) {
      return;
    }
    this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
      sessionEventName: 'onSessionStarted',
      session: session
    });
  }
  public sessionManagerWillStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    console.log('willStartCastSession');
  }
  public sessionManagerDidStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    console.log('didStartCastSession');
  }
  public sessionManagerWillEndSession(sessionManager: GCKSessionManager, session: GCKSession) {
    console.log('willEndSession');
  }
  public sessionManagerDidEndSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, withError: NSError) {
    console.log('didEndSession');
  }
  public sessionManagerWillEndCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    console.log('willEndCastSession');
  }
  public sessionManagerDidEndCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, withError: NSError) {
    console.log('didEndCastSession');
  }
  public sessionManagerDidFailToStartSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, withError: NSError) {
    console.log('didFailToStartSession');
  }
  public sessionManagerDidFailToStartCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, withError: NSError) {
    console.log('didFailToStartCastSession');
  }
  public sessionManagerDidSuspendSessionWithReason(sessionManager: GCKSessionManager, session: GCKSession, withReason: GCKConnectionSuspendReason) {
    console.log('didSuspendSession');
  }
  public sessionManagerDidSuspendCastSessionWithReason(sessionManager: GCKSessionManager, session: GCKCastSession, withReason: GCKConnectionSuspendReason) {
    console.log('didSuspendCastSession');
  }
  public sessionManagerWillResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    console.log('willResumeSession');
  }
  public sessionManagerDidResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    console.log('didResumeSession');
  }
  public sessionManagerWillResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    console.log('willResumeCastSession');
  }
  public sessionManagerDidResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    console.log('didResumeCastSession');
  }
  public sessionManagerSessionDidUpdateDevice(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice) {
    console.log('didUpdateDevice');
  }
  public sessionManagerSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKSession, volume: number) {
    console.log('didReceiveDeviceVolume');
  }
  public sessionManagerCastSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number) {
    console.log('castSession: didReceiveDeviceVolume');
  }
  public sessionManagerSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKSession, statusText: string) {
    console.log('didReceiveDeviceStatus');
  }
  public sessionManagerCastSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string) {
    console.log('castSession: didReceiveDeviceStatus');
  }
  public sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory(sessionManager: GCKSessionManager, category: string) {
    console.log('didUpdateDefaultSessionOptionsForDeviceCategory');
  }
}

export class CastButton extends CastButtonBase {

  // added for TypeScript intellisense.
  //nativeView: UIButton;
  nativeView: any;

  public CastDevice: any;

  public mCastContext: any;
  public mSessionManager: any;
  public mSessionManagerListener: any;

  constructor() {
    super();
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    console.log('createNativeView');

    // Create new instance of GCKUICastButton
    const button = GCKUICastButton.alloc().initWithFrame(CGRectMake(0, 0, 24, 24));

    // Get cast context and session manager
    this.mCastContext = GCKCastContext.sharedInstance();
    this.mSessionManager = this.mCastContext.sessionManager;
    this.mSessionManagerListener = new SessionManagerListenerImpl;
    this.mSessionManagerListener.owner = this;

    this.addSessionManagerListener();

    this.CastDevice = GCKDevice;

    return button;
  }

  /**
   * Initializes properties/listeners of the native view.
   */
  initNativeView(): void {
    // Attach the owner to nativeView.
    // When nativeView is tapped we get the owning JS object through this field.
    (<any>this.nativeView).owner = this;

    super.initNativeView();
  }

  /**
   * Clean up references to the native view and resets nativeView to its original state.
   * If you have changed nativeView in some other way except through setNative callbacks
   * you have a chance here to revert it back to its original state
   * so that it could be reused later.
   */
  disposeNativeView(): void {
    // Remove reference from native listener to this instance.
    (<any>this.nativeView).owner = null;

    //this.removeSessionManagerListener();

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  addSessionManagerListener(): void {
    this.mSessionManager.addListener(this.mSessionManagerListener);
  }

  removeSessionManagerListener(): void {
    this.mSessionManager.removeListener(this.mSessionManagerListener);
  }

  getRemoteMediaClient() {
    return this.mSessionManager.currentCastSession.remoteMediaClient;
  }

  remoteMediaClientLoad() {
    // @ts-ignore
    const metadata = GCKMediaMetadata.alloc().initWithMetadataType(GCKMediaMetadataTypeMovie);
    metadata.setStringForKey('Big Buck Bunny', 'kGCKMetadataKeyTitle');
    metadata.setStringForKey('Big Buck Bunny', 'kGCKMetadataKeySubTitle');

    const uri = NSURL.URLWithString('https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg')
    metadata.addImage(GCKImage.alloc().initWithURLWidthHeight(uri, 768, 1158));

    const contentID = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    const streamType = GCKMediaStreamTypeBuffered;
    const contentType = 'videos/mp4';
    const streamDuration = null;
    const mediaTracks = null;
    const textTrackStyle = null;
    const customData = null;

    const mediaInfo = GCKMediaInformation.alloc().initWithContentIDStreamTypeContentTypeMetadataStreamDurationMediaTracksTextTrackStyleCustomData(contentID, streamType, contentType, metadata, streamDuration, mediaTracks, textTrackStyle, customData)

    const options = GCKMediaLoadOptions.alloc().init();
    options.autoplay = true;
    options.playPosition = 0;
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.loadMediaWithOptions(mediaInfo, options);
  }
}
