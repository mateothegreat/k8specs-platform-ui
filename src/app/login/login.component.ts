import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public formGroup = new FormGroup({

        email: new FormControl('matthew@matthewdavis.io', [

            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(255),
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

        ]),

        password: new FormControl('asdfasdf', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ])

    });

    public constructor(private toastrService: ToastrService,
                       private loginService: LoginService) {

    }

    public login(): void {

        this.loginService.login(this.formGroup.controls.email.value, this.formGroup.controls.password.value).subscribe((result: any) => {

            if (result) {

                this.loginService.close();

                this.toastrService.success('woohoo, you\'ve been logged in!');

            } else {

                this.toastrService.error('Oh no!<br>You entered an invalid email or password. :(');

            }

        });

    }

}
