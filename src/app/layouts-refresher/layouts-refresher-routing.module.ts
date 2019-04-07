
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LayoutsRefresherComponent } from "./layouts-refresher.component";
import { StackLayoutComponent } from "./stack-layout/stack-layout.component";
import { AbsoluteLayoutComponent } from "./absolute-layout/absolute-layout.component";
import { WrapLayoutComponent } from "./wrap-layout/wrap-layout.component";
import { DockLayoutComponent } from "./dock-layout/dock-layout.component";
import { FlexboxLayoutComponent } from "./flexbox-layout/flexbox-layout.component";
import { GridLayoutComponent } from "./grid-layout/grid-layout.component";

const routes: Routes = [
    { path: "", component: LayoutsRefresherComponent },
    { path: "stack-layout", component: StackLayoutComponent },
    { path: "absolute-layout", component: AbsoluteLayoutComponent },
    { path: "wrap-layout", component: WrapLayoutComponent },
    { path: "dock-layout", component: DockLayoutComponent },
    { path: "flexbox-layout", component: FlexboxLayoutComponent },
    { path: "grid-layout", component: GridLayoutComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LayoutsRefresherRoutingModule { }
