import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RlvTipsRoutingModule } from "./rlv-tips-routing.module";
import { RlvTipsComponent } from "./rlv-tips.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RlvTipsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        RlvTipsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RlvTipsModule { }
