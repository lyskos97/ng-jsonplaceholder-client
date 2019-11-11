import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IPost } from '../interfaces/models/post';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IUser } from '../interfaces/models/user';
import { IComment } from '../interfaces/models/comment';
import { asyncDataObservable, IAsyncDataStatus } from '../utils/async-data-observable';

interface IFilters extends ISearchParams {
  userId?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  TOTAL_POSTS = 100;

  constructor(private api: ApiService) {}

  getPosts(params: IFilters): Observable<IAsyncDataStatus<IPost[]>> {
    return asyncDataObservable(this.api.get<IPost[]>('/posts', params));
  }

  getPost(id: number | string): Observable<IAsyncDataStatus<IPost>> {
    return asyncDataObservable(
      this.api.get<IPost>(`/posts/${id}`).pipe(
        switchMap(post => {
          const user$ = this.api.get<IUser>(`/users/${post.userId}`);
          const comments$ = this.api.get<IComment[]>(`/comments?postId=${post.id}`);

          return forkJoin(user$, comments$).pipe(
            map(([user, comments]) => ({ ...post, author: user, comments }))
          );
        })
      )
    );
  }
}
