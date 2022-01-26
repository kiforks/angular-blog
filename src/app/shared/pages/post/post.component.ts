import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts/posts.service';

@Component({
	selector: 'post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	public post$!: Observable<Post>;

	constructor(
		private ActivatedRoute: ActivatedRoute,
		private PostsService: PostsService
	) {}

	public ngOnInit(): void {
		this.post$ = this.ActivatedRoute.params.pipe(
			// @ts-ignore
			switchMap((params: Params) => this.PostsService.getById(params.id))
		);
	}
}
