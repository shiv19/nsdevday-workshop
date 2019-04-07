import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "WidgetsRefresher",
    moduleId: module.id,
    templateUrl: "./widgets-refresher.component.html"
})
export class WidgetsRefresherComponent implements OnInit {

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

    onWidgetTap(args): void {
        const className = args.object.className;
        args.object.className += ' active';
        const path = args.object.text.split('  ')[1].split(' ').join('-').toLowerCase();
        this.router.navigate([`/widgets-refresher/${path}`], {
            transition: {
                name: "slide",
                duration: 200
            }
        });
        setTimeout(() => {
            args.object.className = className;
        }, 200);
    }

}
