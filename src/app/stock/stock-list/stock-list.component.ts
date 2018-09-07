import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  public stocks: Stock[];

  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'BSE'),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE')
    ];
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }

  whenFavouriteToggled(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    stock.favourite = !stock.favourite;
  }
}
