import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcenterSubjectComponent } from './addcenter-subject.component';

describe('AddcenterSubjectComponent', () => {
  let component: AddcenterSubjectComponent;
  let fixture: ComponentFixture<AddcenterSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcenterSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcenterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
