import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '~/app/shared/base.component';

@Component({
	moduleId: module.id,
	selector: 'web-views',
	templateUrl: './web-views.component.html',
	styleUrls: ['./web-views.component.scss']
})

export class WebViewsComponent extends BaseComponent implements OnInit {

	html = `
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Simple Page</title>
		</head>
		<body>
			<h1>Hello from WebView</h1>
		</body>
		</html>
	`
	constructor() {
		super();
	}

	ngOnInit() { }
}