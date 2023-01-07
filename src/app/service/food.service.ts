import { Injectable } from '@angular/core'
import { Food } from '../shared/models/food'
import { Tag } from '../shared/models/tag'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import * as constants from 'constants'

@Injectable({
    providedIn: 'root',
})
export class FoodService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get<any>(environment.api.food)
    }
    getAllFoodSearch(searchTerm: string) {
        return this.http.get<Food[]>(
            `${environment.api.food_search}${searchTerm}`
        )
    }
    getAllTag(): Observable<Tag[]> {
        return this.http.get<Tag[]>(environment.api.tag)
    }
    getAllFoodByTag(tag: string): Observable<any> {
        return tag === 'All'
            ? this.getAll()
            : this.http.get<any>(`${environment.api.tag_name}${tag}`)
    }
    getFoodById(id: any): Observable<Food> {
        return this.http.get<Food>(`${environment.api.food_id}${id}`)
    }
}
