
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WidgetsRefresherComponent } from "./widgets-refresher.component";

const routes: Routes = [
    { path: "", component: WidgetsRefresherComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WidgetsRefresherRoutingModule { }
