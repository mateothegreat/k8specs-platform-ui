import { Component, OnInit, ViewChild } from '@angular/core';
import { MonacoService } from '../_lib/monaco.service';
import { ValidatorService } from './validator.service';
import { MonacoEditorDirective } from 'ngx-monaco';

@Component({
    selector: 'app-validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

    @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

    private currentFile: any;

    public consoleOutputs: string = 'Waiting for input...';

    public constructor(public monacoService: MonacoService,
                       private validatorService: ValidatorService) {
    }

    public ngOnInit() {

        this.editor.open({

            uri: 'input.yaml',
            language: 'yaml',
            content: 'asdf'

        });

    }

    public editorChange(e: any): void {

        console.log(e);

        this.currentFile = e.content;

    }

    public validate(): void {

        this.validatorService.validate(this.currentFile).subscribe((results: any) => {

            console.log(results);

            this.consoleOutputs = results.response;

        });

    }

}
