import { TestBed } from '@angular/core/testing';

import { CalculusService } from './calculus.service';

describe('CalculusService', () => {
  let service: CalculusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
