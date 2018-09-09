import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
