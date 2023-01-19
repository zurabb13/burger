import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'search',
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], term: string, properties?: string[]): any[] {
        if (!term) return items
        if (!items) return []
        if (!properties) {
            return items.filter((item) => {
                return JSON.stringify(item)
                    .toLowerCase()
                    .includes(term.toLowerCase())
            })
        } else {
            return items.filter((item) => {
                for (let i = 0; i < properties.length; i++) {
                    if (
                        item[properties[i]]
                            .toString()
                            .toLowerCase()
                            .includes(term.toLowerCase())
                    ) {
                        return true
                    }
                }
                return false
            })
        }
    }
}
