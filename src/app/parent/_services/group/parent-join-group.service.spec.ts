import { TestBed } from '@angular/core/testing';

import { ParentJoinGroupService } from './parent-join-group.service';

describe('ParentJoinGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentJoinGroupService = TestBed.get(ParentJoinGroupService);
    expect(service).toBeTruthy();
  });
});
