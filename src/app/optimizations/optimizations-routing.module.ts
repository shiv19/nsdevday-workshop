
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { OptimizationsComponent } from "./optimizations.component";

const routes: Routes = [
    { path: "", component: OptimizationsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class OptimizationsRoutingModule { }
