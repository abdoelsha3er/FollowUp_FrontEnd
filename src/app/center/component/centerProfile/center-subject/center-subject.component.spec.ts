import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSubjectComponent } from './center-subject.component';

describe('CenterSubjectComponent', () => {
  let component: CenterSubjectComponent;
  let fixture: ComponentFixture<CenterSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
