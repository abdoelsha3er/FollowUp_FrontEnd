import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSchuleComponent } from './subject-schule.component';

describe('SubjectSchuleComponent', () => {
  let component: SubjectSchuleComponent;
  let fixture: ComponentFixture<SubjectSchuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectSchuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSchuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
