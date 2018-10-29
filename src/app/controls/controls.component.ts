import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Deployment } from '../_lib/types/v1/Deployment';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

    public schemaTypes: string[] = [

        'Deployment',
        'Service',

    ];

    public formGroup = new FormGroup({

        schemaType: new FormControl('')

    });

    public constructor() {

        this.formGroup.controls.schemaType.valueChanges.subscribe((value) => {

            console.log(value);

        });

        const deployment: Deployment = new Deployment();

        // deployment.kind = 'Deployment';

        console.log(deployment);
        console.log(Object.keys(deployment));

        // for (const key of deployment) {
        //
        //     console.log(key);
        //
        // }

    }

    public ngOnInit() {


    }

}
