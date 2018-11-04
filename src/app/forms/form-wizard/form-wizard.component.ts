import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Deployment } from '../../_lib/types/v1/Deployment';

@Component({
    selector: 'app-form-wizard',
    templateUrl: './form-wizard.component.html',
    styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {

    public formGroup = new FormGroup({

        name: new FormControl('my-deployment', [

            Validators.required,
            Validators.pattern('^[a-zA-Z0-9-_]+$'),
            Validators.minLength(1),
            Validators.maxLength(255)

        ]),

        image: new FormControl('nginx:alpine', [

            Validators.required

        ]),

        port: new FormControl('80', [

            Validators.required,
            Validators.pattern('^[0-9]+$'),
            Validators.min(1),
            Validators.max(65000)

        ])

    });

    public constructor(private toastr: ToastrService) {

    }

    public ngOnInit() {

    }

    public generate(): void {

        let deployment: Deployment = new Deployment();

        deployment.metadata.name = this.formGroup.controls.name.value;
        // deployment.spec.
        deployment.spec.selector.matchLabels.app = this.formGroup.controls.name.value;
        deployment.spec.selector.matchLabels.asdf = this.formGroup.controls.name.value;

        console.log(deployment.toJSON());

        // this.generatorService.data = deployment.toJSON();

        this.toastr.success(`Your Deployment specs for "${this.formGroup.controls.name.value}" has been generated!`);

    }

}
