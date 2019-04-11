import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "DesignToUI",
    moduleId: module.id,
    templateUrl: "./design-to-ui.component.html"
})
export class DesignToUIComponent implements OnInit {

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    gotoChallenge(route) {
        this.router.navigate([`/design-to-ui/challenge-${route}`]);
    }
}
