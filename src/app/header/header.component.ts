import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_lib/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public constructor(public authService: AuthService) {

        authService.handleAuthentication();

    }

    public ngOnInit() {

    }

    public menuClick(): void {


    }

}
