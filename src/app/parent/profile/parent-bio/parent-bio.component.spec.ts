import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBioComponent } from './parent-bio.component';

describe('ParentBioComponent', () => {
  let component: ParentBioComponent;
  let fixture: ComponentFixture<ParentBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
