import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OptimizationsRoutingModule } from "./optimizations-routing.module";
import { OptimizationsComponent } from "./optimizations.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { CacheService } from "../services/cache.service";
import { ImgCachePipe } from "../shared/imgCache.pipe";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        OptimizationsRoutingModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        OptimizationsComponent,
        ImgCachePipe
    ],
    providers: [
        CacheService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OptimizationsModule { }
