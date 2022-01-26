import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts/posts.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public posts$: Observable<Post[]> | null = null;

	constructor(private PostsService: PostsService) {}

	public ngOnInit(): void {
		this.posts$ = this.PostsService.getAll();
	}
}
