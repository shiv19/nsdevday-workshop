import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'web-views',
	templateUrl: './web-views.component.html',
	styleUrls: ['./web-views.component.scss']
})

export class WebViewsComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}