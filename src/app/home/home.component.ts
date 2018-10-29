import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../_lib/dialog.service';
import { PostComponent } from '../post/post.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private dialogService: DialogService) {

        route.params.subscribe((params: any) => {

            if (params && params.tab === 'create') {

                dialogService.open<PostComponent>(PostComponent);

            }

        });

    }

    ngOnInit() {
    }

}
