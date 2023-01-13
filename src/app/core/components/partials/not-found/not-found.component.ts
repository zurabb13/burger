import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
    @Input() visible = false
    @Input() notFound = 'error.page'
    @Input() resetLintText = 'error.reset'
    @Input() resetLinkRoute = '/'
    @Input() ad = 'error.page'
}
