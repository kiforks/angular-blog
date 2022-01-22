import { TestBed } from '@angular/core/testing';

/** Services */
import { PostsService } from './posts.service';

describe('PostsService', () => {
	let service: PostsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PostsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
