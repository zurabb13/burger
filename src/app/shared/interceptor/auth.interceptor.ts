import { Injectable } from '@angular/core'
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserService } from '../../service/user.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const user = this.userService.currentUser
        if (user.token) {
            request = request.clone({
                setHeaders: {
                    token: user.token,
                },
            })
        }
        return next.handle(request)
    }
}
