import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { StockListComponent } from './stock-list.component';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StockService } from '../../services/stock.service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('StockListComponent', () => {
  let component: StockListComponent;
  let httpBackend: HttpTestingController;
  let fixture: ComponentFixture<StockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockListComponent, StockItemComponent ],
      providers: [StockService],
      imports: [RouterModule, RouterTestingModule, HttpClientModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(inject([HttpTestingController],
    (backend: HttpTestingController) => {
      httpBackend = backend;
      fixture = TestBed.createComponent(StockListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      httpBackend.expectOne({
        url: '/api/stock',
        method: 'GET'
      }, 'Get list of stocks').flush([{
        name: 'Test Stock 1',
        code: 'TS1',
        price: 80,
        previousPrice: 90,
        exchange: 'NYSE'
      }, {
        name: 'Test Stock 2',
        code: 'TS2',
        price: 800,
        previousPrice: 900,
        exchange: 'NYSE'
      }]);
  }));

  it('should load stocks on load from server', async(() => {
    expect(component).toBeTruthy();
    expect(component.stocks$).toBeTruthy();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const stockItems = fixture.debugElement.queryAll(By.css('app-stock-item'));
      expect(stockItems.length).toEqual(2);
    });
  }));

  afterEach(() => {
    httpBackend.verify();
  });
});
