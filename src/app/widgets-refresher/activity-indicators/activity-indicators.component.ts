import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';
import { View } from 'tns-core-modules/ui/page/page';
import { AnimationCurve } from 'tns-core-modules/ui/enums';

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

	onStackLoaded(args) {
		(<View>args.object).animate({
			rotate: 360,
			duration: 4000,
			iterations: Number.POSITIVE_INFINITY,
			curve: AnimationCurve.linear
		});
	}

	onStackOuterLoaded(args) {
		(<View>args.object).animate({
			rotate: 360,
			duration: 2000,
			iterations: Number.POSITIVE_INFINITY,
			curve: AnimationCurve.linear
		});
	}
}