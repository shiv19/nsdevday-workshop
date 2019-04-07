import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'activity-indicators',
	templateUrl: './activity-indicators.component.html',
	styleUrls: ['./activity-indicators.component.scss']
})

export class ActivityIndicatorsComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}