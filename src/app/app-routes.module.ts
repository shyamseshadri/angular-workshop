import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: StockListComponent,
    canActivate: [AuthGuard] },
  { path: 'stocks/create', component: CreateStockComponent,
    canActivate: [AuthGuard] },
  { path: 'stock/:code', component: StockDetailsComponent,
    canActivate: [AuthGuard] },
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
