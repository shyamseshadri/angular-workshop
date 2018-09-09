import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CreateStockComponent } from './create-stock.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockService } from '../../services/stock.service';
import { By } from '@angular/platform-browser';

describe('CreateStockComponent', () => {
  let component: CreateStockComponent;
  let fixture: ComponentFixture<CreateStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockComponent ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [StockService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {});
  }));

  it('should have form elements', async(() => {
    const nameEl = fixture.debugElement.query(By.css('.stock-name input'));
    expect(nameEl.nativeElement.value).toEqual('');

    let submitBtn = fixture.debugElement.query(By.css('.form-group button'));
    expect(submitBtn.nativeElement.disabled).toBeTruthy();
    let confirmCheckbox = fixture.debugElement.query(By.css('.stock-confirm input'));
    expect(confirmCheckbox.nativeElement.checked).toBe(false);
    expect(component.confirmed).toBe(false);
    confirmCheckbox.nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(confirmCheckbox.nativeElement.checked).toBe(true);

      expect(component.confirmed).toBe(true);
      submitBtn = fixture.debugElement.query(By.css('.form-group button'));
      expect(submitBtn.nativeElement.disabled).toBe(false);
    });
  }));
});
