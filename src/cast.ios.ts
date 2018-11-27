import { ios } from 'tns-core-modules/utils/utils';
import { CastButtonBase } from './cast.common';

declare let GCKUICastButton: any;
declare let GCKDevice: any;
declare let GCKSessionManagerListener: any;
declare let CGRectMake: any;
declare let GCKCastContext: any;

class SessionManagerListenerImpl extends NSObject implements GCKSessionManagerListener  {
  public static ObjCProtocols = [GCKSessionManagerListener];
  public owner: CastButton;

  constructor() {
    super();

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  public sessionManagerWillStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionStarting',
      session: session
    });
  }

  public sessionManagerDidStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionStarted',
      session: session
    });
  }

  public sessionManagerWillStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    //console.log('willStartCastSession');
  }

  public sessionManagerDidStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    //console.log('didStartCastSession');
  }

  public sessionManagerWillEndSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionEnding',
      session: session
    });
  }

  public sessionManagerDidEndSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionEnded',
      session: session,
      error: error
    });
  }

  public sessionManagerWillEndCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    //console.log('willEndCastSession');
  }

  public sessionManagerDidEndCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    //console.log('didEndCastSession');
  }

  public sessionManagerDidFailToStartSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionStartFailed',
      session: session,
      error: error
    });
  }

  public sessionManagerDidFailToStartCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    //console.log('didFailToStartCastSession');
  }

  public sessionManagerDidSuspendSessionWithReason(sessionManager: GCKSessionManager, session: GCKSession, reason: GCKConnectionSuspendReason) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionSuspended',
      session: session,
      reason: reason
    });
  }

  public sessionManagerDidSuspendCastSessionWithReason(sessionManager: GCKSessionManager, session: GCKCastSession, reason: GCKConnectionSuspendReason) {
    //console.log('didSuspendCastSession');
  }

  public sessionManagerWillResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionResuming',
      session: session
    });
  }

  public sessionManagerDidResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onSessionResumed',
      session: session
    });
  }

  public sessionManagerWillResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    //console.log('willResumeCastSession');
  }

  public sessionManagerDidResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    //console.log('didResumeCastSession');
  }

  public sessionManagerSessionDidUpdateDevice(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice) {
    console.log('didUpdateDevice');
    console.log(device);
    console.log('----------------');

    const deviceJSON = {
      id: device.uniqueID,
      name: device.friendlyName,
      description: device.statusText,
      address: device.ipAddress,

      deviceType: device.type,
      category: device.category,
      version: device.deviceVersion,
      deviceId: device.deviceID,
      deviceVersion: device.deviceVersion,
      modelName: device.modelName,
      status: device.status,
      statusText: device.statusText,
    };
    console.log(deviceJSON);
  }

  public sessionManagerSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKSession, volume: number) {
    this.owner.sendEvent(CastButtonBase.eventEvent, {
      eventName: 'onDeviceVolumeChanged',
      session: session,
      volume: volume
    });
  }

  public sessionManagerCastSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number) {
    //console.log('castSession: didReceiveDeviceVolume');
  }

  public sessionManagerSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKSession, statusText: string) {
    console.log('didReceiveDeviceStatus');
    console.log(statusText);
  }

  public sessionManagerCastSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string) {
    //console.log('castSession: didReceiveDeviceStatus');
  }

  public sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory(sessionManager: GCKSessionManager, category: string) {
    console.log('didUpdateDefaultSessionOptionsForDeviceCategory');
  }
}

export class CastButton extends CastButtonBase {
  nativeView: GCKUICastButton;

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

    this.removeSessionManagerListener();

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

  // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_remote_media_client
  getRemoteMediaClient() {
    return this.mSessionManager.currentCastSession.remoteMediaClient;
  }

