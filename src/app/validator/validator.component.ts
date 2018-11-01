import { Component, OnInit } from '@angular/core';
import { MonacoService } from '../_lib/monaco.service';
import { ValidatorService } from './validator.service';

@Component({
    selector: 'app-validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

    // @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

    public code: any;

    public consoleOutputs: string = 'Waiting for input...';

    public constructor(public monacoService: MonacoService,
                       private validatorService: ValidatorService) {
    }

    public ngOnInit() {

        // this.editor.open({
        //
        //     uri: 'input.yaml',
        //     language: 'yaml',
        //     content: 'asdf'
        //
        // });

    }

    public validate(): void {

        this.validatorService.validate(this.code).subscribe((results: any) => {

            console.log(results);

            this.consoleOutputs = results.response;

        });

    }

}
