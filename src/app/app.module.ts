import '@angular/common/locales/global/ru';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { SharedModule } from './shared/shared.module';

const INTERCEPTOR_PROVIDE: Provider = {
	provide: HTTP_INTERCEPTORS,
	multi: true,
	useClass: AuthInterceptor,
};

@NgModule({
	declarations: [
		AppComponent,
		/* Layout */
		AppLayoutComponent,
	],
	providers: [INTERCEPTOR_PROVIDE],
	imports: [
		BrowserModule,
		AppRouting,
		SharedModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
			// Register the ServiceWorker as soon as the app is stable
			// or after 30 seconds (whichever comes first).
			registrationStrategy: 'registerWhenStable:30000',
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
