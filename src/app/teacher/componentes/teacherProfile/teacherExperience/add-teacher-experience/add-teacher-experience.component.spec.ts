import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherExperienceComponent } from './add-teacher-experience.component';

describe('AddTeacherExperienceComponent', () => {
  let component: AddTeacherExperienceComponent;
  let fixture: ComponentFixture<AddTeacherExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeacherExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
