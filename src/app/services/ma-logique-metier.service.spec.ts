import { TestBed } from '@angular/core/testing';

import { MaLogiqueMetierService } from './ma-logique-metier.toto';

describe('MaLogiqueMetierService', () => {
  let service: MaLogiqueMetierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaLogiqueMetierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
