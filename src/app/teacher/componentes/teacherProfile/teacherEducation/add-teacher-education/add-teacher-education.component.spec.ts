import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherEducationComponent } from './add-teacher-education.component';

describe('AddTeacherEducationComponent', () => {
  let component: AddTeacherEducationComponent;
  let fixture: ComponentFixture<AddTeacherEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
