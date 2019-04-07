import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'flexbox-layout',
	templateUrl: './flexbox-layout.component.html',
	styleUrls: ['./flexbox-layout.component.scss']
})

export class FlexboxLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}