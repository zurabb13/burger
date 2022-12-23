import { Injectable } from '@angular/core'
import { Food } from '../shared/models/food'
import { simple_food } from '../data'

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
}
