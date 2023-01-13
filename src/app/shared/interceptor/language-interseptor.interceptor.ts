import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { LangService } from '../../service/lang.service'

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
    constructor(private language: LangService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const currentLanguage = this.language.getCurrentLanguage()
        const languageReq = request.clone({
            setHeaders: {
                'Accept-Language': currentLanguage,
            },
        })
        return next.handle(languageReq)
    }
}
