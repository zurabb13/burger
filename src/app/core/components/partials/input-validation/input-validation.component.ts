import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core'
import { AbstractControl } from '@angular/forms'

const VALIDATORS: any = {
    required: 'Should not be empty',
    email: 'Email is not valid',
    minlength: 'Field is to short',
    notMatch: 'Password not match',
}
@Component({
    selector: 'app-input-validation',
    templateUrl: './input-validation.component.html',
    styleUrls: ['./input-validation.component.scss'],
})
export class InputValidationComponent implements OnInit, OnChanges {
    @Input() control!: AbstractControl
    @Input() showErors: boolean = true
    errorMessage: string[] = []

    constructor() {}
    checkValidation() {
        const error = this.control.errors
        if (!error) {
            this.errorMessage = []
            return
        }
        const errorKey = Object.keys(error)
        this.errorMessage = errorKey.map((key) => VALIDATORS[key])
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.checkValidation()
    }

    ngOnInit(): void {
        this.control.statusChanges.subscribe(() => {
            this.checkValidation()
        })
        this.control.valueChanges.subscribe(() => {
            this.checkValidation()
        })
    }
}
