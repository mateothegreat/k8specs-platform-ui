import { Component } from '@angular/core';
import { DialogService } from './_lib/dialog.service';
import { FormWizardComponent } from './forms/form-wizard/form-wizard.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public constructor(private dialogService: DialogService) {

        dialogService.open<FormWizardComponent>(FormWizardComponent);

    }

    public menuClick(): void {


    }

}
