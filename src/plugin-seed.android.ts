// import { Something } from './plugin-seed-common';
import { Application, Utils } from '@nativescript/core';
import { VersionNumberCommon } from './plugin-seed.common';

export * from './plugin-seed.common';

export class VersionNumber extends VersionNumberCommon {
    nativeViewProtected: android.widget.TextView;

    constructor() {
        super();
    }

    public createNativeView() {
        this.nativeViewProtected = new android.widget.TextView(Utils.ad.getApplicationContext());
        this.nativeViewProtected.setText(this.getVersion());
        return this.nativeViewProtected;
    }

    getVersion() {
        const PackageManager = android.content.pm.PackageManager;
        const pkg = Application.android.context.getPackageManager().getPackageInfo(Application.android.context.getPackageName(), PackageManager.GET_META_DATA);
        return pkg.versionName + " bla bla";
    }
}
