import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

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

  getStocks(): Stock[] {
    return this.stocks;
  }

  createStock(stock: Stock): boolean {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return false;
    }
    this.stocks.push(stock);
    return true;
  }

  toggleFavorite(stock: Stock): void {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favourite = !foundStock.favourite;
  }

}
