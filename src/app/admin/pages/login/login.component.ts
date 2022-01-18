import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

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

	public submitted = false;

	constructor(private AuthService: AuthService, private router: Router) {}

	public ngOnInit(): void {
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

		this.AuthService.login(user).subscribe((): void => {
			this.form.reset();

			this.router.navigate(['/admin', 'dashboard']);

			this.submitted = false;
		});
	}
}
