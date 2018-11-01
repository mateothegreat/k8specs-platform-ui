import { Injectable } from '@angular/core';
import { DialogService } from '../_lib/dialog.service';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {

    public constructor(private dialogService: DialogService) {

    }

    public open(): void {

        this.dialogService.open<LoginComponent>(LoginComponent, {

            width: '240px',
            height: '300px'

        });

    }

}
