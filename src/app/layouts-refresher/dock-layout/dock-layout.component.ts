import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'dock-layout-cmp',
	templateUrl: './dock-layout.component.html',
	styleUrls: ['./dock-layout.component.scss']
})

export class DockLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}