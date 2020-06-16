import { TestBed } from '@angular/core/testing';

import { ParentServicesService } from './parent-services.service';

describe('ParentServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentServicesService = TestBed.get(ParentServicesService);
    expect(service).toBeTruthy();
  });
});
