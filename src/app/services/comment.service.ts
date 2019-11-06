import { Injectable } from '@angular/core';
import { ISearchParams } from '../interfaces/utility/pagination';
import { ApiService } from './api.service';
import { IComment } from '../interfaces/models/comment';
import { Observable } from 'rxjs';

interface ICommentSearchParams extends ISearchParams {
  postId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private api: ApiService) {}

  getComments(params: ICommentSearchParams): Observable<IComment[]> {
    return this.api.get<IComment[]>('/comments', params);
  }
}
