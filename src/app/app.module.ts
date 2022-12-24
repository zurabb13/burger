import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RatingModule } from 'ng-starrating'
import { CartPageComponent } from './core/components/pages/cart-page/cart-page.component'
import { TitleComponent } from './core/components/partials/title/title.component'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RatingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
    ],
    exports: [RatingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
