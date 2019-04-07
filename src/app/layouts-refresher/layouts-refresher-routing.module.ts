
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LayoutsRefresherComponent } from "./layouts-refresher.component";

const routes: Routes = [
    { path: "", component: LayoutsRefresherComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LayoutsRefresherRoutingModule { }
