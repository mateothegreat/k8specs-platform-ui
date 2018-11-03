import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorPostService } from './validator-post.service';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from '../../_lib/dialog.service';

@Component({
    selector: 'app-validator-post',
    templateUrl: './validator-post.component.html',
    styleUrls: ['./validator-post.component.scss']
})
export class ValidatorPostComponent {

    public formGroup = new FormGroup({

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(32),
            //Validators.pattern('^[a-zA-Z0-9._- ]+$')

        ]),

        description: new FormControl(''),

        visibility: new FormControl(true)

    });

    public constructor(private validatorPostService: ValidatorPostService,
                       private toastrService: ToastrService,
                       private dialogService: DialogService) {

    }

    public post(): void {

        this.validatorPostService.post(this.formGroup.value).subscribe((result: any) => {

            if (result) {

                this.toastrService.success('Your spec has been posted!');

                this.dialogService.close();

            }

        });

    }

}
