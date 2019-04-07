import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { WidgetsRefresherRoutingModule } from "./widgets-refresher-routing.module";
import { WidgetsRefresherComponent } from "./widgets-refresher.component";
import { LabelsComponent } from "./labels/labels.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { ImagesComponent } from "./images/images.component";
import { TextFieldsComponent } from "./text-fields/text-fields.component";
import { ActivityIndicatorsComponent } from "./activity-indicators/activity-indicators.component";
import { ProgressBarsComponent } from "./progress-bars/progress-bars.component";
import { WebViewsComponent } from "./web-views/web-views.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        WidgetsRefresherRoutingModule
    ],
    declarations: [
        WidgetsRefresherComponent,
        LabelsComponent,
        ButtonsComponent,
        TextFieldsComponent,
        ImagesComponent,
        ActivityIndicatorsComponent,
        ProgressBarsComponent,
        WebViewsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WidgetsRefresherModule { }
