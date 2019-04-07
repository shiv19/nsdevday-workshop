import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ScalableLayoutsRoutingModule } from "./scalable-layouts-routing.module";
import { ScalableLayoutsComponent } from "./scalable-layouts.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ScalableLayoutsRoutingModule
    ],
    declarations: [
        ScalableLayoutsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ScalableLayoutsModule { }
