import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User } from '../../../shared/interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public email: AbstractControl = new FormControl(null, [
		Validators.email,
		Validators.required,
	]);

	public password: AbstractControl = new FormControl(null, [
		Validators.required,
		Validators.minLength(6),
	]);

	public message = '';

	public form: FormGroup = new FormGroup({
		email: this.email,
		password: this.password,
	});

	public submitted = false;

	constructor(
		public AuthService: AuthService,
		private Router: Router,
		private ActivatedRoute: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.ActivatedRoute.queryParams.subscribe((params: Params) => {
			if ('login' in params) {
				this.message = 'Please enter the data';
			} else if ('authFailed' in params) {
				this.message = 'Session has expired, please re-enter the data';
			}
		});

		this.email = this.form.get('email') as AbstractControl;
		this.password = this.form.get('password') as AbstractControl;
	}

	public submit(): void {
		if (this.form?.invalid) {
			return;
		}

		this.submitted = true;

		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password,
		};

		this.AuthService.login(user).subscribe(
			(): void => {
				this.form.reset();

				this.Router.navigate(['/admin', 'dashboard']);

				this.submitted = false;
			},
			(): void => {
				this.submitted = false;
			}
		);
	}
}
