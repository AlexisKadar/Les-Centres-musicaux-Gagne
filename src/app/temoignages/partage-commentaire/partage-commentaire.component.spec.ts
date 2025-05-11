import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartageCommentaireComponent } from './partage-commentaire.component';

describe('PartageCommentaireComponent', () => {
  let component: PartageCommentaireComponent;
  let fixture: ComponentFixture<PartageCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartageCommentaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartageCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
