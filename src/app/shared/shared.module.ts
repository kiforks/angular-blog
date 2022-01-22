import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';

import { UserPostComponent } from './components/user-post/user-post.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
	declarations: [UserPostComponent, HomeComponent, PostComponent],
	imports: [
		CommonModule,
		RouterModule,
		HttpClientModule,
		QuillModule.forRoot(),
	],
	exports: [
		CommonModule,
		UserPostComponent,
		HomeComponent,
		PostComponent,
		HttpClientModule,
		QuillModule,
	],
})
export class SharedModule {}
