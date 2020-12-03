import { Directive, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { VersionNumber } from '@nativescript-community/plugin-seed';

@Directive({ selector: 'VersionNumber' })
export class VersionNumberDirective {}

@NgModule({
    declarations: [VersionNumberDirective],
    exports: [VersionNumberDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NativeScriptVersionNumberModule {}

registerElement('VersionNumber', () => VersionNumber);
