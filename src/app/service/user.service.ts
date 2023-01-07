import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { User } from '../shared/models/user'
import { IUserLogin } from '../shared/interfaces/IUserLogin'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { ToastrService } from 'ngx-toastr'
import { IUserRegister } from '../shared/interfaces/IuserRegister'

const userKey = 'User'
@Injectable({
    providedIn: 'root',
})
export class UserService {
    private userSubject = new BehaviorSubject(this.getUserLocalStorage())
    public userObservable: Observable<User>
    constructor(
        private http: HttpClient,
        private toastrService: ToastrService
    ) {
        this.userObservable = this.userSubject.asObservable()
    }
    login(user: IUserLogin): Observable<User> {
        return this.http.post<User>(environment.api.user_login, user).pipe(
            tap({
                next: (user) => {
                    this.setLocalStorage(user)
                    this.userSubject.next(user)
                    this.toastrService.success(
                        `
                    welcome foodmine ${user.name}`,
                        'login Successfull'
                    )
                },
                error: (errorResponse) => {
                    this.toastrService.error(
                        errorResponse.error,
                        'login failed'
                    )
                },
            })
        )
    }

    register(user: IUserRegister): Observable<User> {
        return this.http.post<User>(environment.api.user_register, user).pipe(
            tap({
                next: (user) => {
                    this.setLocalStorage(user)
                    this.userSubject.next(user)
                    this.toastrService.success(
                        `Welcome to ${user.name}`,
                        'Register Successful'
                    )
                },
                error: (error) => {
                    this.toastrService.error(error.error, 'Register Field')
                },
            })
        )
    }

    logout() {
        this.userSubject.next(new User())
        localStorage.removeItem(userKey)
        window.location.reload()
    }
    private setLocalStorage(user: User) {
        localStorage.setItem(userKey, JSON.stringify(user))
    }
    private getUserLocalStorage(): User {
        const userJson = localStorage.getItem(userKey)
        if (userJson) {
            return JSON.parse(userJson) as User
        }
        return new User()
    }
}
