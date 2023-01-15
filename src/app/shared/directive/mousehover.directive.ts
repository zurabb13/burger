import {
    Directive,
    ElementRef,
    HostBinding,
    HostListener,
    ViewChild,
} from '@angular/core'
import { MatMenu, MatMenuTrigger } from '@angular/material/menu'
import { MatTab } from '@angular/material/tabs'

@Directive({
    selector: '[mouseHover]',
})
export class MouseHoverDirective {
    constructor(private trigger: MatMenuTrigger) {}

    @HostListener('mouseover')
    onMouseOver() {
        this.trigger.openMenu()
    }
}
