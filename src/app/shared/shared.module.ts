import { NgModule } from '@angular/core'
import { HeaderComponent } from '../core/header/header.component'
import { MaterialModule } from './material.module'
import { HomeComponent } from '../core/components/pages/home/home.component'
import { CommonModule } from '@angular/common'
import { RatingModule } from 'ng-starrating'
import { SearchComponent } from '../core/components/partials/search/search.component'
import { TagsComponent } from '../core/components/partials/tags/tags.component'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        SearchComponent,
        TagsComponent,
    ],
    imports: [CommonModule, MaterialModule, RatingModule, RouterModule],
    exports: [HeaderComponent, HomeComponent, SearchComponent],
})
export class SharedModule {}
