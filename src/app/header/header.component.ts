import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_lib/auth.service';
import { PostService } from '../post/post.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public constructor(public authService: AuthService,
                       public postService: PostService) {

        authService.handleAuthentication();

    }

    public ngOnInit() {

        setTimeout(() => {

            this.postService.open();

        }, 500);

    }

    public menuClick(): void {


    }

}
