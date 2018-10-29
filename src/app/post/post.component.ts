import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from './post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    public formGroup = new FormGroup({

        name: new FormControl('', [

            Validators.required,
            Validators.pattern('^[a-zA-Z0-9-_]+$'),
            Validators.minLength(1),
            Validators.maxLength(255)

        ])

    });

    public constructor(public postService: PostService) {

    }

    public ngOnInit() {

    }

}
