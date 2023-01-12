import { NgModule } from '@angular/core'
import { HeaderComponent } from '../core/header/header.component'
import { MaterialModule } from './material.module'
import { HomeComponent } from '../core/components/pages/home/home.component'
import { CommonModule } from '@angular/common'
import { RatingModule } from 'ng-starrating'
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
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RatingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TitleComponent,
        RegisterComponent,
        LoadingComponent,
    ],
})
export class SharedModule {}
