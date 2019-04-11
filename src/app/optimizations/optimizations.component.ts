import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Optimizations",
    moduleId: module.id,
    templateUrl: "./optimizations.component.html",
    styleUrls: ["./optimizations.component.scss"]
})
export class OptimizationsComponent implements OnInit {

    cards = []
    cards2 = []
    cards3 = []

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        Array.from(Array(1000).keys()).forEach(i => {
            this.cards.push({
                id: i,
                title: `Title ${i+1}`,
                description: `A long Description ${i+1}, lorem impsum dolar sit amit`
            });
            this.cards2.push({
                id: i,
                title: `Heading ${i+1}`,
                description: `A long Description ${i+1}, lorem impsum dolar sit amit`
            });
            this.cards3.push({
                id: i,
                title: `Name ${i+1}`,
                description: `A long Description ${i+1}, lorem impsum dolar sit amit`
            });
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onLoaded(args) {
        console.log('stack loaded');
    }
}
