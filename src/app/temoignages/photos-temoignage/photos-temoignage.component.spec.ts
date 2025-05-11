import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosTemoignageComponent } from './photos-temoignage.component';

describe('PhotosTemoignageComponent', () => {
  let component: PhotosTemoignageComponent;
  let fixture: ComponentFixture<PhotosTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotosTemoignageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
