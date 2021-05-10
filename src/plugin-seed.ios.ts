// import { Something } from './plugin-seed-common';
import { VersionNumberCommon } from './plugin-seed.common';

export * from './plugin-seed.common';

export class VersionNumber extends VersionNumberCommon {
    nativeView: UILabel;

    constructor() {
        super();
    }

    public createNativeView() {
        this.nativeView = UILabel.new();
        this.nativeView.text = this.getVersion();
        return this.nativeView;
    }

    public getVersion() {
        return NSBundle.mainBundle.objectForInfoDictionaryKey('CFBundleShortVersionString');
    }
}
