import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherSchoolComponent } from './list-teacher-school.component';

describe('ListTeacherSchoolComponent', () => {
  let component: ListTeacherSchoolComponent;
  let fixture: ComponentFixture<ListTeacherSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
