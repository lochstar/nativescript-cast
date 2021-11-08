import { CastButtonBase } from './cast.common';
import { CastEvent } from './cast.types';
var SessionManagerListenerImpl = /** @class */ (function (_super) {
    __extends(SessionManagerListenerImpl, _super);
    function SessionManagerListenerImpl(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        // necessary when extending TypeScript constructors
        return global.__native(_this);
    }
    SessionManagerListenerImpl.prototype.onSessionEnded = function (session, error) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionEnded,
            session: session,
            error: error,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionEnding = function (session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionEnding,
            session: session,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionResumeFailed = function (session, error) {
        /* Ignored due to no iOS equivalent
        this.owner.sendEvent(CastButtonBase.castEvent, {
          eventName: 'onSessionResumeFailed',
          session: session,
          error: error,
          android: this.owner.nativeView
        });
        */
    };
    SessionManagerListenerImpl.prototype.onSessionResumed = function (session, wasSuspended) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionResumed,
            session: session,
            wasSuspended: wasSuspended,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionResuming = function (session, sessionId) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionResuming,
            session: session,
            sessionId: sessionId,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionStartFailed = function (session, error) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStartFailed,
            session: session,
            error: error,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionStarted = function (session, sessionId) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStarted,
            session: session,
            sessionId: sessionId,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionStarting = function (session) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionStarting,
            session: session,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl.prototype.onSessionSuspended = function (session, reason) {
        this.owner.sendEvent(CastButtonBase.castEvent, {
            eventName: CastEvent.onSessionSuspended,
            session: session,
            reason: reason,
            android: this.owner.nativeView
        });
    };
    SessionManagerListenerImpl = __decorate([
        Interfaces([com.google.android.gms.cast.framework.SessionManagerListener])
        // @ts-ignore
    ], SessionManagerListenerImpl);
    return SessionManagerListenerImpl;
}(java.lang.Object));
export { SessionManagerListenerImpl };
//# sourceMappingURL=session-manager-listener.android.js.map