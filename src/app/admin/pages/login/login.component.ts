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
	public form!: FormGroup;
	public email!: AbstractControl;
	public password!: AbstractControl;
	public message = '';

	public submitted = false;

	constructor(
		public AuthService: AuthService,
		private Router: Router,
		private ActivatedRoute: ActivatedRoute
	) {}

	public ngOnInit(): void {
		this.ActivatedRoute.queryParams.subscribe((params: Params) => {
			if ('login' in params) {
				this.message = 'Please enter email/password';
			}
		});

		this.form = new FormGroup({
			email: new FormControl(null, [
				Validators.email,
				Validators.required,
			]),
			password: new FormControl(null, [
				Validators.required,
				Validators.minLength(6),
			]),
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
