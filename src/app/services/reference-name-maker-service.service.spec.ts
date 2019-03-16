import { TestBed } from '@angular/core/testing';

import { ReferenceNameMakerServiceService } from './reference-name-maker-service.service';

describe('ReferenceNameMakerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferenceNameMakerServiceService = TestBed.get(ReferenceNameMakerServiceService);
    expect(service).toBeTruthy();
  });
});
