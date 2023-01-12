import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../../../service/user.service'
import { ActivatedRoute, Router } from '@angular/router'
import { PasswordMatchValidators } from '../../../../shared/validators/validators'
import { IUserRegister } from '../../../../shared/interfaces/IuserRegister'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    registerForm!: FormGroup
    isSubmitted = false
    returnUrl = ''
    constructor(
        private fb: FormBuilder,
        private userService: UserService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}
    registerUser() {
        this.registerForm = this.fb.group(
            {
                name: ['', [Validators.required, Validators.minLength(2)]],
                email: ['', Validators.required, Validators.email],
                password: ['', [Validators.required, Validators.minLength(5)]],
                confirmPassword: ['', Validators.required],
                address: ['', [Validators.required, Validators.minLength(10)]],
            },
            {
                validators: PasswordMatchValidators(
                    'password',
                    'confirmPassword'
                ),
            }
        )
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
    }

    get fc() {
        return this.registerForm.controls
    }
    submit() {
        this.isSubmitted = true
        if (!this.registerForm.valid) {
            const fv = this.registerForm.value
            const user: IUserRegister = {
                email: fv.email,
                password: fv.password,
                name: fv.name,
                confirmPassword: fv.confirmPassword,
                address: fv.address,
            }
            this.userService.register(user).subscribe((_) => {
                this.router.navigateByUrl(this.returnUrl)
            })
        }
    }
    ngOnInit(): void {
        this.registerUser()
    }
}
