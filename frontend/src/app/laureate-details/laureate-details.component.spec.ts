import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaureateDetailsComponent } from './laureate-details.component';

describe('LaureateDetailsComponent', () => {
  let component: LaureateDetailsComponent;
  let fixture: ComponentFixture<LaureateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaureateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaureateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
