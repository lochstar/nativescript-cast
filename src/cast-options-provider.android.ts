import * as application from 'tns-core-modules/application';

declare const com: any;

@JavaProxy('com.codelab.CastOptionsProvider')
@Interfaces([com.google.android.gms.cast.framework.OptionsProvider])
class CastOptionsProvider extends java.lang.Object {
  constructor() {
    super();
    return global.__native(this);
  }

  public getCastOptions(appContext: any) {
    console.log('getCastOptions... pass APP_ID ?');
    return new com.google.android.gms.cast.framework.CastOptions.Builder().setReceiverApplicationId('4E0FE981').build();
  }

  public getAdditionalSessionProviders(context: any) {
    return null;
  }
}
