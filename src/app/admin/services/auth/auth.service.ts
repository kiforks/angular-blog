import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
		return this.http.post('', user);
	}

	public logout(user: User): void {
		this.http.post('', user);
	}

	public isAuthenticated(): boolean {
		return !!this.token;
	}

	private setToken(): void {}
}
