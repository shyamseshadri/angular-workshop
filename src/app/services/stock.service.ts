import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  public stocks: Stock[];

  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'BSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    ];
  }

  getStocks(): Observable<Stock[]> {
    return of(this.stocks);
  }

  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return throwError({msg: "Stock with code already exists"});
    }
    this.stocks.push(stock);
    return of({msg: "Successfully added stock"});
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favourite = !foundStock.favourite;
    return of(foundStock);
  }

}
