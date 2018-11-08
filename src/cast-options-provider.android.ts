import { ad } from 'tns-core-modules/utils/utils';

@JavaProxy('com.codelab.CastOptionsProvider')
@Interfaces([com.google.android.gms.cast.framework.OptionsProvider])
class CastOptionsProvider extends java.lang.Object {
  constructor() {
    super();
    return global.__native(this);
  }

  public getCastOptions(appContext: any) {
    // Get app_id from strings.xml
    const appStringId = ad.resources.getStringId('app_id');
    const appId = ad.getApplication().getString(appStringId);

    const notificationOptions = new com.google.android.gms.cast.framework.media.NotificationOptions.Builder()
      .setTargetActivityClassName('com.codelab.cast.CastActivity')
      .build();
    const mediaOptions = new com.google.android.gms.cast.framework.media.CastMediaOptions.Builder()
      .setNotificationOptions(notificationOptions)
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
