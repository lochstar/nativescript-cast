import { Directive, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CastButton } from '@codelab/nativescript-cast';

@Directive({ selector: 'CastButton' })
export class CastButtonDirective {}

@NgModule({
    declarations: [CastButtonDirective],
    exports: [CastButtonDirective],
    schemas: [NO_ERRORS_SCHEMA]
})
export class NativeScriptCastButtonModule {}

registerElement('CastButton', () => CastButton);
