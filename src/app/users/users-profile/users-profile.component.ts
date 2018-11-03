import { Component } from '@angular/core';
import { UsersProfileService } from './users-profile.service';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts/posts.service';
import { Post } from '../../post/post';

@Component({
    selector: 'app-users-profile',
    templateUrl: './users-profile.component.html',
    styleUrls: ['./users-profile.component.scss']
})
export class UsersProfileComponent {

    public profile: any;
    public posts: Post[];

    public constructor(private usersProfileService: UsersProfileService,
                       private postsService: PostsService,
                       private route: ActivatedRoute) {

        route.params.subscribe((params: any) => {

            if (params.displayName) {

                this.usersProfileService.getProfile(params.displayName).subscribe((results: any) => {

                    console.log(results);

                    this.profile = results;

                });

                this.postsService.getPostsByDisplayName(params.displayName).subscribe((results: any) => {

                    console.log(results);

                    this.posts = results.content;

                });

            }

        });

    }

}
