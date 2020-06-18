import { TestBed } from '@angular/core/testing';

import { CategorySubjectService } from './category-subject.service';

describe('CategorySubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorySubjectService = TestBed.get(CategorySubjectService);
    expect(service).toBeTruthy();
  });
});
