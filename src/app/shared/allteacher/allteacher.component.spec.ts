import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllteacherComponent } from './allteacher.component';

describe('AllteacherComponent', () => {
  let component: AllteacherComponent;
  let fixture: ComponentFixture<AllteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
