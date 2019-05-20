import { NgModule } from "@angular/core";
import {registerElement} from 'nativescript-angular/element-registry';

@NgModule()
export class NativescriptCastModule {
}

registerElement("CastButton", () => require("../cast").CastButton);
