import { Component, OnInit } from '@angular/core'
import { FoodService } from '../../../../service/food.service'
import { Food } from '../../../../shared/models/food'
import { ActivatedRoute, Router } from '@angular/router'
import { CartService } from '../../../../service/cart.service'
import { TranslateService } from '@ngx-translate/core'

@Component({
    selector: 'app-food-page',
    templateUrl: './food-page.component.html',
    styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
    name?: string | undefined
    foods!: Food
    constructor(
        private foodService: FoodService,
        private activatedRouter: ActivatedRoute,
        private cartService: CartService,
        private router: Router,
        public transaction: TranslateService
    ) {
        transaction.addLangs(['eng', 'geo'])
        this.activatedRouter.params.subscribe((res) => {
            if (res.id) {
                this.foodService.getFoodById(res.id).subscribe((serverFood) => {
                    this.foods = serverFood
                })
                transaction.setTranslation('geo', {
                    hamburger: 'Hamburger',
                    fry: 'Fry',
                    pizza: 'Pizza',
                    meatball: 'Meatball',
                    chicken: 'Chicken',
                })
            }
        })
    }
    addToCart() {
        this.cartService.addToCart(this.foods)
        this.router.navigateByUrl('/cart-page')
    }
    ngOnInit() {
        // this.name = this.foods.name
        console.log(this.foods.name)
    }
}
