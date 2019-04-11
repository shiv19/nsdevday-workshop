import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'challenge-profile',
	templateUrl: './challenge-profile.component.html',
	styleUrls: ['./challenge-profile.component.scss']
})

export class ChallengeProfileComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}