import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherSubjectComponent } from './list-teacher-subject.component';

describe('ListTeacherSubjectComponent', () => {
  let component: ListTeacherSubjectComponent;
  let fixture: ComponentFixture<ListTeacherSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
