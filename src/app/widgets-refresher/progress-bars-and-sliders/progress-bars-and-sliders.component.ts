import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'progress-bars-and-sliders',
	templateUrl: './progress-bars-and-sliders.component.html',
	styleUrls: ['./progress-bars-and-sliders.component.scss']
})

export class ProgressBarsAndSlidersComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}