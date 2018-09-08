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
  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.initializeStock();
   }

  initializeStock() {
    this.stock = {
      name: '',
      code: '',
      price: 0,
      previousPrice: 0,
      exchange: 'NASDAQ',
      favourite: false
    };
  }

  onPriceChange(newPrice) {
    this.stock.price = newPrice;
    this.stock.previousPrice = newPrice;
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm);
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
        .subscribe((resp) => {
          this.initializeStock();
          this.message = resp.msg;
        }, (err) => {
          this.message = err.msg;
        });
    } else {
      this.message = 'Stock Form is invalid!';
    }
  }

}
