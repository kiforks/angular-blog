import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../../../shared/interfaces/post.interface';
import { PostsService } from '../../../shared/services/posts/posts.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
	public posts: Post[] | [] = [];
	public postSubscription: Subscription | null = null;

	constructor(private postService: PostsService) {}

	public ngOnInit(): void {
		this.postSubscription = this.postService
			.getAll()
			.subscribe((posts: Post[]): void => {
				this.posts = posts;
			});
	}

	public ngOnDestroy(): void {
		if (this.postSubscription) {
			this.postSubscription.unsubscribe();
		}
	}

	public remove(id: string) {}
}
