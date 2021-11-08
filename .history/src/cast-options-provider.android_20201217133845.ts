import { Utils } from '@nativescript/core';

@Interfaces([com.google.android.gms.cast.framework.OptionsProvider])
@JavaProxy('org.nativescript.cast.OptionsProvider')
@NativeClass()
class CastOptionsProvider extends java.lang.Object {
  constructor() {
    super();
    return global.__native(this);
  }

  public getCastOptions(appContext: any) {
    // Get app_id from strings.xml
    const appStringId = Utils.ad.resources.getStringId('app_id');
    const appId = Utils.ad.getApplication().getString(appStringId);

    const notificationOptions = new com.google.android.gms.cast.framework.media.NotificationOptions.Builder()
      .setTargetActivityClassName('org.nativescript.cast.CastActivity')
      .build();
    const mediaOptions = new com.google.android.gms.cast.framework.media.CastMediaOptions.Builder()
      .setNotificationOptions(notificationOptions)
      .setExpandedControllerActivityClassName('org.nativescript.cast.ExpandedControlsActivity')
      .build();

    return new com.google.android.gms.cast.framework.CastOptions.Builder()
      .setReceiverApplicationId(appId)
      .setCastMediaOptions(mediaOptions)
      .build();
  }

  public getAdditionalSessionProviders(context: any) {
    return null;
  }
}

export { CastOptionsProvider };
