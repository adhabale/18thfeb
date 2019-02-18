import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionTypeComponent } from './sanction-type.component';

describe('SanctionTypeComponent', () => {
  let component: SanctionTypeComponent;
  let fixture: ComponentFixture<SanctionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
