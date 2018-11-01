import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public formGroup = new FormGroup({

        email: new FormControl('', [

            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(255)

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ])

    });

    public constructor() {

    }

    public ngOnInit() {

    }

}
