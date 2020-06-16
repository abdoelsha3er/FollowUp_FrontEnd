import { TestBed } from '@angular/core/testing';

import { StudentDetailsCourseService } from './student-details-course.service';

describe('StudentDetailsCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDetailsCourseService = TestBed.get(StudentDetailsCourseService);
    expect(service).toBeTruthy();
  });
});
