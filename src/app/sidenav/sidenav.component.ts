import { Component } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    public constructor(public sidenavService: SidenavService) {

    }

}
