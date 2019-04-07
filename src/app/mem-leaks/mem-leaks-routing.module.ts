
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MemLeaksComponent } from "./mem-leaks.component";

const routes: Routes = [
    { path: "", component: MemLeaksComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MemLeaksRoutingModule { }
