import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts/posts.service';
import { Post } from '../../post/post';
import { FileView } from '../../file-viewer/file-view';

@Component({
    selector: 'app-users-post',
    templateUrl: './users-post.component.html',
    styleUrls: ['./users-post.component.scss']
})
export class UsersPostComponent implements AfterViewInit {

    public post: Post = new Post();

    public file: FileView;

    public constructor(private route: ActivatedRoute,
                       private postsService: PostsService) {


        route.params.subscribe((params: any) => {

            console.log(params);

            postsService.getPostByNameAndUserDisplayName(params.displayName, params.postName).subscribe((post: Post) => {

                console.log(post);

                this.post = post;

                this.file = new FileView({

                    name: post.name,
                    code: post.value,
                    tags: post.tags,
                    username: post.user.displayName,
                    email: post.user.email,
                    stampCreated: post.stampCreated

                });

            });

        });

    }

    public ngAfterViewInit(): void {


    }

}
