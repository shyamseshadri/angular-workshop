import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockComponent } from './create-stock.component';

describe('CreateStockComponent', () => {
  let component: CreateStockComponent;
  let fixture: ComponentFixture<CreateStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
