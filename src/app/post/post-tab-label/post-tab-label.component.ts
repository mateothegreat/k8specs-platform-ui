import { Component, Input } from '@angular/core';
import { PostService } from '../post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-post-tab-label',
    templateUrl: './post-tab-label.component.html',
    styleUrls: ['./post-tab-label.component.scss']
})
export class PostTabLabelComponent {

    @Input() public label: string = 'new-file.yaml';
    @Input() public index: number;
    @Input() public autoFocus: boolean = true;

    public formGroup = new FormGroup({

        name: new FormControl('', [

            Validators.required,
            Validators.pattern('^[a-zA-Z0-9-_.]+$'),
            Validators.minLength(1),
            Validators.maxLength(255)

        ])

    });

    public constructor(private postService: PostService) {

        this.formGroup.controls.name.valueChanges.subscribe((change: string) => {

            if (this.formGroup.valid) {

                this.postService.tabUpdateLabelByIndex(this.index, change);

            }

        });

    }

    public removeButtonClick(): void {

        this.postService.tabRemoveByLabel(this.label);

    }

}
