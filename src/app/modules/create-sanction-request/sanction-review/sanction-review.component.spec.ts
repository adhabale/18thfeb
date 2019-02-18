import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionReviewComponent } from './sanction-review.component';

describe('SanctionReviewComponent', () => {
  let component: SanctionReviewComponent;
  let fixture: ComponentFixture<SanctionReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
