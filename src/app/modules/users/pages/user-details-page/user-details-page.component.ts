import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/models/user';
import { IPost } from 'src/app/interfaces/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  userId: string;
  user: IUser;
  posts: IPost[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.getUser(+this.userId).subscribe(user => {
      this.user = user;
    });
  }

  loadPosts() {
    this.postService.getPosts({ userId: this.userId }).subscribe(posts => {
      this.posts = posts;
    });
  }
}
