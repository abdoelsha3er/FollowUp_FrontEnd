import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterListSubjectComponent } from './center-list-subject.component';

describe('CenterListSubjectComponent', () => {
  let component: CenterListSubjectComponent;
  let fixture: ComponentFixture<CenterListSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterListSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterListSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
