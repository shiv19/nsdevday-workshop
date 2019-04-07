import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RlvTipsRoutingModule } from "./rlv-tips-routing.module";
import { RlvTipsComponent } from "./rlv-tips.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RlvTipsRoutingModule
    ],
    declarations: [
        RlvTipsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RlvTipsModule { }
