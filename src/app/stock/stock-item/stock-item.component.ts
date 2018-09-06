import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  @Input() public stock: Stock;
  @Output() private toggleFavourite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavourite = new EventEmitter<Stock>();
  }

  ngOnInit() { }

  onToggleFavourite() {
    this.toggleFavourite.emit(this.stock);
  }

}
