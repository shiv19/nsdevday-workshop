import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LayoutsRefresherRoutingModule } from "./layouts-refresher-routing.module";
import { LayoutsRefresherComponent } from "./layouts-refresher.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LayoutsRefresherRoutingModule
    ],
    declarations: [
        LayoutsRefresherComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LayoutsRefresherModule { }
