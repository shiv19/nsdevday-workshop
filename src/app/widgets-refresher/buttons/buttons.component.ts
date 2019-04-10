import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';
import { touchPop } from '~/app/shared/uiux-helper';

@Component({
	moduleId: module.id,
	selector: 'buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})

export class ButtonsComponent extends BaseComponent implements OnInit {

	isLoading = false;
	constructor() {
		super();
	}

	ngOnInit() {
	}

	onTap() {
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
		}, 1000);
	}
}