import { TestBed } from '@angular/core/testing';

import { SubjectSchuleService } from './subject-schule.service';

describe('SubjectSchuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubjectSchuleService = TestBed.get(SubjectSchuleService);
    expect(service).toBeTruthy();
  });
});
