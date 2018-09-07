import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed:boolean = false;
  constructor() {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  ngOnInit() { }

  onPriceChange(newPrice) {
    this.stock.price = newPrice;
    this.stock.previousPrice = newPrice;
  }

  createStock() {
    console.log('Stock being created with', this.stock);
  }

}
