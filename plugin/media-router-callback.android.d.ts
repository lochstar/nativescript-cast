import { CastButton } from './cast.android';
declare class MediaRouterCallback extends androidx.mediarouter.media.MediaRouter.Callback {
    owner: CastButton;
    constructor(owner: any);
    onProviderAdded(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
    onProviderChanged(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
    onProviderRemoved(router: androidx.mediarouter.media.MediaRouter, provider: androidx.mediarouter.media.MediaRouter.ProviderInfo): void;
    onRouteAdded(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRouteChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRoutePresentationDisplayChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRouteRemoved(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRouteSelected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRouteUnselected(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
    onRouteVolumeChanged(router: androidx.mediarouter.media.MediaRouter, route: androidx.mediarouter.media.MediaRouter.RouteInfo): void;
}
export { MediaRouterCallback };
