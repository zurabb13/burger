import { NgModule } from '@angular/core'
import { HeaderComponent } from '../core/header/header.component'
import { MaterialModule } from './material.module'
import { HomeComponent } from '../core/components/pages/home/home.component'
import { CommonModule } from '@angular/common'
import { SearchComponent } from '../core/components/partials/search/search.component'
import { TagsComponent } from '../core/components/partials/tags/tags.component'
import { RouterModule } from '@angular/router'
import { FoodPageComponent } from '../core/components/pages/food-page/food-page.component'
import { CartPageComponent } from '../core/components/pages/cart-page/cart-page.component'
import { TitleComponent } from '../core/components/partials/title/title.component'
import { NotFoundComponent } from '../core/components/partials/not-found/not-found.component'
import { LoginPageComponent } from '../core/components/pages/login-page/login-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputContainerComponent } from '../core/components/partials/input-container/input-container.component'
import { InputValidationComponent } from '../core/components/partials/input-validation/input-validation.component'
import { TextInputComponent } from '../core/components/partials/text-input/text-input.component'
import { RegisterComponent } from '../core/components/pages/register/register.component'
import { LoadingComponent } from '../core/components/partials/loading/loading.component'
import { TranslateModule } from '@ngx-translate/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { LanguageInterceptor } from './interceptor/language-interseptor.interceptor'
import { CheckoutComponent } from '../core/components/pages/checkout/checkout.component'
import { OrderItemLessComponent } from '../core/components/partials/order-item-less/order-item-less.component'
import { MapComponent } from '../core/components/partials/map/map.component'
import { MouseHoverDirective } from './directive/mousehover.directive'
import { MouseLeaveDirective } from './directive/mouse-leave.directive'
import { AuthInterceptor } from './interceptor/auth.interceptor'
import { StarRatingModule } from 'angular-star-rating'
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap'
import { SearchPipe } from './pipe/search.pipe'

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TagsComponent,
        FoodPageComponent,
        CartPageComponent,
        TitleComponent,
        NotFoundComponent,
        LoginPageComponent,
        InputContainerComponent,
        InputValidationComponent,
        TextInputComponent,
        RegisterComponent,
        LoadingComponent,
        CheckoutComponent,
        OrderItemLessComponent,
        MapComponent,
        MouseHoverDirective,
        MouseLeaveDirective,
        SearchPipe,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        StarRatingModule.forRoot(),
        NgbPaginationModule,
        NgbAlertModule,
        NgbRatingModule,
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TitleComponent,
        RegisterComponent,
        LoadingComponent,
        TranslateModule,
        CheckoutComponent,
        OrderItemLessComponent,
        MapComponent,
        SearchPipe,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LanguageInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class SharedModule {}
