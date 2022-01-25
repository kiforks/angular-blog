import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {
	let guard: AuthInterceptor;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(AuthInterceptor);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
