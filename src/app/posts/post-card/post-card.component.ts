import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../post/post';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-post-card',
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

    @Input() public post: Post;

    public constructor(private toastrService: ToastrService) {

    }

    public ngOnInit() {

    }

    public copied(): void {

        this.toastrService.success('Copied!');

    }

}
