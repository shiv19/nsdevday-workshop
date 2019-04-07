
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { RlvTipsComponent } from "./rlv-tips.component";

const routes: Routes = [
    { path: "", component: RlvTipsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class RlvTipsRoutingModule { }
