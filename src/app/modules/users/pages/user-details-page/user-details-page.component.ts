import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { TodoService } from 'src/app/services/todo.service';
import { AlbumService } from 'src/app/services/album.service';
import { IUser } from 'src/app/interfaces/models/user';
import { Title } from '@angular/platform-browser';
import { IAsyncDataStatus } from 'src/app/utils/async-data-observable';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {
  userId = this.route.snapshot.params['id'];

  user: IAsyncDataStatus<IUser>;
  posts$ = this.postService.getPosts({ userId: this.userId });
  todos$ = this.todoService.getTodos({ userId: this.userId });
  albums$ = this.albumService.getAlbums({ userId: this.userId });

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService,
    private todoService: TodoService,
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    this.userService.getUser(this.userId).subscribe(user => {
      this.user = user;

      if (this.user.data) {
        this.titleService.setTitle(user.data.name + "'s Profile page - JSONPlaceholder Client");
      }
    });
  }
}
