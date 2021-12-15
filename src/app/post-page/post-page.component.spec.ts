import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

/** Components */
import { PostPageComponent } from './post-page.component';

describe('PostPageComponent', () => {
	let component: PostPageComponent;
	let fixture: ComponentFixture<PostPageComponent>;

	TestBed.configureTestingModule({
		declarations: [PostPageComponent],
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PostPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
