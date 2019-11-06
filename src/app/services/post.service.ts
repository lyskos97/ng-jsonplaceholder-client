import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IPost } from '../interfaces/models/post';
import { IUser } from '../interfaces/models/user';
import { Observable, forkJoin, from, of } from 'rxjs';
import { switchMap, map, zip, combineLatest } from 'rxjs/operators';
import { UserService } from './user.service';
import { CommentService } from './comment.service';
import { IComment } from '../interfaces/models/comment';

interface IFilters extends ISearchParams {
  userId?: number | string;
}

interface IPostWithAuhorAndComments extends IPost {
  author: IUser;
  comments: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private api: ApiService,
    private userService: UserService,
    private commentService: CommentService
  ) {}

  getPosts(params: IFilters) {
    return this.api.get<IPost[]>('/posts', params);
  }

  getPost(id: number | string): Observable<IPostWithAuhorAndComments> {
    return this.api.get<IPost>(`/posts/${id}`).pipe(
      switchMap(post => {
        const user$ = this.userService.getUser(post.userId);
        const comments$ = this.commentService.getComments({ postId: post.id });

        return forkJoin(user$, comments$).pipe(
          map(([user, comments]) => ({ ...post, author: user, comments }))
        );
      })
    );
  }
}
