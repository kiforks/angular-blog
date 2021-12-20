import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		/* Layout */
		AppLayoutComponent,
	],
	imports: [BrowserModule, AppRouting, SharedModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
