import { Component } from '@angular/core';
import { AuthService } from '../_lib/auth.service';
import { PostService } from '../post/post.service';
import { LoginService } from '../login/login.service';
import { SidenavService } from '../sidenav/sidenav.service';
import { TextAnimation } from 'ngx-teximate';
import { bounceInRight } from 'ng-animate';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    public enterAnimation: TextAnimation = {

        animation: bounceInRight,
        delay: 50,
        type: 'letter'

    };

    public constructor(public authService: AuthService,
                       public postService: PostService,
                       public loginService: LoginService,
                       public sidenavService: SidenavService) {

        authService.handleAuthentication();

    }

    public loginOpen(): void {

        this.loginService.open<LoginComponent>(LoginComponent);

    }

}
