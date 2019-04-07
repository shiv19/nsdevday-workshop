import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DesignToUIRoutingModule } from "./design-to-ui-routing.module";
import { DesignToUIComponent } from "./design-to-ui.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DesignToUIRoutingModule
    ],
    declarations: [
        DesignToUIComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DesignToUIModule { }
