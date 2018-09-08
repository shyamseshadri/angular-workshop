import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock: Stock;
  public confirmed:boolean = false;
  public message: string = null;
  constructor(private stockService: StockService) {
    this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
  }

  ngOnInit() { }

  onPriceChange(newPrice) {
    this.stock.price = newPrice;
    this.stock.previousPrice = newPrice;
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      let created = this.stockService.createStock(this.stock);
      this.message = created ? 'Stock created successfully' : 'Stock already exists!';
      if (created) {
        this.stock = new Stock('test', '', 0, 0, 'NASDAQ');
      }
    } else {
      this.message = 'Stock Form is invalid!';
    }
  }

}
