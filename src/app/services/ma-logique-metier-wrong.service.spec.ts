import { TestBed } from '@angular/core/testing';

import { MaLogiqueMetierWrongService } from '../ma-logique-metier-wrong.service';

describe('MaLogiqueMetierWrongService', () => {
  let service: MaLogiqueMetierWrongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaLogiqueMetierWrongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
