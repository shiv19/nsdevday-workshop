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
	downloadProgress = 50;
	constructor() {
		super();
	}

	ngOnInit() {
	}

	async onTap(args) {
		await touchPop(args.object);
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
		}, 1000);
	}

	onBtnTap(args) {
		const btn = args.object;
		console.log(btn.text);

		const page = args.object.page;
		// page.frame.navigate({})
		const registerBtn = page.getViewById('register');
		console.log(registerBtn.text);
	}
}