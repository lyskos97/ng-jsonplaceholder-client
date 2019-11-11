import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { Title } from '@angular/platform-browser';
import { IPost } from 'src/app/interfaces/models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';

interface IPost_extended extends IPost {
  showComments?: boolean;
  comments$?: Observable<IAsyncDataStatus<IPost[]>>;
}

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
  PAGE_SIZE = 10;

  page: number;
  posts: IAsyncDataStatus<IPost_extended[]>;

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (!this.route.snapshot.queryParams.page) {
      this.router.navigate([], { queryParamsHandling: 'merge', queryParams: { page: 1 } });
    }
  }

  ngOnInit() {
    this.titleService.setTitle('Posts - JSONPlaceholder Client');

    this.fetchPostsOnPageChange();
  }

  fetchPostsOnPageChange() {
    this.route.queryParams.subscribe(query => {
      this.page = Number(query.page);

      this.postService.getPosts({ _limit: this.PAGE_SIZE, _page: this.page }).subscribe(posts => {
        this.posts = posts;
      });
    });
  }

  createCommentLoader(postId) {
    return this.commentService.getComments({ postId });
  }

  handlePageChange(nextPage) {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: { page: nextPage }
    });
  }

  get totalPages() {
    return Math.ceil(this.postService.TOTAL_POSTS / this.PAGE_SIZE);
  }
}
