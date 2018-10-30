import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ComponentType } from '@angular/cdk/typings/portal';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    public constructor(private matDialog: MatDialog) {


    }

    public open<T>(componentRef: ComponentType<T>, config?: { width?: string, height?: string }) {

        let _config: MatDialogConfig = new MatDialogConfig();

        _config.width = config && config.width || '500px';
        _config.height = config && config.height || '500px';

        this.matDialog.open(componentRef, _config);

        // setTimeout(() => {
        //
        //     this.matDialog.open(componentRef, config);
        //
        // }, 1000);

    }

}
