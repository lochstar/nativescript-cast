import { ad } from 'tns-core-modules/utils/utils';
import { CastButtonBase } from './cast.common';

const {
  MediaRouter,
  MediaRouteSelector,
  MediaControlIntent
} = android.support.v7.media;
const {
  CastButtonFactory,
  CastContext,
} = com.google.android.gms.cast.framework;

// @ts-ignore
const MediaInfo = com.google.android.gms.cast.MediaInfo;
// @ts-ignore
const MediaMetadata = com.google.android.gms.cast.MediaMetadata;
// @ts-ignore
const WebImage = com.google.android.gms.common.images.WebImage;

class MediaRouterCallback extends android.support.v7.media.MediaRouter.Callback {
  public owner: CastButton;

  constructor(owner) {
    super();

    this.owner = owner;

    return global.__native(this);
  }

  public onProviderAdded(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onProviderAdded',
      router: router,
      provider: provider
    });
  }

  public onProviderChanged(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onProviderChanged',
      router: router,
      provider: provider
    });
  }

  public onProviderRemoved(router: android.support.v7.media.MediaRouter, provider: android.support.v7.media.MediaRouter.ProviderInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onProviderRemoved',
      router: router,
      provider: provider
    });
  }

  public onRouteAdded(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteAdded',
      router: router,
      route: route
    });
  }

  public onRouteChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteChanged',
      router: router,
      route: route
    });
  }

  public onRoutePresentationDisplayChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRoutePresentationDisplayChanged',
      router: router,
      route: route
    });
  }

  public onRouteRemoved(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteRemoved',
      router: router,
      route: route
    });
  }

  public onRouteSelected(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    //this.owner.mSelectedDevice = CastDevice.getFromBundle(route.getExtras());
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteSelected',
      router: router,
      route: route,
    });
  }

  public onRouteUnselected(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteUnselected',
      router: router,
      route: route
    });
  }

  public onRouteVolumeChanged(router: android.support.v7.media.MediaRouter, route: android.support.v7.media.MediaRouter.RouteInfo): void {
    this.owner.sendEvent(CastButtonBase.mediaRouterEventEvent, {
      mediaRouterEventName: 'onRouteVolumeChanged',
      router: router,
      route: route
    });
  }
}

interface SessionManagerListener {
  new(owner): com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
}

let SessionManagerListener: SessionManagerListener;

function initSessionManagerListener(): void {
  if (SessionManagerListener) {
    return;
  }

  @Interfaces([com.google.android.gms.cast.framework.SessionManagerListener])
  class SessionManagerListenerImpl extends java.lang.Object implements com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session> {
    public owner: CastButton;

    constructor(owner) {
      super();

      this.owner = owner;

      // necessary when extending TypeScript constructors
      return global.__native(this);
    }

    onSessionEnded(session: com.google.android.gms.cast.framework.Session, error: number): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionEnded',
        session: session,
        error: error
      });
    }

    onSessionEnding(session: com.google.android.gms.cast.framework.Session): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionEnding',
        session: session,
      });
    }

    onSessionResumeFailed(session: com.google.android.gms.cast.framework.Session, error: number) {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionResumeFailed',
        session: session,
        error: error
      });
    }

    onSessionResumed(session: com.google.android.gms.cast.framework.Session, wasSuspended: boolean) {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionResumed',
        session: session,
        wasSuspended: wasSuspended
      });
    }

    onSessionResuming(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionResuming',
        session: session,
        sessionId: sessionId
      });
    }

    onSessionStartFailed(session: com.google.android.gms.cast.framework.Session, error: number): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionStartFailed',
        session: session,
        error: error
      });
    }

    onSessionStarted(session: com.google.android.gms.cast.framework.Session, sessionId: string): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionStarted',
        session: session,
        sessionId: sessionId
      });
    }

    onSessionStarting(session: com.google.android.gms.cast.framework.Session): void {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionStarting',
        session: session
      });
    }

    onSessionSuspended(session: com.google.android.gms.cast.framework.Session, reason: number) {
      this.owner.sendEvent(CastButtonBase.sessionEventEvent, {
        sessionEventName: 'onSessionSuspended',
        session: session,
        reason: reason
      });
    }
  }

  SessionManagerListener = SessionManagerListenerImpl;
}

export class CastButton extends CastButtonBase {
  public nativeView: android.support.v7.app.MediaRouteButton;

