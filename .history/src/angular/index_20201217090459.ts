import { NgModule } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { CastButton } from "@codelab/nativescript-cast";

@NgModule()
export class NativescriptCastModule {}

registerElement("CastButton", () => CastButton);