  loadMedia(mediaInfo: any, autoplay = true, position?: number) {
    const upperFirst = require('lodash/fp/upperFirst');
    const metadataPrefix = 'kGCKMetadataKey';
    let metadata;

    // Build metadata
    // https://developers.google.com/cast/v2/reference/ios/interface_g_c_k_media_metadata
    if (mediaInfo.metadata) {
      metadata = GCKMediaMetadata.alloc().initWithMetadataType(mediaInfo.metadata.metadataType || 0);

      // Add each valid metadata field
      Object.keys(mediaInfo.metadata).forEach(key => {
        if (CastButtonBase.validMetadataKeys.indexOf(key) > -1) {
          const fixedKey = metadataPrefix + upperFirst(key);
          const value = mediaInfo.metadata[key];
          metadata.setStringForKey(value, eval(fixedKey));
        }
      });

      // Images
      if (mediaInfo.metadata.images && mediaInfo.metadata.images.length) {
        mediaInfo.metadata.images.forEach(img => {
          const uri = NSURL.URLWithString(img.url)
          metadata.addImage(GCKImage.alloc().initWithURLWidthHeight(uri, img.width, img.height));
        });
      }
    }

    // Build media info

    // TODO: handle these fields
    const mediaTracks = null;
    const textTrackStyle = null;
    const customData = null;

    // Convert streamType to number value
    const streamType = typeof mediaInfo.streamType === 'string' ? this.streamTypeStringToNumber(mediaInfo.streamType) : mediaInfo.streamType;

    const builtMediaInfo = GCKMediaInformation.alloc().initWithContentIDStreamTypeContentTypeMetadataStreamDurationMediaTracksTextTrackStyleCustomData(
      mediaInfo.contentId,
      streamType,
      mediaInfo.contentType,
      metadata,
      mediaInfo.streamDuration,
      mediaTracks,
      textTrackStyle,
      customData
    );

    const options = GCKMediaLoadOptions.alloc().init();
    options.autoplay = autoplay;
    options.playPosition = position;
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.loadMediaWithOptions(builtMediaInfo, options);
  }

  // https://developers.google.com/cast/docs/reference/ios/interface_g_c_k_media_information
  getMediaInfo() {
    const camelCase = require('lodash/fp/camelCase');
    const mediaInfo = this.getRemoteMediaClient().mediaStatus.mediaInformation;
    const metadata = mediaInfo.metadata;
    const metaDataKeys = ios.collections.nsArrayToJSArray(metadata.allKeys());
    const images = ios.collections.nsArrayToJSArray(metadata.images());

    let jsonMetadata = {
      metadataType: metadata.metadataType,
      images: [],
    };

    metaDataKeys.forEach(key => {
      const fixedKey = camelCase(key.replace('com.google.cast.metadata.', ''));
      jsonMetadata[fixedKey] = metadata.objectForKey(key);
    });

    images.forEach(img => {
      jsonMetadata.images.push({
        // @ts-ignore
        url: img.URL.absoluteString,
        // @ts-ignore
        width: img.width,
        // @ts-ignore
        height: img.height
      });
    });

    const jsonData = {
      contentId: mediaInfo.contentID,
      streamType: this.streamTypeNumberToString(mediaInfo.streamType),
      contentType: mediaInfo.contentType,
      metadata: jsonMetadata,
      duration: mediaInfo.streamDuration,
    };

    return jsonData;
  }

  pauseMedia(customData?: any) {
    this.getRemoteMediaClient().pauseWithCustomData(customData);
  }

  playMedia(customData?: any) {
    this.getRemoteMediaClient().playWithCustomData(customData);
  }

  seekMedia(position: number, resumeState = 0, customData?: any) {
    // GCKMediaControlChannelResumeStateUnchanged: 0
    // GCKMediaControlChannelResumeStatePlay: 1
    // GCKMediaControlChannelResumeStatePause: 2
    this.getRemoteMediaClient().seekToTimeIntervalResumeStateCustomData(position, resumeState, customData);
  }

  stopMedia(customData?: any) {
    this.getRemoteMediaClient().stopWithCustomData(customData);
  }
}
