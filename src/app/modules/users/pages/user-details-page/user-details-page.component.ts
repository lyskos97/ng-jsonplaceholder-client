import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  userId = this.route.snapshot.params['id'];

  user$ = this.userService.getUser(this.userId);
  posts$ = this.postService.getPosts({ userId: this.userId });
  todos$ = this.todoService.getTodos({ userId: this.userId });

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService,
    private todoService: TodoService
  ) {}

  ngOnInit() {}

  loadPosts() {}
}
