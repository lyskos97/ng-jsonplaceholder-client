import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
  posts$ = this.postService.getPosts({ _limit: 20, _page: 1 });

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Posts');
  }

  loadComments(postId) {
    return this.commentService.getComments({ postId });
  }
}
