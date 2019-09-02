import {TestBed} from '@angular/core/testing';

import {ReferenceMakerService} from './reference-maker.service';

describe('ReferenceNameMakerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReferenceMakerService = TestBed.get(ReferenceMakerService);
    expect(service).toBeTruthy();
  });
});
