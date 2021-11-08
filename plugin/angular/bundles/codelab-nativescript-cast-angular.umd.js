(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@nativescript/angular'), require('@codelab/nativescript-cast')) :
    typeof define === 'function' && define.amd ? define('@codelab/nativescript-cast-angular', ['exports', '@angular/core', '@nativescript/angular', '@codelab/nativescript-cast'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.codelab = global.codelab || {}, global.codelab['nativescript-cast-angular'] = {}), global.ng.core, global['ns-angular'], global['ns-cast']));
}(this, (function (exports, i0, angular, nativescriptCast) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var CastButtonDirective = /** @class */ (function () {
        function CastButtonDirective() {
        }
        return CastButtonDirective;
    }());
    CastButtonDirective.ɵfac = function CastButtonDirective_Factory(t) { return new (t || CastButtonDirective)(); };
    CastButtonDirective.ɵdir = i0__namespace.ɵɵdefineDirective({ type: CastButtonDirective, selectors: [["CastButton"]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CastButtonDirective, [{
                type: i0.Directive,
                args: [{ selector: 'CastButton' }]
            }], null, null);
    })();
    var NativeScriptCastButtonModule = /** @class */ (function () {
        function NativeScriptCastButtonModule() {
        }
        return NativeScriptCastButtonModule;
    }());
    NativeScriptCastButtonModule.ɵfac = function NativeScriptCastButtonModule_Factory(t) { return new (t || NativeScriptCastButtonModule)(); };
    NativeScriptCastButtonModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: NativeScriptCastButtonModule });
    NativeScriptCastButtonModule.ɵinj = i0__namespace.ɵɵdefineInjector({});
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NativeScriptCastButtonModule, { declarations: [CastButtonDirective], exports: [CastButtonDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NativeScriptCastButtonModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CastButtonDirective],
                        exports: [CastButtonDirective],
                        schemas: [i0.NO_ERRORS_SCHEMA]
                    }]
            }], null, null);
    })();
    angular.registerElement('CastButton', function () { return nativescriptCast.CastButton; });

    exports.CastButtonDirective = CastButtonDirective;
    exports.NativeScriptCastButtonModule = NativeScriptCastButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=codelab-nativescript-cast-angular.umd.js.map
