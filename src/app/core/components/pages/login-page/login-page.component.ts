import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup
    isSubmited = false
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {}
    formBuilder() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }
    get fc() {
        return this.loginForm.controls
    }
    sumbit() {
        this.isSubmited = true
        if (this.loginForm.invalid) {
            return
        }
    }
}
