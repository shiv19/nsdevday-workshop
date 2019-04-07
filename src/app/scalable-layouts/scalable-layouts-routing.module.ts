
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ScalableLayoutsComponent } from "./scalable-layouts.component";

const routes: Routes = [
    { path: "", component: ScalableLayoutsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ScalableLayoutsRoutingModule { }
