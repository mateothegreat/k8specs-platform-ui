import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../posts/posts.service';
import { Post } from '../../post/post';
import { FileView } from '../../file-viewer/file-view';

@Component({
    selector: 'app-users-post',
    templateUrl: './users-post.component.html',
    styleUrls: ['./users-post.component.scss']
})
export class UsersPostComponent implements OnInit {

    @ViewChild('disqus') private disqusElement: ElementRef;

    public post: Post = new Post();
    public file: FileView;

    public pageId: string;
    public pageUrl: string;
    public pageTitle: string;

    public constructor(private route: ActivatedRoute,
                       private postsService: PostsService) {

    }

    public ngOnInit(): void {

        this.route.params.subscribe((params: any) => {

            console.log(params);

            this.postsService.getPostByNameAndUserDisplayName(params.displayName, params.postName).subscribe((post: Post) => {

                console.log(post);


                this.pageId = `/users/${params.displayName}/${params.postName}`;
                this.pageUrl = `https://k8specs.com/users/${params.displayName}/${params.postName}`;
                this.pageTitle = params.postName;

                console.log(this.pageId, this.pageUrl);

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
}
