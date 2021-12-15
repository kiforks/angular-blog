import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

/** Components */
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
	let component: HomePageComponent;
	let fixture: ComponentFixture<HomePageComponent>;

	TestBed.configureTestingModule({
		declarations: [HomePageComponent],
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
