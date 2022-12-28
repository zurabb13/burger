import { Injectable } from '@angular/core'
import { Food } from '../shared/models/food'
import { simple_food, sample_tags } from '../../../../backend/src/data'
import { Tag } from '../shared/models/tag'

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    constructor() {}

    getAll(): Food[] {
        return simple_food
    }
    getAllFoodSearch(searchTerm: string) {
        return this.getAll().filter((i) =>
            i.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    getAllTag(): Tag[] {
        return sample_tags
    }
    getAllFoodByTag(tag: string): Food[] {
        return tag == 'All'
            ? this.getAll()
            : this.getAll().filter((food) => food.tags?.includes(tag))
    }
    getFoodById(id: string): Food {
        return this.getAll().find((food) => food.id == id) ?? new Food()
    }
}
