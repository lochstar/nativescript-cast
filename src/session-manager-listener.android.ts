import { CastButtonBase } from './cast.common';
import { CastButton } from './cast.android';
import { CastEvent } from './cast.types';

@NativeClass()
@Interfaces([com.google.android.gms.cast.framework.SessionManagerListener])
// @ts-ignore
class SessionManagerListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session> {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    // necessary when extending TypeScript constructors
    return global.__native(this);
  }

  onSessionEnded(session: com.google.android.gms.cast.framework.Session, error: number): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnded,
      session: session,
      error: error,
      android: this.owner.nativeView
    });
  }

  onSessionEnding(session: com.google.android.gms.cast.framework.Session): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionEnding,
      session: session,
      android: this.owner.nativeView
    });
  }

  onSessionResumeFailed(session: com.google.android.gms.cast.framework.Session, error: number) {
    /* Ignored due to no iOS equivalent
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: 'onSessionResumeFailed',
      session: session,
      error: error,
      android: this.owner.nativeView
    });
    */
  }

  onSessionResumed(session: com.google.android.gms.cast.framework.Session, wasSuspended: boolean) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResumed,
      session: session,
      wasSuspended: wasSuspended,
      android: this.owner.nativeView
    });
  }

  onSessionResuming(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionResuming,
      session: session,
      sessionId: sessionId,
      android: this.owner.nativeView
    });
  }

  onSessionStartFailed(session: com.google.android.gms.cast.framework.Session, error: number): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStartFailed,
      session: session,
      error: error,
      android: this.owner.nativeView
    });
  }

  onSessionStarted(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarted,
      session: session,
      sessionId: sessionId,
      android: this.owner.nativeView
    });
  }

  onSessionStarting(session: com.google.android.gms.cast.framework.Session): void {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionStarting,
      session: session,
      android: this.owner.nativeView
    });
  }

  onSessionSuspended(session: com.google.android.gms.cast.framework.Session, reason: number) {
    this.owner.sendEvent(CastButtonBase.castEvent, {
      eventName: CastEvent.onSessionSuspended,
      session: session,
      reason: reason,
      android: this.owner.nativeView
    });
  }
}

export { SessionManagerListenerImpl };
