import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../post/post';
import { RequestSearch } from '../_lib/RequestSearch';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

    public posts: Post[];

    public constructor(private postsService: PostsService) {

        postsService.getPosts(new RequestSearch({

            terms: 'apiVersion'

        })).subscribe((results: any) => {

            console.log(results);

            this.posts = results.content;

        });

    }

    public ngOnInit() {


    }

}
