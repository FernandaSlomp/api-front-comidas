import { TestBed } from '@angular/core/testing';

import { AlimentoService } from './alimento.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


describe('AlimentoService', () => {
  let service: AlimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule], 
      providers: [AlimentoService]  
    });
    service = TestBed.inject(AlimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
