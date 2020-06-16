import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherSchoolComponent } from './add-teacher-school.component';

describe('AddTeacherSchoolComponent', () => {
  let component: AddTeacherSchoolComponent;
  let fixture: ComponentFixture<AddTeacherSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
