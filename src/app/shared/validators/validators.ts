import { AbstractControl } from '@angular/forms'

export const PasswordMatchValidators = (pass: string, confirm: string) => {
    const validators = (form: AbstractControl) => {
        const password = form.get(pass)
        const confirmPass = form.get(confirm)

        if (!password || !confirmPass) return
        if (password.value !== confirmPass.value) {
            confirmPass.setErrors({ notMatch: true })
        } else {
            const error = confirmPass.errors
            if (!error) return
            delete error.notMatch
            confirmPass.setErrors(error)
        }
    }
    return validators
}
