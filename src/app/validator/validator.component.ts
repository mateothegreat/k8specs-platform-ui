import { Component, OnDestroy, OnInit } from '@angular/core';
import { MonacoService } from '../_lib/monaco.service';
import { ValidatorService } from './validator.service';
import { NgxEditorModel } from 'ngx-monaco-editor';
import { ValidatorPostService } from './validator-post/validator-post.service';
import { ValidatorPostComponent } from './validator-post/validator-post.component';
import { Post } from '../post/post';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login/login.service';

@Component({
    selector: 'app-validator',
    templateUrl: './validator.component.html',
    styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit, OnDestroy {

    // @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

    public code: any = `apiVersion: v1
kind: Service
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - name: http
      port: 8080
      targetPort: 8080`;

    public model: NgxEditorModel = {
        value: this.code,
        language: 'yaml',
        uri: 'input.yaml'
    };

    public validated: boolean;

    public consoleOutputs: string = 'Waiting for input...';

    public constructor(public monacoService: MonacoService,
                       public validatorPostService: ValidatorPostService,
                       public loginService: LoginService,
                       private validatorService: ValidatorService,
                       private toastrService: ToastrService) {
    }

    public ngOnInit() {

        // setTimeout(() => {
        //
        //     this.validatorPostService.open<ValidatorPostComponent>(ValidatorPostComponent);
        //
        // }, 500);
        // this.editor.open({
        //
        //     uri: 'input.yaml',
        //     language: 'yaml',
        //     content: 'asdf'
        //
        // });

    }

    public ngOnDestroy(): void {

        this.model = null;

    }

    public buttonPostClick(): void {

        this.validatorPostService.open(<Post>{

            name: 'input.yaml',
            value: this.code

        }, ValidatorPostComponent);

    }

    public validate(): void {

        this.validatorService.validate(this.code).subscribe((results: any) => {

            console.log(results);

            if (results.valid) {

                this.toastrService.success('Validation passed!');

                this.validated = true;

            } else {

                this.toastrService.error('Validation failed!');

                this.validated = false;

            }

            this.consoleOutputs = results.response;

        });

    }

}
