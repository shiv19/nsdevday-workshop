import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DesignToUIRoutingModule } from "./design-to-ui-routing.module";
import { DesignToUIComponent } from "./design-to-ui.component";
import { CacheService } from "../services/cache.service";
import { ImgCachePipe } from "../shared/imgCache.pipe";
import { ChallengeListComponent } from "./challenge-list/challenge-list.component";
import { ChallengeProfileComponent } from "./challenge-profile/challenge-profile.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DesignToUIRoutingModule
    ],
    declarations: [
        DesignToUIComponent,
        ChallengeProfileComponent,
        ChallengeListComponent,
        ImgCachePipe
    ],
    providers: [
        CacheService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DesignToUIModule { }
