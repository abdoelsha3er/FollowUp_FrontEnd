import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeacherLinksComponent } from './list-teacher-links.component';

describe('ListTeacherLinksComponent', () => {
  let component: ListTeacherLinksComponent;
  let fixture: ComponentFixture<ListTeacherLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeacherLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeacherLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
