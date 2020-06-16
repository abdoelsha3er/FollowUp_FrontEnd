import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBioComponent } from './teacher-bio.component';

describe('TeacherBioComponent', () => {
  let component: TeacherBioComponent;
  let fixture: ComponentFixture<TeacherBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
