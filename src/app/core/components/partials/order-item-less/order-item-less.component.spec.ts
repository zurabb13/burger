import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemLessComponent } from './order-item-less.component';

describe('OrderItemLessComponent', () => {
  let component: OrderItemLessComponent;
  let fixture: ComponentFixture<OrderItemLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemLessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderItemLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
