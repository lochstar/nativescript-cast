import { CastButtonBase } from './cast.common';
import { CastEvent } from './cast.types';
var SessionManagerListenerImpl = /** @class */ (function (_super) {
    __extends(SessionManagerListenerImpl, _super);
    function SessionManagerListenerImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SessionManagerListenerImpl.prototype.sessionManagerWillStartSession = function (sessionManager, session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStarting,
            session: session,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidStartSession = function (sessionManager, session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStarted,
            session: session,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerWillStartCastSession = function (sessionManager, session) {
        // console.log('willStartCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidStartCastSession = function (sessionManager, session) {
        // console.log('didStartCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerWillEndSession = function (sessionManager, session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionEnding,
            session: session,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidEndSessionWithError = function (sessionManager, session, error) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionEnded,
            session: session,
            error: error,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerWillEndCastSession = function (sessionManager, session) {
        // console.log('willEndCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidEndCastSessionWithError = function (sessionManager, session, error) {
        // console.log('didEndCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidFailToStartSessionWithError = function (sessionManager, session, error) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStartFailed,
            session: session,
            error: error,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidFailToStartCastSessionWithError = function (sessionManager, session, error) {
        // console.log('didFailToStartCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidSuspendSessionWithReason = function (sessionManager, session, reason) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionSuspended,
            session: session,
            reason: reason,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidSuspendCastSessionWithReason = function (sessionManager, session, reason) {
        // console.log('didSuspendCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerWillResumeSession = function (sessionManager, session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionResuming,
            session: session,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidResumeSession = function (sessionManager, session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionResumed,
            session: session,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerWillResumeCastSession = function (sessionManager, session) {
        // console.log('willResumeCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidResumeCastSession = function (sessionManager, session) {
        // console.log('didResumeCastSession');
    };
    SessionManagerListenerImpl.prototype.sessionManagerSessionDidUpdateDevice = function (sessionManager, session, device) {
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
    };
    SessionManagerListenerImpl.prototype.sessionManagerSessionDidReceiveDeviceVolumeMuted = function (sessionManager, session, volume) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onDeviceVolumeChanged,
            session: session,
            volume: volume,
            ios: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.sessionManagerCastSessionDidReceiveDeviceVolumeMuted = function (sessionManager, session, volume) {
        // console.log('castSession: didReceiveDeviceVolume');
    };
    SessionManagerListenerImpl.prototype.sessionManagerSessionDidReceiveDeviceStatus = function (sessionManager, session, statusText) {
        // console.log('didReceiveDeviceStatus');
    };
    SessionManagerListenerImpl.prototype.sessionManagerCastSessionDidReceiveDeviceStatus = function (sessionManager, session, statusText) {
        // console.log('castSession: didReceiveDeviceStatus');
    };
    SessionManagerListenerImpl.prototype.sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory = function (sessionManager, category) {
        // console.log('didUpdateDefaultSessionOptionsForDeviceCategory');
    };
    SessionManagerListenerImpl.ObjCProtocols = [GCKSessionManagerListener];
    return SessionManagerListenerImpl;
}(NSObject));
export { SessionManagerListenerImpl };
//# sourceMappingURL=session-manager-listener.ios.js.map