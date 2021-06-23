import { CastButton } from './cast.android';
declare class SessionManagerListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session> {
    owner: CastButton;
    constructor(owner: any);
    onSessionEnded(session: com.google.android.gms.cast.framework.Session, error: number): void;
    onSessionEnding(session: com.google.android.gms.cast.framework.Session): void;
    onSessionResumeFailed(session: com.google.android.gms.cast.framework.Session, error: number): void;
    onSessionResumed(session: com.google.android.gms.cast.framework.Session, wasSuspended: boolean): void;
    onSessionResuming(session: com.google.android.gms.cast.framework.Session, sessionId: string): void;
    onSessionStartFailed(session: com.google.android.gms.cast.framework.Session, error: number): void;
    onSessionStarted(session: com.google.android.gms.cast.framework.Session, sessionId: string): void;
    onSessionStarting(session: com.google.android.gms.cast.framework.Session): void;
    onSessionSuspended(session: com.google.android.gms.cast.framework.Session, reason: number): void;
}
export { SessionManagerListenerImpl };
