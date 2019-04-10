import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OptimizationsRoutingModule } from "./optimizations-routing.module";
import { OptimizationsComponent } from "./optimizations.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        OptimizationsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        OptimizationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OptimizationsModule { }
