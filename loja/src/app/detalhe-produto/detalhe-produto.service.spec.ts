import { TestBed } from '@angular/core/testing';

import { DetalheProdutoService } from './detalhe-produto.service';

describe('DetalheProdutoService', () => {
  let service: DetalheProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
