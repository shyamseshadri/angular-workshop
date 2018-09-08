import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: StockListComponent },
  { path: 'stocks/create', component: CreateStockComponent },
  { path: 'stock/:code', component: StockDetailsComponent },
  { path: '**', redirectTo: '/register' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
