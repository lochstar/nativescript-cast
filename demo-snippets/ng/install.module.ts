import { NgModule } from '@angular/core';

import { NativeScriptVersionNumberModule } from '@nativescript-community/plugin-seed/angular';

@NgModule({
    imports: [NativeScriptVersionNumberModule],
    exports: [NativeScriptVersionNumberModule]
})
export class InstallModule {}
