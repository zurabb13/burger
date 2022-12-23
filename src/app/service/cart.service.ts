import { Injectable } from '@angular/core'
import { Cart } from '../shared/models/cart'
import { BehaviorSubject, Observable } from 'rxjs'
import { Food } from '../shared/models/food'
import { CartItem } from '../shared/models/cartItem'

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private cart: Cart = this.getCartToLocalStorage()
    private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(
        this.cart
    )
    constructor() {}
    addToCart(food: Food): void {
        let cartItem = this.cart.items.find((item) => item.food.id === food.id)
        if (cartItem) {
            return
        }
        this.cart.items.push(new CartItem(food))
        this.setCartLocalStorage()
    }
    removeToCart(id: string): void {
        this.cart.items = this.cart.items.filter((item) => item.food.id !== id)
        this.setCartLocalStorage()
    }
    changeQuantity(id: string, quantity: number) {
        let cartItem = this.cart.items.find((item) => item.food.id === id)
        if (!cartItem) {
            return
        }
        cartItem.quantity = quantity
        cartItem.price = quantity * cartItem.food.price
        this.setCartLocalStorage()
    }
    clearCart() {
        this.cart = new Cart()
        this.setCartLocalStorage()
    }
    getCartObs(): Observable<Cart> {
        return this.cartSubject.asObservable()
    }

    private setCartLocalStorage(): void {
        this.cart.totalPrice = this.cart.items.reduce(
            (prev, currentItem) => prev + currentItem.price,
            0
        )
        this.cart.totalCount = this.cart.items.reduce(
            (prev, current) => prev + current.quantity,
            0
        )
        const cartJson = JSON.stringify(this.cart)
        localStorage.setItem('Cart', cartJson)
        this.cartSubject.next(this.cart)
    }
    private getCartToLocalStorage(): Cart {
        const cartJson = localStorage.getItem('Cart')
        return cartJson ? JSON.parse(cartJson) : new Cart()
    }
}
