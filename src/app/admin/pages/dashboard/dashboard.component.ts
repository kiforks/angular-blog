import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
