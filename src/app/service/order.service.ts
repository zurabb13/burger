import { Injectable } from '@angular/core'
import { Order } from '../shared/models/order'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(private httpClient: HttpClient) {}
    createOrder(order: Order) {
        return this.httpClient.post<Order>(environment.api.user_order, order)
    }
}
