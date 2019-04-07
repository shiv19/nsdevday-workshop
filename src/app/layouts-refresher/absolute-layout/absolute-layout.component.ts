import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'absolute-layout-cmp',
	templateUrl: './absolute-layout.component.html',
	styleUrls: ['./absolute-layout.component.scss']
})

export class AbsoluteLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}