import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LayoutsRefresherRoutingModule } from "./layouts-refresher-routing.module";
import { LayoutsRefresherComponent } from "./layouts-refresher.component";
import { StackLayoutComponent } from "./stack-layout/stack-layout.component";
import { AbsoluteLayoutComponent } from "./absolute-layout/absolute-layout.component";
import { WrapLayoutComponent } from "./wrap-layout/wrap-layout.component";
import { DockLayoutComponent } from "./dock-layout/dock-layout.component";
import { FlexboxLayoutComponent } from "./flexbox-layout/flexbox-layout.component";
import { GridLayoutComponent } from "./grid-layout/grid-layout.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LayoutsRefresherRoutingModule,
    ],
    declarations: [
        LayoutsRefresherComponent,
        StackLayoutComponent,
        AbsoluteLayoutComponent,
        WrapLayoutComponent,
        DockLayoutComponent,
        FlexboxLayoutComponent,
        GridLayoutComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LayoutsRefresherModule { }
