import {TestBed} from '@angular/core/testing';

import {ClassbotService} from './classbot.service';

describe('ClassbotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassbotService = TestBed.get(ClassbotService);
    expect(service).toBeTruthy();
  });
});
