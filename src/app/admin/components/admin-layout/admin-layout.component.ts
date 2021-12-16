import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'admin-layout',
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
	constructor(private router: Router) {}

	public logout(event: Event): void {
		event.preventDefault();

		this.router.navigate(['admin', 'login']);
	}
}
