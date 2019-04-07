import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OptimizationsRoutingModule } from "./optimizations-routing.module";
import { OptimizationsComponent } from "./optimizations.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        OptimizationsRoutingModule
    ],
    declarations: [
        OptimizationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OptimizationsModule { }
