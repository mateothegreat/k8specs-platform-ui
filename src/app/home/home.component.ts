import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_lib/dialog.service';
import { PostComponent } from '../post/post.component';
import { AuthService } from '../_lib/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private dialogService: DialogService,
                       public authService: AuthService) {

        route.params.subscribe((params: any) => {

            if (params && params.tab === 'create') {

                dialogService.open<PostComponent>(PostComponent);

            }

        });

    }

    ngOnInit() {
    }

}
