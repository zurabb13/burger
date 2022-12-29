import { Component, OnInit } from '@angular/core'
import { Food } from '../../../../shared/models/food'
import { FoodService } from '../../../../service/food.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-home',

    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    foods: Food[] = []
    constructor(
        private fService: FoodService,
        private activateRoute: ActivatedRoute
    ) {
        activateRoute.params.subscribe((param) => {
            let foodsObservalbe: Observable<Food[]>
            activateRoute.params.subscribe((params) => {
                if (params['searchTerm'])
                    foodsObservalbe = this.fService.getAllFoodSearch(
                        params['searchTerm']
                    )
                else if (params['tag'])
                    foodsObservalbe = this.fService.getAllFoodByTag(
                        params['tag']
                    )
                else foodsObservalbe = this.fService.getAll()

                foodsObservalbe.subscribe((serverFoods) => {
                    this.foods = serverFoods
                })
            })
        })
    }

    ngOnInit() {}
}
