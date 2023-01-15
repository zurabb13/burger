import { Directive, HostListener } from '@angular/core'
import { MatMenuTrigger } from '@angular/material/menu'

@Directive({
    selector: '[mouseleave]',
})
export class MouseLeaveDirective {
    constructor(private trigger: MatMenuTrigger) {}

    @HostListener('mouseleave')
    mouseLeave() {
        this.trigger.closeMenu()
    }
}
