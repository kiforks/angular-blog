import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'admin-layout',
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
	constructor(private Router: Router, private AuthService: AuthService) {}

	public logout(event: Event): void {
		event.preventDefault();

		this.AuthService.logout();

		this.Router.navigate(['admin', 'login']);
	}
}
