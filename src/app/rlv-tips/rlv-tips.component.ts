import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { isAndroid } from "tns-core-modules/platform";
const posts = require('./posts.json');

export class DataItem {
    constructor(public id?: number, public name?: string, public description?: string, public title?: string, public text?: string, public image?: string, public selected?: boolean, public type?: string, public category?: string) {
    }
}

@Component({
    selector: "RlvTips",
    moduleId: module.id,
    templateUrl: "./rlv-tips.component.html",
    styleUrls: ["./rlv-tips.component.scss"]
})
export class RlvTipsComponent implements OnInit {

    private _origArray = [
        {
            title: "Row 1"
        },
        {
            title: "Row 2"
        },
        {
            title: "Row 3"
        }
    ];
    public source = [...this._origArray];

    public bigSource: ObservableArray<DataItem>;
    private _numberOfAddedItems;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.initDataItems();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onAddItem() {
        this.source.push({
            title: `Row ${this.source.length + 1}`
        })
    }

    replaceArray() {
        // Wrong
        this.source = [...this.source];

        // Wrong
        //this.source = new ObservableArray(this.source.map(i => i));
        // this._origArray.push({
        //     title: 'Row 4'
        // })

        // Right
        // const newArray = [...this._origArray];
        // const newArray = [
        //     {
        //         title: "Row 1"
        //     },
        //     {
        //         title: "Row 2"
        //     }
        // ];
        // for (let i = 0; i < newArray.length; i++) {
        //     const item = this.source.getItem(i);
        //     if (item) {
        //         this.source.setItem(i, newArray[i]);
        //     } else {
        //         this.source.push(newArray[i]);
        //     }
        // }
        // this.source.length = newArray.length;
    }

    refreshList(lv) {
        console.log('refreshing list', lv.nativeElement);
        lv.nativeElement.refresh();
    }

    onLoaded(args) {
        console.log('Now loading', args.object);
    }

    onLoadMoreItemsRequested(args: ListViewEventData) {
        console.log('load more requested');
        setTimeout(() => {
            const listView: RadListView = args.object;
            const initialNumberOfItems = this._numberOfAddedItems;
            for (let i = this._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                if (i > posts.names.length - 1) {
                    listView.loadOnDemandMode = ListViewLoadOnDemandMode.None;
                    break;
                }

                const imageUri = isAndroid ? posts.images[i].toLowerCase() : posts.images[i];
                this.bigSource.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                this._numberOfAddedItems++;
            }

            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
    }

    private initDataItems() {
        this.bigSource = new ObservableArray<DataItem>();
        this._numberOfAddedItems = 0;
        for (var i = 0; i < posts.names.length - 15; i++) {
            this._numberOfAddedItems++;
            if (isAndroid) {
                this.bigSource.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i].toLowerCase()));
            }
            else {
                this.bigSource.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + posts.images[i]));
            }
        }
    }
}
