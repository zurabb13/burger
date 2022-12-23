import { NgModule } from '@angular/core'
import { HeaderComponent } from '../core/header/header.component'
import { MaterialModule } from './material.module'
import { HomeComponent } from '../core/components/pages/home/home.component'
import { CommonModule } from '@angular/common'
import { RatingModule } from 'ng-starrating'

@NgModule({
    declarations: [HeaderComponent, HomeComponent],
    imports: [CommonModule, MaterialModule, RatingModule],
    exports: [HeaderComponent, HomeComponent],
})
export class SharedModule {}
