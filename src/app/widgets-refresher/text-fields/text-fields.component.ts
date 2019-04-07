import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'text-fields',
	templateUrl: './text-fields.component.html',
	styleUrls: ['./text-fields.component.scss']
})

export class TextFieldsComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}