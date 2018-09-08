import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>('/api/stock');
  }

  getStock(code: string): Observable<Stock> {
    return this.http.get<Stock>('/api/stock/' + code);
  }

  createStock(stock: Stock): Observable<any> {
    return this.http.post('/api/stock', stock);
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    return this.http.patch<Stock>('/api/stock/' + stock.code, {
      favorite: !stock.favourite
    });
  }

}
