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
    ],
    imports: [CommonModule, MaterialModule, RatingModule, RouterModule],
    exports: [HeaderComponent, HomeComponent, SearchComponent],
})
export class SharedModule {}
