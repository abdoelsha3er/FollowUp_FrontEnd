import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterBioComponent } from './center-bio.component';

describe('CenterBioComponent', () => {
  let component: CenterBioComponent;
  let fixture: ComponentFixture<CenterBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
