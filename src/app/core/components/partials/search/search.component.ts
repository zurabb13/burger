import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { SearchService } from '../../../../service/search.service'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    searchTerm = ''
    constructor(
        activateRoute: ActivatedRoute,
        private route: Router,
        private searchService: SearchService
    ) {
        activateRoute.params.subscribe((param) => {
            if (param['searchTerm']) {
                this.searchTerm = param['searchTerm']
            }
        })
    }
    setSearchTerm(term: string) {
        return this.searchService.setSearchTerm(term)
    }
    ngOnInit(): void {}

    search(term: string) {
        if (term) {
            this.route.navigateByUrl('/search/' + term)
        }
    }
}
