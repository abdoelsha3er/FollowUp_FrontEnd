import { TestBed } from '@angular/core/testing';

import { CenterservicesService } from './centerservices.service';

describe('CenterservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CenterservicesService = TestBed.get(CenterservicesService);
    expect(service).toBeTruthy();
  });
});
