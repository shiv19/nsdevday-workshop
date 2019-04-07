import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'grid-layout',
	templateUrl: './grid-layout.component.html',
	styleUrls: ['./grid-layout.component.scss']
})

export class GridLayoutComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}