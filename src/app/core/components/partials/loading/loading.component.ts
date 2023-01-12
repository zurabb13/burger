import { Component } from '@angular/core'
import { bottom } from '@popperjs/core'
import { LoadingService } from '../../../../service/loading.service'

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    isLoading!: boolean
    constructor(lsrv: LoadingService) {
        lsrv.isLoad.subscribe((isLoading) => {
            this.isLoading = isLoading
        })
    }
}
