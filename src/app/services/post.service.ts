import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ISearchParams } from '../interfaces/utility/pagination';
import { IPost } from '../interfaces/models/post';

interface IFilters extends ISearchParams {
  userId: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private api: ApiService) {}

  getPosts(params: IFilters) {
    return this.api.get<IPost[]>('/posts', params);
  }
}
