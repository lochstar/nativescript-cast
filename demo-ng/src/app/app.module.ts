import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [AppComponent, HomeComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
