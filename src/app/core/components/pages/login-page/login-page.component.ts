import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { UserService } from '../../../../service/user.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup
    isSubmitted = false
    url = ''
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.formBuilder()
        this.url = this.activatedRoute.snapshot.queryParams.url
    }

    formBuilder() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        })
    }
    get fc() {
        return this.loginForm.controls
    }
    submit() {
        this.isSubmitted = true
        if (this.loginForm.invalid) return

        this.userService
            .login({
                email: this.fc.email.value,
                password: this.fc.password.value,
            })
            .subscribe(() => {
                this.router.navigateByUrl(this.url)
            })

    }
}
