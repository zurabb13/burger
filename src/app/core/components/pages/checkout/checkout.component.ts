import { Component, OnInit } from '@angular/core'
import { Order } from '../../../../shared/models/order'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CartService } from '../../../../service/cart.service'
import { UserService } from '../../../../service/user.service'
import { ToastrService } from 'ngx-toastr'

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
    order: Order = new Order()
    checkoutForm!: FormGroup
    constructor(
        cartSrvice: CartService,
        private fb: FormBuilder,
        private userService: UserService,
        private toastrService: ToastrService
    ) {
        const cart = cartSrvice.getCart()
        this.order.items = cart.items
        this.order.totalPrice = cart.totalPrice
    }
    ngOnInit(): void {
        this.getForm()
    }
    getForm() {
        let { name, address } = this.userService.currentUser
        this.checkoutForm = this.fb.group({
            name: [name, Validators.required],
            address: [address, Validators.required],
        })
    }
    get fc() {
        return this.checkoutForm.controls
    }
    createOrder() {
        if (!this.checkoutForm.valid) {
            this.toastrService.warning('Please fill the input', 'Invalid Input')
            return
        }
        this.order.name = this.fc.name.value
        this.order.address = this.fc.address.value
        console.log(this.order)
    }
}
