import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockService } from './services/stock.service';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { AppRoutesModule } from './/app-routes.module';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    StockListComponent,
    CreateStockComponent,
    StockDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
  ],
  providers: [
    StockService,
    UserService,
    UserStoreService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
