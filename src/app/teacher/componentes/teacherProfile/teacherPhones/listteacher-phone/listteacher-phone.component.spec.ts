import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListteacherPhoneComponent } from './listteacher-phone.component';

describe('ListteacherPhoneComponent', () => {
  let component: ListteacherPhoneComponent;
  let fixture: ComponentFixture<ListteacherPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListteacherPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListteacherPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
