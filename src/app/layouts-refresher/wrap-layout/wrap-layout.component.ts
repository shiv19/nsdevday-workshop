import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'wrap-layout',
	templateUrl: './wrap-layout.component.html',
	styleUrls: ['./wrap-layout.component.scss']
})

export class WrapLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}