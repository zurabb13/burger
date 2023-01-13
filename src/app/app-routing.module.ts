import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './core/components/pages/home/home.component'
import { FoodPageComponent } from './core/components/pages/food-page/food-page.component'
import { CartPageComponent } from './core/components/pages/cart-page/cart-page.component'
import { LoginPageComponent } from './core/components/pages/login-page/login-page.component'
import { RegisterComponent } from './core/components/pages/register/register.component'
import { CheckoutComponent } from './core/components/pages/checkout/checkout.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodPageComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'auth/login', component: LoginPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'checkout', component: CheckoutComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
