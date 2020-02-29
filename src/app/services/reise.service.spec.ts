import { TestBed } from '@angular/core/testing';

import { ReiseService } from './reise.service';

describe('ReiseService', () => {
  let service: ReiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
