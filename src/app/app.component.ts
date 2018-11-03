import { Component } from '@angular/core';
import { DialogService } from './_lib/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { SidenavService } from './sidenav/sidenav.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public sidenavOpened: boolean;

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private dialogService: DialogService,
                       private loginService: LoginService,
                       public sidenavService: SidenavService) {

        // loginService.open();

    }

    public menuClick(): void {


    }

}
