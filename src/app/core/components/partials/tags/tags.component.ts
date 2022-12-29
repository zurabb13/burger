import { Component } from '@angular/core'
import { Tag } from '../../../../shared/models/tag'
import { FoodService } from '../../../../service/food.service'

@Component({
    selector: 'app-tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
    tags?: Tag[]
    constructor(foodService: FoodService) {
        foodService.getAllTag().subscribe((tagService) => {
            this.tags = tagService
        })
    }
}
