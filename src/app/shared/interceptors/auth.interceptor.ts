import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpHeaderResponse,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

import { AuthService } from '../../admin/services/auth/auth.service';
import { AuthInterceptorRequest } from '../interfaces/auth-interceptor.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private AuthService: AuthService, private Router: Router) {}

	public intercept(
		request: HttpRequest<AuthInterceptorRequest>,
		next: HttpHandler
	): Observable<HttpEvent<HttpHeaderResponse>> {
		if (this.AuthService.isAuthenticated) {
			request = request.clone({
				setParams: {
					auth: this.AuthService.token!,
				},
			});
		}

		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse): Observable<never> => {
				console.log('[Interceptor error]', error);

				if (error.status === 401) {
					this.AuthService.logout();
					this.Router.navigate(['admin', 'login'], {
						queryParams: {
							authFailed: true,
						},
					});
				}

				return throwError(error);
			})
		);
	}
}
