import { Component } from '@angular/core'
import { Cart } from '../../../../shared/models/cart'
import { CartService } from '../../../../service/cart.service'
import { CartItem } from '../../../../shared/models/cartItem'

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
    cart!: Cart
    constructor(private cartService: CartService) {
        this.cartService.getCartObs().subscribe((cart) => {
            this.cart = cart
        })
    }
    removeFromCartItem(id: CartItem) {
        this.cartService.removeToCart(id.food.id)
    }
    changeQuantity(cart: CartItem, quantity: string) {
        const quantities = parseInt(quantity)
        return this.cartService.changeQuantity(cart.food.id, quantities)
    }
}
