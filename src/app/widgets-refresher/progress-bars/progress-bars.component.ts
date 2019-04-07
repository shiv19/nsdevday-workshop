import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'progress-bars',
	templateUrl: './progress-bars.component.html',
	styleUrls: ['./progress-bars.component.scss']
})

export class ProgressBarsComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}