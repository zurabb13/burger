import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    searchTerm = ''
    constructor(activateRoute: ActivatedRoute, private route: Router) {
        activateRoute.params.subscribe((param) => {
            if (param['searchTerm']) {
                this.searchTerm = param['searchTerm']
            }
        })
    }
    ngOnInit(): void {}

    search(term: string) {
        if (term) {
            this.route.navigateByUrl('/search/' + term)
        }
    }
}
