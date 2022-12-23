import { Component } from '@angular/core'
import { FoodService } from '../../../../service/food.service'
import { Food } from '../../../../shared/models/food'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-food-page',
    templateUrl: './food-page.component.html',
    styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent {
    foods!: Food
    constructor(
        private foodService: FoodService,
        private activatedRouter: ActivatedRoute
    ) {
        this.activatedRouter.params.subscribe((res) => {
            if (res['id']) {
                this.foods = this.foodService.getFoodById(res['id'])
            }
        })
    }
}
