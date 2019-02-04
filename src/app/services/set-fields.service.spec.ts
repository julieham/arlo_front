import { TestBed } from '@angular/core/testing';

import { SetFieldsService } from './set-fields.service';

describe('SetFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetFieldsService = TestBed.get(SetFieldsService);
    expect(service).toBeTruthy();
  });
});
