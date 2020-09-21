import { NgModule } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { isAndroid } from '@nativescript/core';

@NgModule()
export class NativescriptCastModule {
}

// https://github.com/NativeScript/nativescript-dev-webpack/issues/625
// even upgrading to latesest webpack, nativescript, this workaround is still needed. When fixed, this can become
// registerElement("CastButton", () => require("../cast").CastButton);
if (isAndroid) {
  registerElement("CastButton", () => require("../cast.android").CastButton);
} else {
  registerElement("CastButton", () => require("../cast.ios").CastButton);
}
