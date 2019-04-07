import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WidgetsRefresherRoutingModule } from "./widgets-refresher-routing.module";
import { WidgetsRefresherComponent } from "./widgets-refresher.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WidgetsRefresherRoutingModule
    ],
    declarations: [
        WidgetsRefresherComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WidgetsRefresherModule { }
