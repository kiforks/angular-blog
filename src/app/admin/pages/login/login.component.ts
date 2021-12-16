import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

import { User } from '../../../shared/interfaces/user.interface';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	public form!: FormGroup;
	public email!: AbstractControl;
	public password!: AbstractControl;

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

		const user: User = {
			email: this.form.value.email,
			password: this.form.value.password,
		};
	}
}
