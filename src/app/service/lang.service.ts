import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LangService {
    private currentLanguage = new BehaviorSubject<string>('geo')
    currentLanguage$ = this.currentLanguage.asObservable()

    changeLanguage(language: string) {
        this.currentLanguage.next(language)
    }
    getCurrentLanguage(): string {
        return this.currentLanguage.getValue()
    }
    constructor() {}
}
