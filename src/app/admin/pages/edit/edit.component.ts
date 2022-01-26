import { Component, OnDestroy, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

import { Post } from '../../../shared/interfaces/post.interface';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
	selector: 'edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit, OnDestroy {
	public form: FormGroup | null = null;
	public title: AbstractControl | null = null;
	public text: AbstractControl | null = null;
	public post: Post | null = null;
	public submitted = false;
	public updateSubscription: Subscription | null = null;

	constructor(
		private ActivatedRoute: ActivatedRoute,
		private PostsService: PostsService,
		private AlertService: AlertService
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

				this.post = post;
				this.title = new FormControl(post.title, required);
				this.text = new FormControl(post.text, required);

				this.form = new FormGroup({
					title: this.title,
					text: this.text,
				});
			});
	}

	public ngOnDestroy(): void {
		if (this.updateSubscription) {
			this.updateSubscription.unsubscribe();
		}
	}

	public submit(): void {
		if (this.form?.invalid) {
			return;
		}

		this.submitted = true;

		this.updateSubscription = this.updatePost();
	}

	public updatePost(): Subscription {
		return this.PostsService.update({
			...this.post!,
			text: this.form?.value.text,
			title: this.form?.value.title,
		}).subscribe((): void => {
			this.submitted = false;
			this.AlertService.success('Post has been updated');
		});
	}
}
