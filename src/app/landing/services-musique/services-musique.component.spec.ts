import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ServicesMusiqueComponent } from "./services-musique.component";

describe("ServicesMusiqueComponent", () => {
	let component: ServicesMusiqueComponent;
	let fixture: ComponentFixture<ServicesMusiqueComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ServicesMusiqueComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ServicesMusiqueComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
