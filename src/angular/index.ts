import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { CastButton } from "nativescript-cast";

@NgModule()
export class NativescriptCastModule {}

registerElement("CastButton", () => CastButton);
