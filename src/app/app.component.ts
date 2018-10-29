import { Component } from '@angular/core';
import { DialogService } from './_lib/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private dialogService: DialogService) {

    }

    public menuClick(): void {


    }

}
