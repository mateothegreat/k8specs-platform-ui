import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from './post.service';
import { MonacoEditorDirective } from 'ngx-monaco';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public currentIndex: number = 0;

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

    @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;


    public constructor(public postService: PostService) {

    }

    public ngOnInit() {

    }

    public post(): void {

    }

    public selectedIndexChange(newIndex: number): void {

        this.editor.file = this.postService.files[newIndex];
        console.log('selected index change', newIndex);
        console.log(this.postService.files);

        this.currentIndex = newIndex;

    }

}
