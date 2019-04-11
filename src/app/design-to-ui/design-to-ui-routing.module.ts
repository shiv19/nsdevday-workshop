
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DesignToUIComponent } from "./design-to-ui.component";
import { ChallengeProfileComponent } from "./challenge-profile/challenge-profile.component";
import { ChallengeListComponent } from "./challenge-list/challenge-list.component";

const routes: Routes = [
    { path: "", component: DesignToUIComponent },
    { path: "challenge-profile", component: ChallengeProfileComponent },
    { path: "challenge-list", component: ChallengeListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DesignToUIRoutingModule { }
