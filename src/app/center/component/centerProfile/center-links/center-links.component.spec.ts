import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterLinksComponent } from './center-links.component';

describe('CenterLinksComponent', () => {
  let component: CenterLinksComponent;
  let fixture: ComponentFixture<CenterLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
