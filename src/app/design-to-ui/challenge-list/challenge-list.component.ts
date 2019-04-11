import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'challenge-list',
	templateUrl: './challenge-list.component.html',
	styleUrls: ['./challenge-list.component.scss']
})

export class ChallengeListComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}