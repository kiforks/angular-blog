import { Component, Input } from '@angular/core';

import { Post } from '../../interfaces/post.interface';

@Component({
	selector: 'user-post',
	templateUrl: './user-post.component.html',
	styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent {
	@Input() public post!: Post;
}
