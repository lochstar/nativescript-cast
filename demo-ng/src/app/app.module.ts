import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { InstallModule } from './linked-components/install.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Demo1Component } from './linked-components/demo1/demo1.component';
import { Demo2Component } from './linked-components/demo2/demo2.component';
import { DevelopmentComponent } from './linked-components/development/development.component';


@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, InstallModule],
    declarations: [AppComponent, MenuComponent, Demo1Component, Demo2Component, DevelopmentComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
