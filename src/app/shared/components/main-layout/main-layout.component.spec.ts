import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

/** Components */
import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
	let component: MainLayoutComponent;
	let fixture: ComponentFixture<MainLayoutComponent>;

	TestBed.configureTestingModule({
		declarations: [MainLayoutComponent],
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MainLayoutComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
