import { Injectable, Injector } from '@angular/core';
import { ISearchParams } from '../interfaces/utility/pagination';
import { ApiService } from './api.service';
import { IComment } from '../interfaces/models/comment';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/models/post';
import { PostService } from './post.service';
import { switchMap, map } from 'rxjs/operators';
import { IUser } from '../interfaces/models/user';
import { IAsyncDataStatus, asyncDataObservable } from '../utils/async-data-observable';

interface ICommentSearchParams extends ISearchParams {
  postId: number | string;
}

interface ICommentWithPost extends IComment {
  post: IPostWithAuthor;
}

interface IPostWithAuthor extends IPost {
  author: IUser;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private api: ApiService) {}

  getComments(params: ICommentSearchParams): Observable<IAsyncDataStatus<IComment[]>> {
    return asyncDataObservable(this.api.get<IComment[]>('/comments', params));
  }

  getComment(id: number | string): Observable<ICommentWithPost> {
    return this.api.get<IComment>(`/comments/${id}`).pipe(
      switchMap(comment =>
        this.api.get<IPost>(`/posts/${comment.postId}`).pipe(
          switchMap(post =>
            this.api.get<IUser>(`/users/${post.userId}`).pipe(
              map(user => ({
                ...post,
                author: user
              }))
            )
          ),
          map(post => ({ ...comment, post }))
        )
      )
    );
  }
}
