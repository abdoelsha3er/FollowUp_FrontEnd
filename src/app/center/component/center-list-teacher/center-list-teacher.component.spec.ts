import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterListTeacherComponent } from './center-list-teacher.component';

describe('CenterListTeacherComponent', () => {
  let component: CenterListTeacherComponent;
  let fixture: ComponentFixture<CenterListTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterListTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
