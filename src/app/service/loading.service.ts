import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private isLoading = new BehaviorSubject<boolean>(false)

    showLoading() {
        this.isLoading.next(true)
    }
    hideLoading() {
        this.isLoading.next(false)
    }

    get isLoad() {
        return this.isLoading.asObservable()
    }

    constructor() {}
}
