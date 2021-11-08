import { CastButtonBase } from './cast.common';
import { CastButton } from './cast.ios';
import { CastEvent } from './cast.types';

@NativeClass()
class SessionManagerListenerImpl extends NSObject implements GCKSessionManagerListener {
  public static ObjCProtocols = [GCKSessionManagerListener];
  public owner: CastButton;

  public sessionManagerWillStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarting,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidStartSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarted,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willStartCastSession');
  }

  public sessionManagerDidStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('didStartCastSession');
  }

  public sessionManagerWillEndSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnding,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidEndSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnded,
      session: session,
      error: error,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillEndCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willEndCastSession');
  }

  public sessionManagerDidEndCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    // console.log('didEndCastSession');
  }

  public sessionManagerDidFailToStartSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStartFailed,
      session: session,
      error: error,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidFailToStartCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError) {
    // console.log('didFailToStartCastSession');
  }

  public sessionManagerDidSuspendSessionWithReason(sessionManager: GCKSessionManager, session: GCKSession, reason: GCKConnectionSuspendReason) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionSuspended,
      session: session,
      reason: reason,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidSuspendCastSessionWithReason(sessionManager: GCKSessionManager, session: GCKCastSession, reason: GCKConnectionSuspendReason) {
    // console.log('didSuspendCastSession');
  }

  public sessionManagerWillResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResuming,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerDidResumeSession(sessionManager: GCKSessionManager, session: GCKSession) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResumed,
      session: session,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerWillResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('willResumeCastSession');
  }

  public sessionManagerDidResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession) {
    // console.log('didResumeCastSession');
  }

  public sessionManagerSessionDidUpdateDevice(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice) {
    /*
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
    */

    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceChanged,
      session: session,
      device: device,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKSession, volume: number) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onDeviceVolumeChanged,
      session: session,
      volume: volume,
      ios: this.owner.nativeView
    });
  }

  public sessionManagerCastSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number) {
    // console.log('castSession: didReceiveDeviceVolume');
  }

  public sessionManagerSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKSession, statusText: string) {
    // console.log('didReceiveDeviceStatus');
  }

  public sessionManagerCastSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string) {
    // console.log('castSession: didReceiveDeviceStatus');
  }

  public sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory(sessionManager: GCKSessionManager, category: string) {
    // console.log('didUpdateDefaultSessionOptionsForDeviceCategory');
  }
}

export {
  SessionManagerListenerImpl
};
