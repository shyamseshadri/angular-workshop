import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';

import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockService } from './services/stock.service';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';

@NgModule({
  declarations: [
    StockItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    StockService,
    UserService,
    UserStoreService,
  ],
  entryComponents: [StockItemComponent]
})
export class CustomElementModule {
  constructor(injector: Injector) {
    const customElement = createCustomElement(StockItemComponent, { injector });
    customElements.define('app-stock-item', customElement);
  }
}
