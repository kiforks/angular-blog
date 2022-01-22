import {
	HttpContext,
	HttpHeaders,
	HttpParams,
} from '@angular/common/http';

export interface AuthInterceptorRequest {
	body: AuthInterceptorRequestBody;
	context: HttpContext;
	headers: HttpHeaders;
	method: string;
	params: HttpParams;
	reportProgress: boolean;
	responseType: string;
	url: string;
	urlWithParams: string;
	withCredentials: boolean;
}

export interface AuthInterceptorRequestBody {
	email: string;
	password: string;
	returnSecureToken: boolean;
}
