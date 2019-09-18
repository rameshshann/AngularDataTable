import { TestBed } from '@angular/core/testing';

import { NgGridService } from './ng-grid.service';

describe('NgGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGridService = TestBed.get(NgGridService);
    expect(service).toBeTruthy();
  });
});
