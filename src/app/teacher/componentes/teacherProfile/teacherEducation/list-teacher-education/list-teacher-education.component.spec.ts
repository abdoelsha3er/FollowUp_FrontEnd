import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherEducationComponent } from './list-teacher-education.component';

describe('ListTeacherEducationComponent', () => {
  let component: ListTeacherEducationComponent;
  let fixture: ComponentFixture<ListTeacherEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
