
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DesignToUIComponent } from "./design-to-ui.component";

const routes: Routes = [
    { path: "", component: DesignToUIComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DesignToUIRoutingModule { }
