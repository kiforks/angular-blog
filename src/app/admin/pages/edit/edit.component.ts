import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { Post } from '../../../shared/interfaces/post.interface';
import { PostsService } from '../../../shared/services/posts/posts.service';

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
	public form: FormGroup | null = null;
	public title: AbstractControl | null = null;
	public text: AbstractControl | null = null;

	constructor(
		private ActivatedRoute: ActivatedRoute,
		private PostsService: PostsService
	) {}

	public ngOnInit(): void {
		this.ActivatedRoute.params
			.pipe(
				switchMap(
					(params: Params): Observable<Post> =>
						// @ts-ignore
						this.PostsService.getById(params.id)
				)
			)
			.subscribe((post: Post): void => {
				const { required } = Validators;

				this.title = new FormControl(post.title, required);
				this.text = new FormControl(post.text, required);

				this.form = new FormGroup({
					title: this.title,
					text: this.text,
				});
			});
	}
}
