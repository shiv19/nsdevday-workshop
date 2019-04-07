import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'stack-layout',
	templateUrl: './stack-layout.component.html',
	styleUrls: ['./stack-layout.component.scss']
})

export class StackLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}