import { NgModule } from '@angular/core';

import { NativeScriptVersionNumberModule } from '@nativescript-community/plugin-seed/angular';

import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
    imports: [NativeScriptVersionNumberModule],
    exports: [NativeScriptVersionNumberModule]
})
export class InstallModule {}

export const demos = [
    { name: 'Demo 1', path: 'demo1', component: Demo1Component },
    { name: 'Demo 2', path: 'demo2', component: Demo2Component },
    { name: 'Development', path: 'development', component: DevelopmentComponent }
];
