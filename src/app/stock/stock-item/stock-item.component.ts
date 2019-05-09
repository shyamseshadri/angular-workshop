import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;

  constructor(private stockService: StockService) {}

  ngOnInit() { }

  isPositiveChange() {
    return this.stock ? this.stock.price > this.stock.previousPrice : false;
  }

  onToggleFavourite() {
    this.stockService.toggleFavorite(this.stock)
      .subscribe((stock) => {
        this.stock.favourite = !this.stock.favourite;
      });
  }

}
