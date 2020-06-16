import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherExperienceComponent } from './list-teacher-experience.component';

describe('ListTeacherExperienceComponent', () => {
  let component: ListTeacherExperienceComponent;
  let fixture: ComponentFixture<ListTeacherExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
