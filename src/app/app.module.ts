import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RatingModule } from 'ng-starrating'
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './core/components/pages/login-page/login-page.component'

@NgModule({
    declarations: [AppComponent, LoginPageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RatingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
    ],
    exports: [RatingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
