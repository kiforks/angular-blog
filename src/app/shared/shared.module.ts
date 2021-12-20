import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserPostComponent } from './components/user-post/user-post.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';

@NgModule({
	declarations: [UserPostComponent, HomeComponent, PostComponent],
	imports: [CommonModule, RouterModule],
	exports: [CommonModule, UserPostComponent, HomeComponent, PostComponent],
})
export class SharedModule {}
