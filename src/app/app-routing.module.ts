import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/overview", pathMatch: "full" },
    { path: "overview", loadChildren: "~/app/overview/overview.module#OverviewModule" },
    { path: "layouts-refresher", loadChildren: "~/app/layouts-refresher/layouts-refresher.module#LayoutsRefresherModule" },
    { path: "widgets-refresher", loadChildren: "~/app/widgets-refresher/widgets-refresher.module#WidgetsRefresherModule" },
    { path: "scalable-layouts", loadChildren: "~/app/scalable-layouts/scalable-layouts.module#ScalableLayoutsModule" },
    { path: "rlv-tips", loadChildren: "~/app/rlv-tips/rlv-tips.module#RlvTipsModule" },
    { path: "optimizations", loadChildren: "~/app/optimizations/optimizations.module#OptimizationsModule" },
    { path: "mem-leaks", loadChildren: "~/app/mem-leaks/mem-leaks.module#MemLeaksModule" },
    { path: "design-to-ui", loadChildren: "~/app/design-to-ui/design-to-ui.module#DesignToUIModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
