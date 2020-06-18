import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddteacherPhoneComponent } from './addteacher-phone.component';

describe('AddteacherPhoneComponent', () => {
  let component: AddteacherPhoneComponent;
  let fixture: ComponentFixture<AddteacherPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddteacherPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddteacherPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
