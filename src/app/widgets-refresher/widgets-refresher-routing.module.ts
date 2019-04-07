
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { WidgetsRefresherComponent } from "./widgets-refresher.component";
import { LabelsComponent } from "./labels/labels.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { TextFieldsComponent } from "./text-fields/text-fields.component";
import { ImagesComponent } from "./images/images.component";
import { ActivityIndicatorsComponent } from "./activity-indicators/activity-indicators.component";
import { ProgressBarsComponent } from "./progress-bars/progress-bars.component";
import { WebViewsComponent } from "./web-views/web-views.component";

const routes: Routes = [
    { path: "", component: WidgetsRefresherComponent },
    { path: "labels", component: LabelsComponent },
    { path: "buttons", component: ButtonsComponent },
    { path: "text-fields", component: TextFieldsComponent },
    { path: "images", component: ImagesComponent },
    { path: "activity-indicators", component: ActivityIndicatorsComponent },
    { path: "progress-bars", component: ProgressBarsComponent },
    { path: "web-views", component: WebViewsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WidgetsRefresherRoutingModule { }
