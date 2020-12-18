import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { MenuComponent } from './menu/menu.component';
import { demos } from './linked-components/install.module';

const demoRoutes = [];

for (const demo of demos) {
    demoRoutes.push({ path: demo.path, component: demo.component });
}

const routes: Routes = [{ path: '', redirectTo: '/menu', pathMatch: 'full' }, { path: 'menu', component: MenuComponent }, ...demoRoutes];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
