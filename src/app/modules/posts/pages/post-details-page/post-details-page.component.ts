import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IPost } from 'src/app/interfaces/models/post';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {
  postId = this.route.snapshot.params['id'];
  post: IAsyncDataStatus<IPost>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.postService.getPost(this.postId).subscribe(post => {
      this.post = post;

      if (post.data) {
        this.titleService.setTitle(post.data.title);
      }
    });
  }
}
