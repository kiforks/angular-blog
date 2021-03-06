import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

import { Post } from '../../../shared/interfaces/post.interface';
import { PostsService } from '../../../shared/services/posts/posts.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
	selector: 'create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
	public title: AbstractControl = new FormControl(null, [
		Validators.required,
	]);

	public author: AbstractControl = new FormControl(null, [
		Validators.required,
	]);

	public text: AbstractControl = new FormControl(null, [
		Validators.required,
	]);

	public form: FormGroup = new FormGroup({
		title: this.title,
		author: this.author,
		text: this.text,
	});

	constructor(
		private PostsService: PostsService,
		private AlertService: AlertService
	) {}

	public ngOnInit(): void {
		this.title = this.form.get('title') as AbstractControl;
		this.author = this.form.get('author') as AbstractControl;
	}

	public submit(): void {
		if (this.form.invalid) {
			return;
		}

		const post: Post = {
			title: this.form.value.title,
			author: this.form.value.author,
			text: this.form.value.text,
			date: new Date(),
		};

		this.PostsService.create(post).subscribe((): void => {
			this.form.reset();
			this.AlertService.success('Post has been created!');
		});
	}
}
