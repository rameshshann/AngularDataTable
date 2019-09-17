import { TestBed } from '@angular/core/testing';

import { AwesomeGridService } from './awesome-grid.service';

describe('AwesomeGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwesomeGridService = TestBed.get(AwesomeGridService);
    expect(service).toBeTruthy();
  });
});
