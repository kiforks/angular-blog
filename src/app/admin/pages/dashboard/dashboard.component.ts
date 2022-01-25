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
	public deleteSubscription: Subscription | null = null;
	public searchValue = '';

	constructor(private PostsService: PostsService) {}

	public ngOnInit(): void {
		this.postSubscription = this.PostsService.getAll().subscribe(
			(posts: Post[]): void => {
				this.posts = posts;
			}
		);
	}

	public ngOnDestroy(): void {
		if (this.postSubscription) {
			this.postSubscription.unsubscribe();
		}

		if (this.deleteSubscription) {
			this.deleteSubscription.unsubscribe();
		}
	}

	public remove(id: string): void {
		this.PostsService.remove(id).subscribe((): void => {
			this.posts = this.posts.filter(
				(post: Post): boolean => post.id !== id
			);
		});
	}
}
