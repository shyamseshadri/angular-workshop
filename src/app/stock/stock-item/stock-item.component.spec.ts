import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { StockService } from '../../services/stock.service';

describe('StockItemComponent isolated test', () => {
  it('should look at stock to decide whether it is positive change', () => {
    let component = new StockItemComponent(null);

    // By Default
    expect(component.isPositiveChange()).toBeFalsy();

    component.stock = {
      code: 'Test',
      previousPrice: 40,
      price: 50,
      exchange: 'TEST',
      favourite: false,
      name: 'TEsting Product'
    };

    expect(component.isPositiveChange()).toBeTruthy();

    component.stock.previousPrice = 60;
    expect(component.isPositiveChange()).toBeFalsy();
  });
});

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemComponent ],
      providers: [StockService],
      imports: [RouterModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
