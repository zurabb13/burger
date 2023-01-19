import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { CartService } from '../../service/cart.service'
import { EMPTY } from 'rxjs'
import { UserService } from '../../service/user.service'
import { User } from '../../shared/models/user'
import { TranslateService } from '@ngx-translate/core'
import { LangService } from '../../service/lang.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>()
    mouseLeave() {
        this.notify.emit(false)
    }
    cartQuantity = 0
    user!: User
    f = false
    lang = ''

    constructor(
        cartService: CartService,
        private userService: UserService,
        public translate: TranslateService,
        private langS: LangService
    ) {
        cartService.getCartObs().subscribe((res) => {
            this.cartQuantity = res.totalCount
        })
        userService.userObservable.subscribe((newUser) => {
            this.user = newUser
        })
    }
    logout() {
        this.userService.logout()
    }
    get isAuth() {
        return this.user.token
    }
    ngOnInit() {
        this.langS.currentLanguage$.subscribe((l) => {
            this.lang = l
        })
        this.localStorageLang()
        this.translate.onLangChange.subscribe((event) => {
            localStorage.setItem('language', event.lang)
        })
        this.isAuth
    }
    switchLanguage(language: string) {
        this.translate.use(language)
        window.location.reload()
    }
    localStorageLang() {
        let storedLanguage = localStorage.getItem('language')
        if (storedLanguage) {
            this.translate.use(storedLanguage)
        } else {
            this.translate.use('eng')
        }
    }
}
