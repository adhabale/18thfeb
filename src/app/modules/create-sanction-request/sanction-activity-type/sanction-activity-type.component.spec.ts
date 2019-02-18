import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionActivityTypeComponent } from './sanction-activity-type.component';

describe('SanctionActivityTypeComponent', () => {
  let component: SanctionActivityTypeComponent;
  let fixture: ComponentFixture<SanctionActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
