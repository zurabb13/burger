import { Component } from '@angular/core'
import { CartService } from '../../service/cart.service'
import { EMPTY } from 'rxjs'
import { UserService } from '../../service/user.service'
import { User } from '../../shared/models/user'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    cartQuantity = 0
    user!: User
    f = false
    constructor(cartService: CartService, private userService: UserService) {
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
        return this.user.access_token
    }
}
