import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaureateListComponent } from './laureate-list.component';

describe('LaureateListComponent', () => {
  let component: LaureateListComponent;
  let fixture: ComponentFixture<LaureateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaureateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaureateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
