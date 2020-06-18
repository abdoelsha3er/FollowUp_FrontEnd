import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcenterSubjectComponent } from './listcenter-subject.component';

describe('ListcenterSubjectComponent', () => {
  let component: ListcenterSubjectComponent;
  let fixture: ComponentFixture<ListcenterSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcenterSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcenterSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
