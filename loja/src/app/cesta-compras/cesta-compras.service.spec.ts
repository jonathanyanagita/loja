import { TestBed } from '@angular/core/testing';

import { CestaComprasService } from './cesta-compras.service';

describe('CestaComprasService', () => {
  let service: CestaComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
