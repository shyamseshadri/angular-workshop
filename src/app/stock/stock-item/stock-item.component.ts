import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;

  constructor() { }

  ngOnInit() { }

  toggleFavourite() {
    console.log('We are toggling the favourite status for stock at index');
    this.stock.favourite = !this.stock.favourite;
  }

}
