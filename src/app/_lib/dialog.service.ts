import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/typings/portal';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    private matDialogRef: MatDialogRef<any>;

    public constructor(private matDialog: MatDialog) {


    }

    public open<T>(componentRef: ComponentType<T>, config?: { width?: string, height?: string }) {

        let _config: MatDialogConfig = new MatDialogConfig();

        _config.width = config && config.width || '500px';
        _config.height = config && config.height || '500px';

        this.matDialogRef = this.matDialog.open(componentRef, _config);

    }

    public close(): void {

        this.matDialogRef.close();

    }

}
