import * as application from 'tns-core-modules/application';
import { Common } from './cast.common';

declare const com: any;
declare const android: any;

export class Cast extends Common {

  get() {
    const PackageManager = android.content.pm.PackageManager;
    const pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
      PackageManager.GET_META_DATA);
    return pkg.versionName;
  }
  getCast() {
    const context = application.android.context.getApplicationContext();
    console.log(context);

    const mCastContext = com.google.android.gms.cast.framework.CastContext.getSharedInstance(context);
    console.log(mCastContext);
    console.dir(mCastContext);

    //const OptionsProvider = new com.tns.CastOptionsProvider;
    //console.dir(OptionsProvider);


    //OptionsProvider.getAdditionalSessionProviders();

    //const options = OptionsProvider.getCastOptions(context);
    //console.dir(options);

    //const apiClient = new com.google.android.gms.cast.getInstance().isGooglePlayServicesAvailable();
    //console.log(apiClient);
    //const CastOptions = new com.google.android.gms.cast.framework.OptionsProvider.getCastOptions();
    //console.dir(CastOptions);
    return 'test';
  }
}
