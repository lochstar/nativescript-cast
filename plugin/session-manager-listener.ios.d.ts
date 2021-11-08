import { CastButton } from './cast.ios';
declare class SessionManagerListenerImpl extends NSObject implements GCKSessionManagerListener {
    static ObjCProtocols: {
        prototype: GCKSessionManagerListener;
    }[];
    owner: CastButton;
    sessionManagerWillStartSession(sessionManager: GCKSessionManager, session: GCKSession): void;
    sessionManagerDidStartSession(sessionManager: GCKSessionManager, session: GCKSession): void;
    sessionManagerWillStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession): void;
    sessionManagerDidStartCastSession(sessionManager: GCKSessionManager, session: GCKCastSession): void;
    sessionManagerWillEndSession(sessionManager: GCKSessionManager, session: GCKSession): void;
    sessionManagerDidEndSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError): void;
    sessionManagerWillEndCastSession(sessionManager: GCKSessionManager, session: GCKCastSession): void;
    sessionManagerDidEndCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError): void;
    sessionManagerDidFailToStartSessionWithError(sessionManager: GCKSessionManager, session: GCKSession, error: NSError): void;
    sessionManagerDidFailToStartCastSessionWithError(sessionManager: GCKSessionManager, session: GCKCastSession, error: NSError): void;
    sessionManagerDidSuspendSessionWithReason(sessionManager: GCKSessionManager, session: GCKSession, reason: GCKConnectionSuspendReason): void;
    sessionManagerDidSuspendCastSessionWithReason(sessionManager: GCKSessionManager, session: GCKCastSession, reason: GCKConnectionSuspendReason): void;
    sessionManagerWillResumeSession(sessionManager: GCKSessionManager, session: GCKSession): void;
    sessionManagerDidResumeSession(sessionManager: GCKSessionManager, session: GCKSession): void;
    sessionManagerWillResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession): void;
    sessionManagerDidResumeCastSession(sessionManager: GCKSessionManager, session: GCKCastSession): void;
    sessionManagerSessionDidUpdateDevice(sessionManager: GCKSessionManager, session: GCKSession, device: GCKDevice): void;
    sessionManagerSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKSession, volume: number): void;
    sessionManagerCastSessionDidReceiveDeviceVolumeMuted(sessionManager: GCKSessionManager, session: GCKCastSession, volume: number): void;
    sessionManagerSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKSession, statusText: string): void;
    sessionManagerCastSessionDidReceiveDeviceStatus(sessionManager: GCKSessionManager, session: GCKCastSession, statusText: string): void;
    sessionManagerDidUpdateDefaultSessionOptionsForDeviceCategory(sessionManager: GCKSessionManager, category: string): void;
}
export { SessionManagerListenerImpl };
