import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { FirebaseAuth } from '../../../shared/interfaces/firebase-auth.interface';
import { User } from '../../../shared/interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	public get token(): string {
		return '';
	}

	public login(user: User): Observable<any> {
		return this.http
			.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
				user
			)
			.pipe(tap(this.setToken));
	}

	public logout(user: User): void {
		this.http.post('', user);
	}

	public isAuthenticated(): boolean {
		return !!this.token;
	}

	private setToken(response: FirebaseAuth): void {
		console.log(response);
	}
}