  // @ts-ignore
  public CastDevice: com.google.android.gms.cast.CastDevice;

  public mCastContext: com.google.android.gms.cast.framework.CastContext;
  public mSessionManager: com.google.android.gms.cast.framework.SessionManager;
  public mSessionManagerListener: com.google.android.gms.cast.framework.SessionManagerListener<com.google.android.gms.cast.framework.Session>;
  public mSelectedDevice: any;

  public mMediaRouter: android.support.v7.media.MediaRouter;
  public mMediaRouterCallback: android.support.v7.media.MediaRouter.Callback;
  public mMediaRouteSelector: android.support.v7.media.MediaRouteSelector;

  constructor() {
    super();
  }

  /**
   * Creates new native button.
   */
  public createNativeView(): Object {
    const appContext = ad.getApplicationContext();

    initSessionManagerListener();

    // Create new instance of MediaRouteButton
    const button = new android.support.v7.app.MediaRouteButton(this._context);

    // Wire up the MediaRouteButton to the Cast framework
    CastButtonFactory.setUpMediaRouteButton(appContext, button);

    // Create media router
    this.mMediaRouter = MediaRouter.getInstance(appContext);
    this.mMediaRouteSelector = new MediaRouteSelector.Builder()
      .addControlCategory(MediaControlIntent.CATEGORY_LIVE_VIDEO)
      .addControlCategory(MediaControlIntent.CATEGORY_REMOTE_PLAYBACK)
      .build();
    this.mMediaRouterCallback = new MediaRouterCallback(this);

    // Get cast context and session manager
    this.mCastContext = CastContext.getSharedInstance(appContext);
    this.mSessionManager = this.mCastContext.getSessionManager();
    this.mSessionManagerListener = new SessionManagerListener(this);

    this.addMediaRouterCallback();
    this.addSessionManagerListener();

    // @ts-ignore
    this.CastDevice = com.google.android.gms.cast.CastDevice;

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
    // Remove reference from native view to this instance.
    (<any>this.nativeView).owner = null;

    this.removeMediaRouterCallback();
    this.removeSessionManagerListener();

    // If you want to recycle nativeView and have modified the nativeView
    // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
    // you have to reset it to its initial state here.
    super.disposeNativeView();
  }

  addMediaRouterCallback(): void {
    this.mMediaRouter.addCallback(this.mMediaRouteSelector, this.mMediaRouterCallback, MediaRouter.CALLBACK_FLAG_REQUEST_DISCOVERY);
  }

  removeMediaRouterCallback(): void {
    if (this.mMediaRouter && this.mMediaRouterCallback) {
      this.mMediaRouter.removeCallback(this.mMediaRouterCallback);
    }
  }

  addSessionManagerListener(): void {
    this.mSessionManager.addSessionManagerListener(this.mSessionManagerListener);
  }

  removeSessionManagerListener(): void {
    this.mSessionManager.removeSessionManagerListener(this.mSessionManagerListener);
  }

  getRemoteMediaClient() {
    return this.mSessionManager.getCurrentCastSession().getRemoteMediaClient();
  }

  remoteMediaClientLoad() {
    const metadata = new MediaMetadata(MediaMetadata.MEDIA_TYPE_MOVIE);
    metadata.putString(MediaMetadata.KEY_TITLE, 'Big Buck Bunny');
    metadata.putString(MediaMetadata.KEY_SUBTITLE, 'By Blender Foundation');

    const uri = android.net.Uri.parse('https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg')
    const thumbnail = new WebImage(uri, 768, 1158);
    metadata.addImage(thumbnail);

    const contentId = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    const mediaInfo = new MediaInfo.Builder(contentId)
      .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)
      .setContentType('video/mp4')
      .setMetadata(metadata)
      //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
      .build();

    /*
    const contentId = 'https://abcradiolivehls-lh.akamaihd.net/i/doublejnsw_1@327293/master.m3u8';
    const mediaInfo = new MediaInfo.Builder(contentId)
      .setStreamType(MediaInfo.STREAM_TYPE_BUFFERED)  // STREAM_TYPE_LIVE ?
      .setContentType('application/x-mpegurl')
      .setMetadata(metadata)
      //.setStreamDuration(mSelectedMedia.getDuration() * 1000)
      .build();
    */

    const autoPlay = true;
    const position = 0;
    const remoteMediaClient = this.getRemoteMediaClient();
    remoteMediaClient.load(mediaInfo, autoPlay, position);
  }
}
