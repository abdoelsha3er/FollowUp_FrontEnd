import { TestBed } from '@angular/core/testing';

import { StudentReportGroupService } from './student-report-group.service';

describe('StudentReportGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentReportGroupService = TestBed.get(StudentReportGroupService);
    expect(service).toBeTruthy();
  });
});
