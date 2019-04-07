import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MemLeaksRoutingModule } from "./mem-leaks-routing.module";
import { MemLeaksComponent } from "./mem-leaks.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MemLeaksRoutingModule
    ],
    declarations: [
        MemLeaksComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MemLeaksModule { }
