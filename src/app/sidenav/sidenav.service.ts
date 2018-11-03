import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {

    public sidenavOpened: boolean;

    public constructor() {

    }

    public toggle(): void {

        this.sidenavOpened = !this.sidenavOpened;

    }

}
