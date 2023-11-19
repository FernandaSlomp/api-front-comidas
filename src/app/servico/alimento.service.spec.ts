import { TestBed } from '@angular/core/testing';

import { AlimentoService } from './alimento.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('AlimentoService', () => {
  let service: AlimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [AlimentoService]  
    });
    service = TestBed.inject(AlimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
