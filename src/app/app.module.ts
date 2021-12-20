import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { UserPostComponent } from './shared/components/user-post/user-post.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { PostComponent } from './shared/pages/post/post.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PostComponent,
		UserPostComponent,
	],
	imports: [BrowserModule, AppRouting],
	bootstrap: [AppComponent],
})
export class AppModule {}
