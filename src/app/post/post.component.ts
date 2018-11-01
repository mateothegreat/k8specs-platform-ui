import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public formGroup = new FormGroup({

        visibility: new FormControl('public')

    });

    public currentIndex: number = 0;

    // public currentFile: MonacoFile = {
    //
    //     uri: 'untitled.yaml',
    //     language: 'yaml',
    //     content: ''
    //
    // };

    public readonly monacoOptions = {

        quickSuggestions: true,
        lineNumbers: true,
        cursorBlinking: 'phase',
        scrollBeyondLastLine: false,
        autoIndent: true,
        formatOnType: true,
        formatOnPaste: true,
        codeLens: true,

    };

//     public files: MonacoFile[] = [
//
//         {
//
//             uri: 'deploymen.yaml',
//             language: 'yaml',
//             content: `apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: nginx-deployment
//   namespace: default
//   labels:
//     app: nginx
// spec:
//   replicas: 1
//   selector:
//     matchLabels:
//       apps.deployment: nginx
//   template:
//     metadata:
//       labels:
//         apps.deployment: nginx
//     spec:
//       containers:
//       - name: nginx
//         image: nginx:alpine`
//         }
//     ];

    // @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;


    public constructor(public postService: PostService) {

    }

    public ngOnInit() {

        // this.editor.open(this.postService.files[0]);

    }

    public post(): void {

    }

    private isTabChanging: boolean;

    public selectedIndexChange(newIndex: number): void {

        this.isTabChanging = true;

        // this.editor.open(this.postService.files[newIndex]);

        this.currentIndex = newIndex;

        this.isTabChanging = false;

    }

    public editorChange(e: any): void {

        if (!this.isTabChanging) {

            // this.postService.files[this.currentIndex] = e;

        }

    }

}
