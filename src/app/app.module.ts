import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RatingModule } from 'ng-starrating'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RatingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            newestOnTop: false,
        }),
    ],
    exports: [RatingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
