import { Component } from '@angular/core'
import { FoodService } from '../../../../service/food.service'
import { Food } from '../../../../shared/models/food'
import { ActivatedRoute, Router } from '@angular/router'
import { CartService } from '../../../../service/cart.service'

@Component({
    selector: 'app-food-page',
    templateUrl: './food-page.component.html',
    styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent {
    foods!: Food
    constructor(
        private foodService: FoodService,
        private activatedRouter: ActivatedRoute,
        private cartService: CartService,
        private router: Router
    ) {
        this.activatedRouter.params.subscribe((res) => {
            if (res.id) {
                this.foodService.getFoodById(res.id).subscribe((serverFood) => {
                    this.foods = serverFood
                })
            }
        })
    }
    addToCart() {
        this.cartService.addToCart(this.foods)
        this.router.navigateByUrl('/cart-page')
    }
}
