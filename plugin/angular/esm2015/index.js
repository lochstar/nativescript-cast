import { Directive, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CastButton } from '@codelab/nativescript-cast';
import * as i0 from "@angular/core";
export class CastButtonDirective {
}
CastButtonDirective.ɵfac = function CastButtonDirective_Factory(t) { return new (t || CastButtonDirective)(); };
CastButtonDirective.ɵdir = i0.ɵɵdefineDirective({ type: CastButtonDirective, selectors: [["CastButton"]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CastButtonDirective, [{
        type: Directive,
        args: [{ selector: 'CastButton' }]
    }], null, null); })();
export class NativeScriptCastButtonModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW5ndWxhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUd4RCxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3dEQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFOztBQVFyQyxNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCO2dFQUE1Qiw0QkFBNEI7O3dGQUE1Qiw0QkFBNEIsbUJBUDVCLG1CQUFtQixhQUFuQixtQkFBbUI7dUZBT25CLDRCQUE0QjtjQUx4QyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5Qjs7QUFHRCxlQUFlLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBOT19FUlJPUlNfU0NIRU1BLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9hbmd1bGFyJztcbmltcG9ydCB7IENhc3RCdXR0b24gfSBmcm9tICdAY29kZWxhYi9uYXRpdmVzY3JpcHQtY2FzdCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ0Nhc3RCdXR0b24nIH0pXG5leHBvcnQgY2xhc3MgQ2FzdEJ1dHRvbkRpcmVjdGl2ZSB7fVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0Nhc3RCdXR0b25EaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtDYXN0QnV0dG9uRGlyZWN0aXZlXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgTmF0aXZlU2NyaXB0Q2FzdEJ1dHRvbk1vZHVsZSB7fVxuXG5yZWdpc3RlckVsZW1lbnQoJ0Nhc3RCdXR0b24nLCAoKSA9PiBDYXN0QnV0dG9uKTtcbiJdfQ==