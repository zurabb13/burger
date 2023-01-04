import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './core/components/pages/home/home.component'
import { FoodPageComponent } from './core/components/pages/food-page/food-page.component'
import { CartPageComponent } from './core/components/pages/cart-page/cart-page.component'
import { LoginPageComponent } from './core/components/pages/login-page/login-page.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search/:searchTerm', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodPageComponent },
    { path: 'cart-page', component: CartPageComponent },
    { path: 'login', component: LoginPageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
