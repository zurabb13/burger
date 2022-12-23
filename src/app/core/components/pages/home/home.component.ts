import { Component, OnInit } from '@angular/core'
import { Food } from '../../../../shared/models/food'
import { FoodService } from '../../../../service/food.service'
import { ActivatedRoute } from '@angular/router'

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
            if (param['searchTerm']) {
                this.foods = this.fService.getAllFoodSearch(param['searchTerm'])
            } else if (param['tag']) {
                this.foods = this.fService.getAllFoodByTag(param['tag'])
            } else {
                this.foods = this.fService.getAll()
            }
        })
    }

    ngOnInit() {}
}
