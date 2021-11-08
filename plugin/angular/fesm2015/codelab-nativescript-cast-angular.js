import * as i0 from '@angular/core';
import { Directive, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CastButton } from '@codelab/nativescript-cast';

class CastButtonDirective {
}
CastButtonDirective.ɵfac = function CastButtonDirective_Factory(t) { return new (t || CastButtonDirective)(); };
CastButtonDirective.ɵdir = i0.ɵɵdefineDirective({ type: CastButtonDirective, selectors: [["CastButton"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CastButtonDirective, [{
        type: Directive,
        args: [{ selector: 'CastButton' }]
    }], null, null); })();
class NativeScriptCastButtonModule {
}
NativeScriptCastButtonModule.ɵfac = function NativeScriptCastButtonModule_Factory(t) { return new (t || NativeScriptCastButtonModule)(); };
NativeScriptCastButtonModule.ɵmod = i0.ɵɵdefineNgModule({ type: NativeScriptCastButtonModule });
NativeScriptCastButtonModule.ɵinj = i0.ɵɵdefineInjector({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NativeScriptCastButtonModule, { declarations: [CastButtonDirective], exports: [CastButtonDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NativeScriptCastButtonModule, [{
        type: NgModule,
        args: [{
                declarations: [CastButtonDirective],
                exports: [CastButtonDirective],
                schemas: [NO_ERRORS_SCHEMA]
            }]
    }], null, null); })();
registerElement('CastButton', () => CastButton);

export { CastButtonDirective, NativeScriptCastButtonModule };
//# sourceMappingURL=codelab-nativescript-cast-angular.js.map
