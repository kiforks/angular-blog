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

	public get token(): string | null {
		const expiresDate = new Date(
			localStorage.getItem('firebase-token-expires') as string
		);

		if (new Date() > expiresDate) {
			this.logout();

			return null;
		}

		return localStorage.getItem('firebase-token');
	}

	public login(user: User): Observable<any> {
		user.returnSecureToken = true;

		return this.http
			.post<FirebaseAuth>(
				`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
				user
			)
			.pipe(tap(this.setToken));
	}

	public logout(): void {
		this.setToken(null);
	}

	public isAuthenticated(): boolean {
		return !!this.token;
	}

	private setToken(response?: FirebaseAuth | null): void {
		if (response) {
			const MULTIPLY_VALUE = 1000; // for seconds to ms
			const expiresDate: Date = new Date(
				new Date().getTime() + +response.expiresIn! * MULTIPLY_VALUE
			);

			localStorage.setItem('firebase-token', response.idToken);
			localStorage.setItem(
				'firebase-token-expires',
				expiresDate.toString()
			);
		} else {
			localStorage.clear();
		}
	}
}
