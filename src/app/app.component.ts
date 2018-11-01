import { Component } from '@angular/core';
import { DialogService } from './_lib/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private dialogService: DialogService,
                       private loginService: LoginService) {

        loginService.open();

    }

    public menuClick(): void {


    }

}
