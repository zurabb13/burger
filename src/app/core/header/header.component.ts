import { Component } from '@angular/core'
import { CartService } from '../../service/cart.service'
import { EMPTY } from 'rxjs'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    cartQuantity = 0

    constructor(cartService: CartService) {
        cartService.getCartObs().subscribe((res) => {
            this.cartQuantity = res.totalCount
        })
    }
}
