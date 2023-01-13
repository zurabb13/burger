import { Component, Input } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms'

@Component({
    selector: 'text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
    @Input() controls!: AbstractControl
    @Input() showError: boolean = true
    @Input() label: any
    @Input() type: 'text' | 'password' | 'email' = 'text'

    get formControl() {
        return this.controls as FormControl
    }
}
