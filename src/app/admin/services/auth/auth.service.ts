import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { FirebaseAuth } from '../../../shared/interfaces/firebase-auth.interface';
import { User } from '../../../shared/interfaces/user.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	public error$: Subject<string> = new Subject<string>();

	constructor(private HttpClient: HttpClient) {}

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

		return this.HttpClient.post<FirebaseAuth>(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
			user
		).pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
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

	private handleError(error: HttpErrorResponse): Observable<never> {
		const { message } = error.error.error;

		switch (message) {
			case 'INVALID_EMAIL':
				this.error$.next('Incorrect email');
				break;
			case 'INVALID_PASSWORD':
				this.error$.next('Incorrect password');
				break;
			case 'EMAIL_NOT_FOUND':
				this.error$.next('Email not found');
				break;
		}

		return throwError(error);
	}
}
