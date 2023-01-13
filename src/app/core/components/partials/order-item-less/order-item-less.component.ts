import { Component, Input } from '@angular/core'
import { Order } from '../../../../shared/models/order'

@Component({
    selector: 'app-order-item-less',
    templateUrl: './order-item-less.component.html',
    styleUrls: ['./order-item-less.component.scss'],
})
export class OrderItemLessComponent {
    @Input() order!: Order
}
