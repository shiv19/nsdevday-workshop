import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'images',
	templateUrl: './images.component.html',
	styleUrls: ['./images.component.scss']
})

export class ImagesComponent extends BaseComponent implements OnInit {

	constructor() {
		super();
	}

	ngOnInit() { }
}