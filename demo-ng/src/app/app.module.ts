import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { NativeScriptVersionNumberModule } from "@nativescript-community/plugin-seed/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { DevelopmentComponent } from './development/development.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, NativeScriptVersionNumberModule],
    declarations: [AppComponent, MenuComponent, Demo1Component, Demo2Component, DevelopmentComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
