import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    private getSearchTerm = new BehaviorSubject('')

    constructor() {}

    setSearchTerm(term: string) {
        this.getSearchTerm.next(term)
    }
    getSearch() {
        return this.getSearchTerm.asObservable()
    }
}
