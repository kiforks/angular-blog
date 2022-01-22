import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { FirebaseCreate } from '../../interfaces/firebase-create.interface';
import { Post } from '../../interfaces/post.interface';

@Injectable({
	providedIn: 'root',
})
export class PostsService {
	constructor(private HttpClient: HttpClient) {}

	public create(post: Post): Observable<Post> {
		return this.HttpClient.post<FirebaseCreate>(
			`${environment.firebaseDatabaseUrl}/posts.json`,
			post
		).pipe(
			map((response: FirebaseCreate): Post => {
				return {
					...post,
					id: response.name,
					date: new Date(post.date),
				};
			})
		);
	}
}