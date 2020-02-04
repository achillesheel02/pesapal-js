import { TestBed } from '@angular/core/testing';

import { PesapalService } from './pesapal.service';

describe('PesapalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PesapalService = TestBed.get(PesapalService);
    expect(service).toBeTruthy();
  });
});
