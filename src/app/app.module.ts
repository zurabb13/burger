import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { SharedModule } from './shared/shared.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
    HttpClient,
} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr'
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { LanguageInterceptor } from './shared/interceptor/language-interseptor.interceptor'
import { LangService } from './service/lang.service'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json')
}
@NgModule({
    declarations: [AppComponent],
    imports: [
        TranslateModule.forRoot({
            defaultLanguage: 'eng',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            newestOnTop: false,
        }),
    ],
    exports: [TranslateModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LanguageInterceptor,
            multi: true,
        },
        LangService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
