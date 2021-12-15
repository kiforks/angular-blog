import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponent,
		HomeComponent,
		PostComponent,
	],
	imports: [BrowserModule, AppRouting],
	bootstrap: [AppComponent],
})
export class AppModule {}
