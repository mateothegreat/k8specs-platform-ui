import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ComponentType } from '@angular/cdk/typings/portal';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    public constructor(private matDialog: MatDialog) {


    }

    public open<T>(componentRef: ComponentType<T>) {

        let config: MatDialogConfig = new MatDialogConfig();

        this.matDialog.open(componentRef, config);

    }

}
